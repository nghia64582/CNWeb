const util = require('util');
const mysql = require('mysql');
const db = require('../db');

ADD_TAG = 1;
ADD_POST = 2;
ADD_POST_TAG = 3;
ADD_USER = 4;
GET_ALL_POST = 5;
GET_ALL_CATEGORIES = 6;
GET_ALL_POST_WITH_TAG = 7;
ADD_COMMENT = 8;


module.exports = {
    get: (req, res) => {
        let data = req.body;
        let sql;
        switch (data.cmd) {
            case GET_ALL_POST:
                sql = "select * from posts";
                db.query(sql, function (err, result) {
                    if (err) throw err;
                    console.log(JSON.stringify(result));
                });
                break;
            case GET_ALL_CATEGORIES:
                sql = "select * from categories";
                db.query(sql, function (err, result) {
                    if (err) throw err;
                    console.log(JSON.stringify(result));
                    res.json(result);
                });
                break;
            case GET_ALL_POST_WITH_TAG:
                // todo
                let tagName = data.tagName;
                sql = "SELECT posttag.postID, posttag.tagID, categories.tagName, posts.title, posts.slug, posts.excerpt, posts.content FROM cnweb.posttag, cnweb.categories, cnweb.posts where posttag.postID=posts.postID and posttag.tagID=categories.tagID and "+tagName+"=categories.tagName;";
                db.query(sql, function(err, result){
                    if(err) throw err;
                    console.log(JSON.stringify(result));
                    res.json(result);
                });
                break;
        }
    },

    post: (req, res) => {
        let data = req.body;
        let sql;
        switch (data.cmd) {
            case ADD_TAG:
                sql = "insert into Categories (tagName) values ('" + data.tagName + "');";
                db.query(sql, function (err, result) {
                    if (err) throw err;
                    console.log("Added to table.");
                });
                console.log(sql);
                break;
            case ADD_POST:
                let excerpt = data.excerpt;
                let title = data.title;
                let content = data.content;
                let slug = getSlug(title);
                sql = "insert into Posts (excerpt, title, content, slug) values ('" + excerpt
                    + "', '" + title + "', '" + content + "', '" + slug + "');"
                db.query(sql, function (err, result) {
                    if (err) throw err;
                    console.log("Added to table.");
                });
                break;
            case ADD_POST_TAG:
                let postID = data.postID;
                let tagID = data.tagID;
                sql = "insert into PostTag values (" + postID + "," + tagID + ")";
                db.query(sql, function (err, result) {
                    if (err) throw err;
                    console.log("Added to table.");
                });
                break;
            case ADD_USER:
                let username = data.username;
                let email = data.email;
                let pw = data.password;
                let role = data.isAdmin;
                sql = "insert into users (username, password, isAdmin, email) values ('"+username+"','"+pw+"',"+role+",'"+email+"');";
                db.query(sql, function(err, result){
                    if(err) throw err;
                    console.log("Add to table users");
                })
                break;
            case ADD_COMMENT:
                let cmt = data.content;
                let postId = data.postID;
                let email_cmt = data.email;
                sql = "insert into comments (postID, content, email) values ('"+postId+"','"+cmt+"','"+email_cmt+"');";
                db.query(sql, function(err, result){
                    if(err) throw err;
                    console.log("Added to table comments");
                })
                break;
        }
        res.send("POST SUCCESS");
    }
}

function getSlug(str) {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replaceAll(" ", "_");
    return str;
}
