const express = require("express");

// mongodb database
// const mongodb = require("./data/database");

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

app.use("/", require("./routes"));

// wrap
// mongodb.initDb((err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     app.listen(port, () => {
//       console.log(`Database is listening and Running on port ${port}`);
//     });
//   }
// });
