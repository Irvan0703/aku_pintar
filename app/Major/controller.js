const Major = require('./model');

const store = async(req, res) =>{
    const payload = req.body;
    
    try {
        await Major.sync();
        await Major.create(payload);
        res.json({
            "message": "Major Created"
        });
    } catch(e) {
        res.send(e);
    }
}

const index = async(req, res) =>{
    try {
        const major = await Major.findAll();
        res.send(major);
    } catch (err) {
        console.log(err);
    }
}

const updated = async(req, res) =>{
    const payload = req.body;

    try {
        await Major.sync();
        await Major.update(payload,{
            where: {
                majorID: req.params.id
            }
        });
        res.json({
            "message": "Major Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

const destruct = async(req, res) =>{
    try {
         await Major.destroy({
            where: {
                majorID: req.params.id
              }
        });
        res.json({
            "message": "Major Deleted"
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