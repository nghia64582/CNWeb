const util = require('util');
const mysql = require('mysql');
const db = require('../db');

exports.postRating = async (req, res) => {
    let data = req.body;
    try {
        console.log(req.id);
        let rate = data.rate;
        let postId = data.postID;
        let email = data.email;
        sql = "insert into Ratings (postID, rate, email) values ('"+postId+"','"+rate+"','"+email+"');";
        // sql1 = "SELECT * FROM cnweb.ratings where email = '"+email_cmt+"';"
        // db.query(sql, function(err, result1){
        //     if (result1 != null) {
                db.query(sql, function(err, result){
                    if(err) throw err;
                    res.json({data: result.insertId});
                    console.log("Added to table ratings");
                });  
        //     } else{
        //         res.send("This email had rated.");
        //         console.log("This email had rated.");
        //     }
        // })
    }catch (err) {
        res.send(err)
    }
}

exports.getAverageRating = async (req, res) => {
    try {
        const data = req.body;
        let post_id = data.postID;
        const sql = "select AVG(rate) from ratings where ratings.postID = '"+post_id+"';";
        db.query(sql, function(err, result){
            if(err) throw err;
            console.log(JSON.stringify(result));
            res.json(result);
        });
    }catch (err) {
        res.send(err)
    }
}

