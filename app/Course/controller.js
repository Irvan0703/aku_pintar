const Course = require('./model');

const store = async(req, res) =>{
    const payload = req.body;
    
    try {
        await Course.sync();
        await Course.create(payload);
        res.json({
            "message": "Course Created"
        });
    } catch(e) {
        res.send(e);
    }
}

const index = async(req, res) =>{
    try {
        const course = await Course.findAll();
        res.send(course);
    } catch (err) {
        console.log(err);
    }
}

const updated = async(req, res) =>{
    const payload = req.body;

    try {
        await Course.sync();
        await Course.update(payload,{
            where: {
                courseID: req.params.id
            }
        });
        res.json({
            "message": "Course Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

const destruct = async(req, res) =>{
    try {
         await Course.destroy({
            where: {
                courseID: req.params.id
              }
        });
        res.json({
            "message": "Course Deleted"
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