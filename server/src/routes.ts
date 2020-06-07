import express from 'express';
import { celebrate, Joi } from 'celebrate';


import multer from 'multer';
import multerConfig from './config/multer';


import HomeController from './controllers/HomeController';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

//index, show, create, update, delete

const routes = express.Router();
const upload = multer(multerConfig);

const homeController = new HomeController();
const pointsController = new PointsController();
const itemsController = new ItemsController();


//Router Home
routes.get('/', homeController.index);

//Router Items
routes.get('/items', itemsController.index);

//Router Points
routes.get('/points/', pointsController.index);
routes.get('/points/:id', pointsController.show);
routes.post(
    '/points',
    upload.single('image'),
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required(),
        })
    },
        {
            abortEarly: false
        }),
    pointsController.create);


export default routes;