import { put, take, fork, takeEvery } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import { delay } from "redux-saga/effects";
import { data } from "../TableForm";
import firebase from "../firebase/index";
import { addData } from "../actions/Actions";

// function* tableAsync() {
//   yield delay(4000);
//   yield put({
//     type: "CREATE_NEW_DATA_ASYNC",
//     posts: state
//   });
// }

function* startListener() {
  // // #1: Creates an eventChannel and starts the listener;
  const channel = new eventChannel(emiter => {
    const listener = firebase
      .database()
      .ref("entries")
      .on("value", snapshot => {
        emiter({ data: snapshot.val() || {} });
      });

    //   // #2: Return the shutdown method;
    return () => {
      listener.off();
    };
  });

  // // #3: Creates a loops to keep the execution in memory;
  while (true) {
    const { data } = yield take(channel);
    console.log(Object.values(data), typeof data, "yaya");
    //   // #4: Pause the task until the channel emits a signal and dispatch an action in the store;

    yield put({
      type: "CREATE_NEW_DATA",
      data: Object.values(data)
    });
  }

  // yield takeEvery("CREATE_NEW_DATA", tableAsync);
}

export default function* root() {
  yield fork(startListener);
}
