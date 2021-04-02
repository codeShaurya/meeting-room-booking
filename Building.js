var Floor = require('./Floor').Floor;
var Errors = require('./Errors').Errors;

var error = new Errors();

class Building {
    constructor(name) {
        this.buildingName = name;
        this.floors = {}
    }

    addFloor(floorName) {
        if(this.floors[floorName] !== undefined) {
            return {
                success: false,
                error: error.getError(3),
            }
        }

        let floor = new Floor(floorName);
        this.floors = {
            ...this.floors,
            [floorName]: floor,
        }
        
        return {
            success: true,
            data: floor,
        }
    }

    addRoom(floorName, roomName) {
        let res = this.getFloorByName(floorName);
        if(!res['success']) {
            return res;
        }

        let floor = res['data'];
        return floor.addRoom(roomName);   
    }

    bookSlot(floorName, roomName, slot) {
        let res = this.getFloorByName(floorName);
        if(!res['success']) {
            return res;
        }

        let floor = res['data'];
        return floor.bookSlot(roomName, slot); 
    }

    getFloorByName(name) {
        let floor = this.floors[name];
        if(floor === undefined) {
            return {
                success: false,
                error:  error.getError(6)
            }
        }

        return {
            success: true,
            data: floor,
        }
    }
};

module.exports.Building = Building;
