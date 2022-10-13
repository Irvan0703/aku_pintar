const User = require('./model');

const store = async(req, res) =>{
    const { username, password} = req.body;
    
    try {
        await User.sync();
        await User.create({username, password});
        res.json({
            "message": "User Created"
        });
    } catch(e) {
        res.send(e);
    }
}

const view = async(req, res) =>{
    try {
        const user = await User.findAll();
        res.send(user);
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    store,
    view
}