create database CNWeb;

create table Posts(
	postID int not null auto_increment,
    excerpt nvarchar(10000),
    title nvarchar(1000),
    content nvarchar(10000),
    slug varchar(100),
    primary key(postID)
);

create table Categories(
	tagID int not null auto_increment,
    tagName nvarchar(50),
    primary key (tagID)
);

create table PostTag(
	postID int not null,
    tagID int not null,
    foreign key (postID) references Posts(postID),
    foreign key (tagID) references Categories(tagID)
    
);

create table Users(
	userID int not null,
    username varchar(50),
    password varchar(50),
    isAdmin bit
);

create table Comments(
	cmtID int not null auto_increment,
    postID int,
    content nvarchar(1000),
    email varchar(1000) not null,
    primary key(cmtID),
    foreign key(postID) references posts(postID)
);

create table Ratings(
	rateID int not null auto_increment,
    postID int,
    rate int,
    primary key(rateID),
    foreign key(postID) references posts(postID)
);
