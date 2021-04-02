
var slots = 0;

class Slot {
    constructor(start, end) {
        this.start = start;
        this.end = end;
        this.slotId = slots++;
    }
}

module.exports.Slot = Slot;