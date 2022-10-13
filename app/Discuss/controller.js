const Discuss = require('./model');

const store = async(req, res) =>{
    const payload = req.body;
    
    try {
        await Discuss.sync();
        await Discuss.create(payload);
        res.json({
            "message": "Discuss Created"
        });
    } catch(e) {
        res.send(e);
    }
}

const index = async(req, res) =>{
    try {
        const discuss = await Discuss.findAll();
        res.send(discuss);
    } catch (err) {
        console.log(err);
    }
}

const updated = async(req, res) =>{
    const payload = req.body;

    try {
        await Discuss.sync();
        await Discuss.update(payload,{
            where: {
                discussID: req.params.id
            }
        });
        res.json({
            "message": "Discuss Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

const destruct = async(req, res) =>{
    try {
         await Discuss.destroy({
            where: {
                discussID: req.params.id
              }
        });
        res.json({
            "message": "Discuss Deleted"
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