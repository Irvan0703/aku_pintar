const Alumni = require('./model');
const fs = require('fs');
const path = require('path');

const store = async(req, res) =>{
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

module.exports = {
    store,
    index,
    update,
    destruct
}