import { editController } from '../app/controllers/EditController.js';
import editrouter from './editRoutes.js';
import siteRouter from './siteRoutes.js';
import adminroute from './adminRoutes.js';
import marketroute from './marketRoutes.js';
import motelroute from './motelRoutes.js';
function routes(app) {

    app.use('/admin',adminroute );
    app.use('/decor',adminroute );
    app.use('/motel',motelroute );
    app.use('/market',marketroute);
    app.use('/edit',editrouter);
    app.use('/', siteRouter);
}

export { routes };
