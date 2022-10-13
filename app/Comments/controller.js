const Comment = require('./model');

const store = async(req, res) =>{
    const payload = req.body;
    
    try {
        await Comment.sync();
        await Comment.create(payload);
        res.json({
            "message": "Comment Created"
        });
    } catch(e) {
        res.send(e);
    }
}

const index = async(req, res) =>{
    try {
        const comment = await Comment.findAll();
        res.send(comment);
    } catch (err) {
        console.log(err);
    }
}

const updated = async(req, res) =>{
    const payload = req.body;

    try {
        await Comment.sync();
        await Comment.update(payload,{
            where: {
                commentID: req.params.id
            }
        });
        res.json({
            "message": "Comment Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

const destruct = async(req, res) =>{
    try {
         await Comment.destroy({
            where: {
                commentID: req.params.id
              }
        });
        res.json({
            "message": "Comment Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    store,
    index,
    updated,
    destruct
}