import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository"


interface ISettingsCreate {
  chat: boolean;
  username: string;
}


class SettingsSevice {

  private settingsRepository: Repository<Setting>;

  constructor() {
    this.settingsRepository = getCustomRepository(SettingsRepository);
  }

  async create({ chat, username }: ISettingsCreate) {

    //SELECT * FROM settings WHERE username = "username" LIMIT 1;
    const userAlreadyExists = await this.settingsRepository.findOne({
      username
    }); // findOne - vai buscar dentro da tabela somente 1 registro, igual o LIMIT 1 em SQL

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    const settings = this.settingsRepository.create({
      chat,
      username
    });

    await this.settingsRepository.save(settings);

    return settings;
  }

  async findByUsername(username: string) {
    const settings = await this.settingsRepository.findOne({
      username
    });

    return settings;
  }

  async update(username: string, chat: boolean) {
  await this.settingsRepository.createQueryBuilder()
      .update(Setting)
      .set({ chat })
      .where("username = :username", {
        username
      }).execute();
  }
}


export { SettingsSevice }