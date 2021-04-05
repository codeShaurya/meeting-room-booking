const { Building } = require('./Building');
const { ADD_BUILDING, GET_BUILDING, GET_BUILDING_COUNT, ERROR } = require('./constant');

class Meeting {    
    constructor() {
        this.buildings = {};
    }

    dispatch(action) {
        const {type, payload} = action;

        switch(type) {
            case ADD_BUILDING: {
                return this.addBuilding(payload.buildingName);
            }

            case GET_BUILDING_COUNT: {
                return this.getBuildingCount();
            }

            case GET_BUILDING: {
                return this.getBuildingByName(payload.buildingName);
            }

            default: {
                let res = this.getBuildingByName(payload.buildingName);
                if(!res['success']) {
                    return res;
                }

                let building = res['data'];        
                return building.dispatch(action);
            }
        }

    }

    addBuilding(name) {
        if(this.buildings[name] !== undefined) {
            return {
                success: false,
                error:  ERROR.getError(2)
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

    getBuildingByName(name) {
        let building = this.buildings[name];
        if(building === undefined) {
            return {
                success: false,
                error:  ERROR.getError(5)
            }
        }

        return {
            success: true,
            data: building,
        }
    }

    getBuildingCount() {
        return {
            success: true,
            data: Object.keys(this.buildings).length,
        };
    }
};

module.exports.Meeting = Meeting;