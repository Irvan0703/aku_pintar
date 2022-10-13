const University = require('./model');
const { Op } = require('sequelize');
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
                await University.sync();
                await University.create({...payload, alumnus_image: filename});
                res.json({
                    "message": "University Created"
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
        await University.sync();
        await University.create(payload);
        res.json({
            "message": "University Created"
        });
    }
    } catch(e) {
        res.send(e);
    }
}


const index = async(req, res) =>{

    const {search} = req.query;
    let exec = {};
    if (search){
        exec = {
            where:{
                name:{
                    [Op.like]: `%${search}%`
                }
            }
        }
    }

    try {
        const university = await University.findAll(exec);
        res.send(university);
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
                let university = await University.findById(id);
                let currentImage = `${config.rootPath}/public/images/alumni/${alumni.alumnus_image}`;

                console.log(currentImage);
                if(fs.existsSync(currentImage)){
                    fs.unlinkSync(currentImage);
                }

                university = await University.sync();
                university = await University.update(payload,{
                    where: {
                        universityID: req.params.id
                    }
                });
                res.json({
                    "message": "University Created"
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
        await University.sync();
        await University.create(payload);
        res.json({
            "message": "University Created"
        });
    }
    } catch(e) {
        res.send(e);
    }
}

const destruct = async(req, res) =>{
    try {
         await University.destroy({
            where: {
                universityID: req.params.id
              }
        });
        res.json({
            "message": "University Deleted"
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