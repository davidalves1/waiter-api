import { model, Schema } from 'mongoose';

export enum STATUS {
  WAITING = 'WAITING',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export const Order = model('Order', new Schema({
  table: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: [STATUS.WAITING, STATUS.IN_PROGRESS, STATUS.DONE],
    default: STATUS.WAITING
  }
}));
