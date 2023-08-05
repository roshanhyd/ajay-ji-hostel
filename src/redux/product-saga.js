import { put, takeEvery } from "@redux-saga/core/effects";

function* getGuests() {
    console.warn("Get Guests Saga");
    const guest = yield fetch(`http://localhost:9191/guest`);
    let guestData = yield guest.json()
    yield put({
        type: "set_guests",
        data: guestData
    })
    console.log(guestData);
}

function* mySaga() {
    yield takeEvery("fetch_guests", getGuests)
}

export default mySaga;