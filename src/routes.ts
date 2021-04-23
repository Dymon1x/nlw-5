import { request, response, Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

//mesma estrutura que estava no server.ts dos get/post

/**
 * Tipos de parametros
 *                       Usados para:
 * Routes Params  =>    Parametros de rotas
 * ex: http://localhost:3333/settings/1
 * 
 * Query Params   =>    Filtros e buscas
 *  * ex: http://localhost:3333/settings/1?search=algumacoisa
 * 
 * Body Params    =>    { passa objetos dentro das nossas requisiçoes
 * 
 * }
 *
 */

const routes = Router()

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUsername);
routes.put("/settings/:username", settingsController.update);


routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes };
