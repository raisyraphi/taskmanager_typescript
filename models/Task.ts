import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
})
const Task = mongoose.model('Task', TaskSchema)
export default Task
//module.exports = mongoose.model('Task', TaskSchema)
  
export function find(arg0: {}) {
  throw new Error("Function not implemented.")
}

export function create(body: any) {
  throw new Error("Function not implemented.")
}

export function findOne(arg0: { _id: any }) {
  throw new Error("Function not implemented.")
}

export function findOneAndDelete(arg0: { _id: any }) {
  throw new Error("Function not implemented.")
}

export function findOneAndUpdate(arg0: { _id: any }, body: any, arg2: { new: boolean; runValidators: boolean }) {
  throw new Error("Function not implemented.")
}

