import products from "../models/ProductModel.js";

const productMod = products;

class EditController {
    // [get] edit home

    index(req, res,next) {
        res.render('edit', { isShow: true });
    }
    add(req, res) {
        res.render('./views/managerdata/add');
    }
    another(req, res) {
        res.send('khogn tim thay trang nay');
    }
    showdata(req,res,next) {
        productMod.find({})
        .then(products => {
            products = products.map(productMods => productMods.toObject())
            res.render('./managerdata/showdata', {products} )
        }
           )
        .catch( next); 
        // productMod.find({}, function (err, productModel) {
        //     if (!err) res.json(productModel);
        //     res.json({ error: "loi tim kiêm" });
        // });
    }
}
const editController = new EditController();

export { editController };
