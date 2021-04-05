
const { Slot } = require('./Slot');
const { BOOK_SLOT, CANCEL_SLOT, ERROR } = require('./constant');

class Room {
    constructor(roomName) {
        this.name = roomName
        this.slot = [];
    }

    dispatch(action) {
        const {type, payload} = action;

        switch(type) {
            case BOOK_SLOT: {
                return this.bookSlot(payload.slotToBe);
            }

            case CANCEL_SLOT: {
                return this.cancelSlot(payload.slotToBe);
            }

            default: {

            }
        }
    }

    bookSlot(slotToBe) {
        let isFree = true;

        this.slot.forEach(slot => {
            let conflict = this.checkConflict(slot, slotToBe);
            if(conflict) {
                isFree = false;
            }
        })

        if(!isFree) {
            return {
                success: false,
                error: ERROR.getError(8),
            }
        }

        let slot = new Slot(slotToBe.start, slotToBe.end);
        this.slot.push(slot);

        return {
            success: true,
            data: slot,
        }
    }

    cancelSlot(slotToBe) {
        let index = this.slot.findIndex(s => (
                s.start === slotToBe.start && s.end === slotToBe.end
            )
        );

        if(index === -1) {
            return {
                success: false,
                error: ERROR.getError(9),
            }
        }
        
        this.slot.splice(index, 1);

        return {
            success: true,
            data: "Slot cancelled successfully",
        }
    }

    checkConflict(slot, slotToBe) {
        let {start, end} = slotToBe;
        if(slot.end >= start && slot.end <= end) {
            return true;
        }

        if(slot.start >= start && slot.start <= end) {
            return true;
        }

        if(slot.start <= start && slot.end >= end) {
            return true;
        }

        return false;
    }
};

module.exports.Room = Room;
