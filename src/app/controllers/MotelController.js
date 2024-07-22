import motelModel from "../models/Motel.js";
import options from "../../util/mongoose.js";

class MotelController {
    index(req, res, next) {
        motelModel.find({})

            .then(motels => res.render('./show/motel/home',
                {
                    motels: options.multipleMongooseToObject(motels),
                }))
            .catch(next);
    }
    search(req, res, next) {
        res.send('search')
    }
    add(req, res, next) {
        res.render('add_motel');
    }
    edit(req, res, next) {
        res.render('edit_motel');
    }
    delete(req, res, next) {
    }
    detail(req, res, next) {
        res.send('detail');
    }
    //[post] /motel
save(req, res, next) {
    console.log( typeof req.params);
    const motel = new motelModel( options.mongooseToObject(req.params) );
    // motel = req.params;
    console.log( typeof motel);
    motel.save()

};
// [POST] admin/save/motel
savePost(req, res, next) {
    console.log(typeof req.body);
    console.log( req.body );
    const motel = new motelModel(req.body );
    // motel = req.params;
    console.log(typeof motel);
    motel.save()
    console.log('add success')
}



    
}

const motelController = new MotelController();

export default motelController;