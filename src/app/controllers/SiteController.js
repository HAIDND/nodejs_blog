
class SiteController {
    //idex root
    home(req, res, next) {
        res.render('home');
    }
    //index home null
    index(req, res,next) {
        res.render('home');
    }
    search(req, res) {
        res.render('search');
    };

    keyboard(req, res) {
        res.render('keyboard');
    }

}
const siteController = new SiteController();

export { siteController };
