const Follow = require('./model');

const store = async(req, res) =>{
    const payload = req.body;
    
    try {
        await Follow.sync();
        await Follow.create(payload);
        res.json({
            "message": "Follow Created"
        });
    } catch(e) {
        res.send(e);
    }
}

const index = async(req, res) =>{
    try {
        const follow = await Follow.findAll();
        res.send(follow);
    } catch (err) {
        console.log(err);
    }
}

const updated = async(req, res) =>{
    const payload = req.body;

    try {
        await Follow.sync();
        await Follow.update(payload,{
            where: {
                followID: req.params.id
            }
        });
        res.json({
            "message": "Follow Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

const destruct = async(req, res) =>{
    try {
         await Follow.destroy({
            where: {
                followID: req.params.id
              }
        });
        res.json({
            "message": "Follow Deleted"
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