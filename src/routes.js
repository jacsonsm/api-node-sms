import { Router } from "express";
import * as MessageController from "./controllers/message.js";

const routes = Router();

routes.get('/', (resquest, response) => {
    response.send('API Tech Academy');
});

routes.post('/message', MessageController.message)

export default routes;