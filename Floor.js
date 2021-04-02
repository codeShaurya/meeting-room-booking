
var Errors = require('./Errors').Errors;
var Room = require('./Room').Room;

var error = new Errors();

class Floor {
    constructor(name) {
        this.name = name;
        this.rooms = {}
    }

    addRoom(roomName) {
        if(this.rooms[roomName] !== undefined) {
            return {
                success: false,
                error: error.getError(4),
            }
        }
        
        let room = new Room(roomName);

        this.rooms = {
            ...this.rooms,
            [roomName] : room,
        }

        return {
            success: true,
            data: room,
        }
    }

    bookSlot(roomName, slot) {
        let res = this.getRoomByName(roomName);
        if(!res['success']) {
            return res;
        }

        let room = res['data'];
        return room.bookSlot(slot);
    }

    getRoomByName(name) {
        let room = this.rooms[name];
        if(room === undefined) {
            return {
                success: false,
                error:  error.getError(6)
            }
        }

        return {
            success: true,
            data: room,
        }
    }
};

module.exports.Floor = Floor;
