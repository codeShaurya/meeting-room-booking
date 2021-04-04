var Meeting = require('./Meeting').Meeting;
var log = require('./helper').log;

var meeting = new Meeting();
let res;

//adding buidling flipkart1
res = meeting.addBuilding("flipkart1");
log(res);

//adding floor floor1, in buidling flipkart1
res = meeting.addFloor("flipkart1", "floor1");
log(res);

//adding room room1, on floor1, in buidling flipkart1
res = meeting.addRoom("flipkart1", "floor1", "room1");
log(res);

//adding room room2, on floor2, in buidling flipkart1
res = meeting.addRoom("flipkart1", "floor1", "room2");
log(res);

//booking room room1, on floor1, in buidling flipkart1
res = meeting.bookSlot("flipkart1", "floor1", "room1", {start: 10, end: 4});
log(res);

//booking room room1, on floor1, in buidling flipkart1
res = meeting.bookSlot("flipkart1", "floor1", "room1", {start: 10, end: 12});
log(res);

//booking room room1, on floor1, in buidling flipkart1
res = meeting.bookSlot("flipkart1", "floor1", "room1", {start: 5, end: 7});
log(res);

//cancelling booked room room1, on floor1, in buidling flipkart1
res = meeting.cancelSlot("flipkart1", "floor1", "room1", {start: 5, end: 7});
log(res);

//cancelling booked room room1, on floor1, in buidling flipkart1
res = meeting.cancelSlot("flipkart1", "floor1", "room1", {start: 5, end: 9});
log(res);

//get all booking on floor1, in buidling flipkart1
res = meeting.getAllBooking("flipkart1", "floor1");
log(res);

console.log(JSON.stringify(meeting));


