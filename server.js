// https://expressjs.com

const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors()); // 미들웨어
//모두에게 오픈

app.get("/", (req, res) => {
  res.send("Bye Earth!");
  // 원래는 수정해도 자동으로 리빌드되지 않음
  // nodemon 등이 리빌드를 해줌
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
