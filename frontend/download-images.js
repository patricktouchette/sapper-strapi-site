const fs = require("fs");
const request = require("request");

const download = (url, path, callback) => {
  request.head(url, (err, res, body) => {
    request(url).pipe(fs.createWriteStream(path)).on("close", callback);
  });
};

const url =
  "http://localhost:1337/uploads/large_WIN_20200203_07_41_07_Pro_709e2f7ac0.jpg";
const path = "./static/uploads/download.png";

download(url, path, () => {
  console.log("✅ Done!");
});

// -- to do download images to static
// Object.keys(temp1[0].formats).map(format => temp1[0].formats[format].url)
