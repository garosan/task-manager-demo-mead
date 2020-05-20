require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("5ec2034fec70f8395011746f")
//   .then(() => {
//     return Task.countDocuments({ completed: false });
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("5ec2260076206c0bf0ce3c7b")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
