var { Meeting } = require('./Meeting');
var { log } = require('./helper');
const { 
    ADD_BUILDING,
    ADD_FLOOR,
    ADD_ROOM,
    BOOK_SLOT,
    CANCEL_SLOT,
    } = require('./constant');

var meeting = new Meeting();
let res;

res = meeting.dispatch({
    type: ADD_BUILDING,
    payload: {
        buildingName:"b1"
    }
});
log(res);

res = meeting.dispatch({
    type: ADD_BUILDING,
    payload: {
        buildingName:"b2"
    }
});

log(res);

res = meeting.dispatch({
    type: ADD_FLOOR,
    payload: {
        buildingName: "b1",
        floorName: "f1"
    }
});
log(res);

res = meeting.dispatch({
    type: ADD_FLOOR,
    payload: {
        buildingName: "b1",
        floorName: "f1"
    }
});
log(res);

res = meeting.dispatch({
    type: ADD_FLOOR,
    payload: {
        buildingName: "b",
        floorName: "f1"
    }
});
log(res);


res = meeting.dispatch({
    type: ADD_ROOM,
    payload: {
        buildingName: "b1",
        floorName: "f1",
        roomName: "r1",
    }
});
log(res);

res = meeting.dispatch({
    type: ADD_ROOM,
    payload: {
        buildingName: "b1",
        floorName: "f2",
        roomName: "r1",
    }
});
log(res);

res = meeting.dispatch({
    type: ADD_ROOM,
    payload: {
        buildingName: "b3",
        floorName: "f2",
        roomName: "r1",
    }
});
log(res);

res = meeting.dispatch({
    type: ADD_ROOM,
    payload: {
        buildingName: "b1",
        floorName: "f6",
        roomName: "r1",
    }
});
log(res);

res = meeting.dispatch({
    type: ADD_ROOM,
    payload: {
        buildingName: "b1",
        floorName: "f1",
        roomName: "r1",
    }
});
log(res);

res = meeting.dispatch({
    type: BOOK_SLOT,
    payload: {
        buildingName: "b1",
        floorName: "f1",
        roomName: "r1",
        slotToBe: {start: 10, end: 4}
    }
});
log(res);

res = meeting.dispatch({
    type: BOOK_SLOT,
    payload: {
        buildingName: "b1",
        floorName: "f1",
        roomName: "r1",
        slotToBe: {start: 10, end: 12}
    }
});
log(res);

res = meeting.dispatch({
    type: BOOK_SLOT,
    payload: {
        buildingName: "b1",
        floorName: "f1",
        roomName: "r1",
        slotToBe: {start: 5, end: 7}
    }
});
log(res);

res = meeting.dispatch({
    type: BOOK_SLOT,
    payload: {
        buildingName: "b4",
        floorName: "f1",
        roomName: "r1",
        slotToBe: {start: 5, end: 7}
    }
});
log(res);

res = meeting.dispatch({
    type: BOOK_SLOT,
    payload: {
        buildingName: "b1",
        floorName: "f4",
        roomName: "r1",
        slotToBe: {start: 5, end: 7}
    }
});
log(res);

res = meeting.dispatch({
    type: BOOK_SLOT,
    payload: {
        buildingName: "b1",
        floorName: "f1",
        roomName: "r6",
        slotToBe: {start: 5, end: 7}
    }
});
log(res);

res = meeting.dispatch({
    type: CANCEL_SLOT,
    payload: {
        buildingName: "b1",
        floorName: "f1",
        roomName: "r1",
        slotToBe: {start: 10, end: 4}
    }
});
log(res);

res = meeting.dispatch({
    type: CANCEL_SLOT,
    payload: {
        buildingName: "b1",
        floorName: "f1",
        roomName: "r1",
        slotToBe: {start: 10, end: 9}
    }
});
log(res);

console.log(JSON.stringify(meeting));


