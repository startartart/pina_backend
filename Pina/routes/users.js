var express = require('express');
var router = express.Router();

var db = require("../db");

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); */

router.get("/", (req, res) => {
  // db select문 수행
  db((err, connection) => {
    connection.query("SELECT * FROM MEMBER", (err, rows) => {
      connection.release(); // 연결세션 반환.
      if (err) {
        throw err;
      }

      return res.json({ data: rows }); // 결과는 rows에 담아 전송
    });
  });
});

module.exports = router;
