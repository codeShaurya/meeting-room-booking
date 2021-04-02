const Building = require('./Building').Building;
const Errors = require('./Errors').Errors;

const error = new Errors();

class Meeting {    
    constructor() {
        this.buildings = {};
    }

    addBuilding(name) {
        if(this.buildings[name] !== undefined) {
            return {
                success: false,
                error:  error.getError(2)
            }
        }
 
        let building = new Building(name);
        this.buildings = {
            ...this.buildings,
            [name]: building,
        }

        return {
            success: true,
            data: building,
        };
    }

    addFloor(buildingName, floorName) {
        let res = this.getBuildingByName(buildingName);
        if(!res['success']) {
            return res;
        }

        let building = res['data'];        
        return building.addFloor(floorName);
    }

    addRoom(buildingName, floorName, roomName) {
        let res = this.getBuildingByName(buildingName);
        if(!res['success']) {
            return res;
        }

        let building = res['data'];
        return building.addRoom(floorName, roomName);
    }

    bookSlot(buildingName, floorName, roomName, slot) {
        let res = this.getBuildingByName(buildingName);
        if(!res['success']) {
            return res;
        }

        let building = res['data'];
        return building.bookSlot(floorName, roomName, slot);
    }

    getBuildingByName(name) {
        let building = this.buildings[name];
        if(building === undefined) {
            return {
                success: false,
                error:  error.getError(5)
            }
        }

        return {
            success: true,
            data: building,
        }
    }

    getNumberOfBuilding() {
        return {
            success: true,
            data: Object.keys(this.buildings).length,
        };
    }
};

module.exports.Meeting = Meeting;