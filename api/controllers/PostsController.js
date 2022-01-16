const util = require('util');
const mysql = require('mysql');
const db = require('../db');

exports.getItem = async (req, res) => {
    try {
        const data = req.body;
        let post_id = data.postID;
        const sql = "select * from posts where posts.postID = '"+post_id+"';";
        db.query(sql, function(err, result){
            if(err) throw err;
            console.log(JSON.stringify(result));
            res.json(result);
        });
    }catch (err) {
        res.send(err)
    }
}

exports.getAll = async(req,res) => {
    try{
        const sql = "select * from posts";
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log(JSON.stringify(result));
            res.json(result)
        });
    } catch (err) {
        res.send(err)
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
    str = str.replaceAll(" ", "-");
    return str;
}

exports.createNewPost = async(req, res) => {
    let data = req.body;
    try{
        let excerpt = data.excerpt;
        let title = data.title;
        let content = data.content;
        let slug = getSlug(title);
        const sql = "insert into Posts (excerpt, title, content, slug) values ('" + excerpt
            + "', '" + title + "', '" + content + "', '" + slug + "');"
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Added to table.");
        });
        res.send("POST SUCCESSFUL");
    } catch(err){
        res.send(err);
    }
}

exports.deleteOnePost = async(req, res) => {
    let data = req.body;
    try{
        const postID = data.postID;
        const sql = "delete from posts where "+postID+" = postID;";
        res.send("DELETE SUCCESSFUL");
    } catch (err) {
        res.send(err)
    }
}