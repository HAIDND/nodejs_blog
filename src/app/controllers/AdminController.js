import productMod from '../models/ProductModel.js'


class AdminController {
    // [get] admin home
    index(req, res, next) {
        productMod.find({})
            .then(products => {
                products = products.map(productMods => productMods.toObject())
                res.render('./admin/home', { products })
            }
            )
            .catch(next);
    }
    // [get] admin add product    
    addAfilate(req, res, next) {

        const affLink = new productMod;
        
        console.log(affLink);
        affLink.save(req.query);
        res.render('./admin/create', {createAffilate: true})
        
    }
    // [get] admin add product    
    addPost(req, res, next) {
        res.render('./admin/create', {createPost: true})
    }
    // [get] admin add product    
    addMotel(req, res, next) {
        res.render('./admin/create', {createMotel: true})
    }
    // [get] admin add product    
    addAny(req, res, next) {
        res.render('./admin/create', {createAny: true})
    }
    // [get] admin edit product    
    edit(req, res, next) {
        res.render('./admin/edit')
    }
    //get [get] admin  slug
    slug(req, res, next) {
        res.send('<h1>404 Khong tim thay trang can tim</h1>')
    }
}

const adminController = new AdminController;
export default adminController;
