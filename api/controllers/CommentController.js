const util = require('util');
const mysql = require('mysql');
const db = require('../db');

exports.postComment = async (req, res) => {
    let data = req.body;
    try {
        let cmt = data.content;
        let postId = data.postID;
        let email_cmt = data.email;
        let username = data.username;
        sql = "insert into comments (postID, content, email, username) values ('"+postId+"','"+cmt+"','"+email_cmt+"','"+username+"');";
        db.query(sql, function(err, result){
            if(err) throw err;
            res.json({data: result.insertId});
            console.log("Added to table comments");
        });
    }catch (err) {
        res.send(err)
    }
}

exports.deleteComment = async(req, res) => {
    let data = req.body;
    try{
        const commentID = data.cmtID;
        console.log(commentID);
        const sql = "DELETE FROM comments where cmtID = " + commentID;
        db.query(sql, function (err, result) {
            if (err) throw err;
        });
        console.log(sql);
        res.send("DELETE SUCCESSFUL");
    } catch(err){
        res.send(err)
    }
}

exports.getAllComments = async(req, res) => {
    let data = req.params;
    try{
        const postid = data.postID;
        const sql = "select * from comments where comments.postID = "+postid;
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log(JSON.stringify(result));
            res.json(result)
        });
    } catch (err) {
        res.send(err);
    }
}