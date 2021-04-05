
var { Room } = require('./Room');
const { GET_ROOM, ADD_ROOM, ERROR } = require('./constant');

class Floor {
    constructor(name) {
        this.name = name;
        this.rooms = {}
    }

    dispatch(action) {
        const { type, payload } = action;
        switch(type) {
            case ADD_ROOM: {
                return this.addRoom(payload.roomName);
            }

            case GET_ROOM: {
                return this.getRoomByName(payload.roomName);
            }

            default: {
                let res = this.getRoomByName(payload.roomName);
                if(!res['success']) {
                    return res;
                }

                let room = res['data'];
                return room.dispatch(action);
            }
        }
    }

    addRoom(roomName) {
        if(this.rooms[roomName] !== undefined) {
            return {
                success: false,
                error: ERROR.getError(4),
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

    getRoomByName(name) {
        let room = this.rooms[name];
        if(room === undefined) {
            return {
                success: false,
                error:  ERROR.getError(6)
            }
        }

        return {
            success: true,
            data: room,
        }
    }
};

module.exports.Floor = Floor;
