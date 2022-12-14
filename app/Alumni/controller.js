const Alumni = require('./model');
const fs = require('fs');
const path = require('path');

const store = async(req, res, next) =>{
    try {
        let payload = req.body;
    
    if(req.file){
        let tmp_path = req.file.path;
        let originalExt = req.file.originalname.split('.')[req.file.originalname.split('.').length -1];
        let filename = req.file.filename + '.' + originalExt;
        let target_path = path.resolve(config.rootPath, `public/images/alumni/${filename}`);

        const src = fs.createReadStream(tmp_path);
        const dest = fs.createWriteStream(target_path);
        src.pipe(dest);

        src.on('end', async()=>{
            try{
                await Alumni.sync();
                await Alumni.create({...payload, alumnus_image: filename});
                res.json({
                    "message": "Alumni Created"
                });
            } catch(err){
                fs.unlinkSync(target_path);
                next(err);
            }
        });

        src.on('error', async()=>{
            next(err);
        });
    } else {
        await Alumni.sync();
        await Alumni.create(payload);
        res.json({
            "message": "Alumni Created"
        });
    }
    } catch(e) {
        res.send(e);
    }
}


const index = async(req, res) =>{
    try {
        const alumni = await Alumni.findAll();
        res.send(alumni);
    } catch (err) {
        console.log(err);
    }
}

const update = async(req, res, next) =>{
    try {
        let payload = req.body;
    
    if(req.file){
        let tmp_path = req.file.path;
        let originalExt = req.file.originalname.split('.')[req.file.originalname.split('.').length -1];
        let filename = req.file.filename + '.' + originalExt;
        let target_path = path.resolve(config.rootPath, `public/images/alumni/${filename}`);

        const src = fs.createReadStream(tmp_path);
        const dest = fs.createWriteStream(target_path);
        src.pipe(dest);

        src.on('end', async()=>{
            try{
                let alumni = await Alumni.findById(id);
                let currentImage = `${config.rootPath}/public/images/alumni/${alumni.alumnus_image}`;

                console.log(currentImage);
                if(fs.existsSync(currentImage)){
                    fs.unlinkSync(currentImage);
                }

                alumni = await Alumni.sync();
                alumni = await Alumni.update(payload,{
                    where: {
                        alumniID: req.params.id
                    }
                });
                res.json({
                    "message": "Alumni Created"
                });
            } catch(err){
                fs.unlinkSync(target_path);
                next(err);
            }
        });

        src.on('error', async()=>{
            next(err);
        });
    } else {
        await Alumni.sync();
        await Alumni.create(payload);
        res.json({
            "message": "Alumni Created"
        });
    }
    } catch(e) {
        res.send(e);
    }
}

const destruct = async(req, res) =>{
    try {
         await Alumni.destroy({
            where: {
                alumniID: req.params.id
              }
        });
        res.json({
            "message": "Alumni Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    store,
    index,
    update,
    destruct
}