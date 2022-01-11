select * from ((posts inner join posttag on posts.postID = posttag.postID) inner join categories on posttag.tagID = categories.tagID) where tagName = "drink";

-- select * from posttag where tagID = 