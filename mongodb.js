// CRUD operations demo

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }
    console.log("Connected correctly!");
    const db = client.db(databaseName);

    // db.collection("users").findOne(
    //   { _id: new ObjectID("5ec1c8ba0fc9e236dc1c1cf0") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("Unable to find.");
    //     }

    //     console.log(user);
    //   }
    // );

    // db.collection("users")
    //   .find({ age: 27 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // db.collection("tasks").findOne(
    //   { _id: new ObjectID("5ec1bd9422b4f1235c45e156") },
    //   (error, task) => {
    //     if (error) {
    //       console.log("There was an error fetching the task.");
    //     }

    //     console.log(task);
    //   }
    // );

    // db.collection("tasks")
    //   .find({ completed: false })
    //   .toArray((error, tasks) => {
    //     if (error) {
    //       console.log("There was an error fetching tasks");
    //     }

    //     console.log(tasks);
    //   });

    // db.collection("tasks")
    //   .updateMany({ completed: false }, { $set: { completed: true } })
    //   .then((result) => {
    //     console.log("Update was successfull.", result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    db.collection("tasks")
      .deleteOne({ description: "Do laundry" })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
