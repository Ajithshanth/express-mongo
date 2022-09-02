const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "hi.txt"),
      "utf8"
    );
    // delete file
    // await fsPromises.unlink(
    //     path.join(__dirname, "files", "hi.txt")
    //   );

    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data
    );
  
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\n\nNice to meet you.."
    );
    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseComplete.txt")
    );
    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "promiseComplete.txt"),
      "utf8"
    );
    console.log(newData);
  } catch (err) {
    console.log(err);
  }
};

fileOps();

// fs.readFile("./files/hi.txt", (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });

//instead of toString can use utf8 as parameter to change buffer data to string

// fs.readFile("./files/hi.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

//instead of hardcodig paths we can use path module
// fs.readFile(path.join(__dirname, "files", "hi.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

//test async await
// console.log("Hello...");

// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "Nice to meet you Ajith..",
//   (err) => {
//     if (err) throw err;
//     console.log("Write Complete");
//     fs.appendFile(
//       path.join(__dirname, "files", "reply.txt"),
//       "\n\nYes it is.",
//       (err) => {
//         if (err) throw err;
//         console.log("Append Complete");
//         fs.rename(
//           path.join(__dirname, "files", "reply.txt"),
//           path.join(__dirname, "files", "newReply.txt"),
//           (err) => {
//             if (err) throw err;
//             console.log("Rename Complete");
//           }
//         );
//       }
//     );
//   }
// );

// fs.appendFile(
//     path.join(__dirname, "files", "test.txt"),
//     "Append Test..",
//     (err) => {
//       if (err) throw err;
//       console.log("Append Complete");
//     }
//   );

process.on("uncaughtException", (err) => {
  console.log(`There was uncaught exception error: ${err}`);
  process.exit(1);
});
