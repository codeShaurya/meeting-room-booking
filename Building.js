var { Floor } = require('./Floor');
const { GET_FLOOR, ADD_FLOOR, GET_FLOOR_COUNT, ERROR } = require('./constant');

class Building {
    constructor(name) {
        this.buildingName = name;
        this.floors = {}
    }

    dispatch(action) {
        const {type, payload} = action;

        switch(type) {
            case ADD_FLOOR: {
                return this.addFloor(payload.floorName);
            }

            case GET_FLOOR: {
                return this.getFloorByName(payload.floorName);
            }

            case GET_FLOOR_COUNT: {

            }

            default: {
                let res = this.getFloorByName(payload.floorName);
                if(!res['success']) {
                    return res;
                }

                let floor = res['data'];
                return floor.dispatch(action); 
            }
        }
    }

    addFloor(floorName) {
        if(this.floors[floorName] !== undefined) {
            return {
                success: false,
                error: ERROR.getError(3),
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

    getFloorByName(name) {
        let floor = this.floors[name];
        if(floor === undefined) {
            return {
                success: false,
                error:  ERROR.getError(6)
            }
        }

        return {
            success: true,
            data: floor,
        }
    }
};

module.exports.Building = Building;
