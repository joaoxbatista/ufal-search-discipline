import { Router } from 'express';
import offerRoutes from './offers';

const routes = Router();

routes.get('/', (request, response) => {
    return response.json({
        data: 'entrou'
    });
});
routes.use('/ofertas', offerRoutes);

export default routes;
