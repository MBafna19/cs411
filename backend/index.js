const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
var db = mysql.createConnection({
    host:'127.0.0.1',
    port: 3306,
    user: 'root',
    password:'12345',
    database:'project',
   })
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
// app.get('/', (require, response) => {
// const sqlInsert = "INSERT INTO `movie_reviews` (`movieName`,`movieReview`) VALUES ('testMovie', 'cool movie!');";
// db.query(sqlInsert, (err, result) => {
// response.send("Hello world??");
// })
// })
app.post("/api/insert", (require, response) => {
 const NetID = require.body.NetID;
 const P_ID = require.body.P_ID;
 const sqlInsert = "INSERT INTO `Pursuing` (`NetID`,`P_ID`) VALUES (?,?)";
 db.query(sqlInsert, [NetID, P_ID], (err, result) => {
    console.log(err);
    response.send("insert done!")

 })
});

app.post("/api/search", (require, response) => {
    const NetID = require.body.NetID;
    const P_ID = require.body.P_ID;
    const sqlInsert = "Select P_ID from `Pursuing` where NetID = ?";
    db.query(sqlInsert, [NetID], (err, result) => {
    response.send(result);
    console.log(result)
    })
});

app.post("/api/delete", (require, response) => {
    const NetID = require.body.NetID;
    const P_ID = require.body.P_ID;
    const sqlInsert = "DELETE FROM `Pursuing` WHERE NetID = ? and P_ID = ?";
    db.query(sqlInsert, [NetID, P_ID], (err, result) => {
    console.log(err);
    response.send("delete done!")

    })
   });

app.post("/api/update", (require, response) => {
    const NetID = require.body.NetID;
    const P_ID = require.body.P_ID;
    const sqlInsert = "Update `Pursuing` SET NetID = ? WHERE NetID = ?";
    db.query(sqlInsert, [P_ID, NetID], (err, result) => {
    console.log(err);
    response.send("update done!")
    })
});

app.post("/api/advanced", (require, response) => {
    const sqlInsert = "SELECT Pursuing.NetID, SUM(Program.Req_CH) as creditHours FROM Pursuing JOIN Program ON Pursuing.P_ID = Program.P_ID Group By Pursuing.NetID ORDER BY SUM(Program.Req_CH) DESC Limit 15;";
    db.query(sqlInsert, null, (err, result) => {
    response.send(result);
    console.log(err);
    })
});
app.listen(3002, () => {
 console.log("running on port 3002")
})