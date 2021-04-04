class Errors {
    constructor() {
        this.codes = {
            1 : "SUCCESS",
            2 : "Building with this name already exist",
            3 : "Floor with this name in the same buidling already exist",
            4 : "Room with this name in the same floor already exist",
            5 : "Building with this name doest  not exist",
            6 : "Floor with this name doest  not exist",
            7 : "Room with this name doest  not exist",
            8 : "Slot not avaiable",
            9 : "Given Slot not avaiable in provided location",
        }
    }

    getError(code) {
        return this.codes[code];
    }
}


module.exports.Errors = Errors;