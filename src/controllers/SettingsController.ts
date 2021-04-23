import { Request, Response } from "express";
import { SettingsSevice } from "../services/SettingsService";

class SettingsController {
  async create(request: Request, response: Response) {
    const { chat, username } = request.body;

    const settingsService = new SettingsSevice();

    try {
      const settings = await settingsService.create({ chat, username });

      return response.json(settings);
    } catch (err) {
      return response.status(400).json({ //numero de erro q pode ser controlado, normalmente quando é erro de servidor será 500
        message: err.message,
      });
    }


  }
  async findByUsername(request: Request, response: Response) {
    const { username } = request.params;

    const settingsService = new SettingsSevice();

    const settings = await settingsService.findByUsername(username);

    return response.json(settings);

  }

  async update(request: Request, response: Response) {
    const { username } = request.params;
    const { chat } = request.body;

    const settingsService = new SettingsSevice();

    const settings = await settingsService.update(username, chat)

    return response.json(settings);

  }



}

export { SettingsController }