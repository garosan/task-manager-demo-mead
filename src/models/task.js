const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    trim: true,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

taskSchema.pre("save", async function (next) {
  const task = this;

  // Logic to run before saving

  console.log("Im a pre-save hook in the task model");
  next();
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
