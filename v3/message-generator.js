import Chance from "chance";

const chance = new Chance();

const generateMessage = (venderQueueARN) => {
    return {
        name: chance.name(),
        orderId: chance.guid(),
        vendorId: venderQueueARN
    }
}

export {generateMessage};