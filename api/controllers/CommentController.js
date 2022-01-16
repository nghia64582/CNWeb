const db = require('../db');

exports.postComment = async(req, res) => {
    let data = req.body;
    try{
        let cmt = data.content;
        let postId = data.postID;
        let email_cmt = data.email;
        const sql = "insert into comments (postID, content, email) values ('"+postId+"','"+cmt+"','"+email_cmt+"');";
        db.query(sql, function(err, result){
            if(err) throw err;
            console.log("Added to table comments");
        });
        res.send("POST SUCCESSFUL");
    } catch (err) {
        res.send(err)
    }
}

exports.getCmtsByPostId = async(req, res) => {
    let data = req.body;
    try{
        const postId = data.postID;
        const sql = "select * from comments where "+postId+" = postID;";
        db.query(sql, function(err, result){
            if(err) throw err;
            console.log(JSON.stringify(result));
            res.json(result)
        })
    } catch(err){
        res.send(err)
    }
}

exports.getItem = async(req, res) => {
    let data = req.body;
    try{
        const cmtId = data.cmtID;
        const sql = "select * from comments where "+cmtId+" = cmtID;";
        db.query(sql, function(err, result){
            if(err) throw err;
            console.log(JSON.stringify(result));
            res.json(result)
        })
    } catch(err){
        res.send(err)
    }
}

exports.deleteOneComment = async(req, res) => {
    let data = req.body;
    try{
        const commentID = data.cmtID;
        const sql = "delete from comments where "+commentID+" = cmtID;";
        res.send("DELETE SUCCESSFUL");
    } catch (err) {
        res.send(err)
    }
}