import { put, all, take, delay, call, takeEvery } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import axios from "axios";
import firebase from "../firebase/index";

function* startListener() {
  // // #1: Creates an eventChannel and starts the listener;
  const channel = new eventChannel(emiter => {
    const listener = firebase
      .database()
      .ref("entries")
      .on("value", snapshot => {
        emiter({
          data: snapshot.val() || {}
        });
      });

    //   // #2: Return the shutdown method;
    return () => {
      listener.off();
    };
  });

  // // #3: Creates a loops to keep the execution in memory;
  while (true) {
    const { data } = yield take(channel);

    //   // #4: Pause the task until the channel emits a signal and dispatch an action in the store;

    yield put({
      type: "FETCH_DATA_ASYNC",
      data: Object.values(data)
    });
  }
}

const submitToServer = async data => {
  await axios
    .post(
      `https://us-central1-myfunctions-330ec.cloudfunctions.net/entries`,
      data
    )
    .then(res => {
      console.log(res);
      console.log(res.data, "my data here");
    })
    .catch(err => {
      console.log(err);
    });
};

function* callSubmit(action) {
  yield call(submitToServer, action.data);
}

function* saveDataSaga() {
  yield takeEvery("CREATE_NEW_DATA", callSubmit);
}

export default function* root() {
  yield all([startListener(), saveDataSaga()]);
}
