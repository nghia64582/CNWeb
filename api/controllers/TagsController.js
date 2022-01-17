const util = require('util');
const mysql = require('mysql');
const db = require('../db');

exports.getItem = async (req, res) => {
    try {
        const data = req.params;
        let tag_id = data.tagID;
        const sql = "select * from categories where categories.tagID = '"+tag_id+"';";
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
        const sql = "select * from categories";
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log(JSON.stringify(result));
            res.json(result);
        });
    } catch (err) {
        res.send(err)
    }    
}

exports.getPostsByTag = async(req, res) => {
    let data = req.params;
    try{
        let tagName = data.tagName;
        const sql = "SELECT posttag.postID, posttag.tagID, categories.tagName, posts.title, posts.slug, posts.excerpt, posts.content FROM cnweb.posttag, cnweb.categories, cnweb.posts where posttag.postID=posts.postID and posttag.tagID=categories.tagID and '"+tagName+"'=categories.tagName;";
        db.query(sql, function(err, result){
            if(err) throw err;
            console.log(JSON.stringify(result));
            res.json(result);
        });
    } catch (err) {
        res.send(err)
    } 
}

exports.createNewTag = async(req, res) => {
    let data = req.body;
    try{
        const sql = "insert into Categories (tagName) values ('" + data.tagName + "');";
        db.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Added to table.");
        });
        console.log(sql);
        res.send("POST SUCCESSFUL");
    } catch(err){
        res.send(err);
    }
}

exports.deleteOneTag = async (req, res) => {
    let data = req.paramss;
    try{
        const tagID = data.tagID;
        const sql = "DELETE FROM posttag where tagID = "+tagID+"; delete from categories where tagID = "+tagID+";";
        db.query(sql, function (err, result) {
            if (err) throw err;
        });
        console.log(sql);
        res.send("DELETE SUCCESSFUL");
    } catch(err){
        res.send(err)
    }
}