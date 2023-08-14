//Create web server
var express = require('express');
var router = express.Router();

//create the database connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });

//create the schema
var commentSchema = new mongoose.Schema({
    name: String,
    comment: String
});

//create the model
var Comment = mongoose.model('Comment', commentSchema);

//create the routes
router.get('/', function (req, res, next) {
    //get all the comments from the database
    Comment.find(function (err, comments) {
        if (err) {
            console.log(err);
            next(err);
        } else {
            console.log(comments);
            res.render('comments', { comments: comments });
        }
    });
});

router.post('/', function (req, res, next) {
    //create a new comment
    var newComment = new Comment({
        name: req.body.name,
        comment: req.body.comment
    });

    //save the comment to the database
    newComment.save(function (err) {
        if (err) {
            console.log(err);
            next(err);
        } else {
            console.log('Comment saved successfully');
            res.redirect('/comments');
        }
    });
});

module.exports = router;
