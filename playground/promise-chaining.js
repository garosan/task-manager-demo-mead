require("../src/db/mongoose");
const User = require("../src/models/user");

// User.findByIdAndUpdate("5ec34feac01ba43f609664fb", { email: "garosanchez20@gmail.com" })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ email: "garosanchez10@gmail.com" });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("5ec3de5dedaff235c0ddec3f", 43)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
