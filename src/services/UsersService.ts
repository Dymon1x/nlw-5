import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

/*
 interface IUsersService{
   email: string
 }

async create({email}: IUsersService)
*/

class UsersService {
  private usersRepository: Repository<User>;

  constructor(){
    this.usersRepository = getCustomRepository(UsersRepository);
  }
  async create(email: string) {
    //Verificar se o usuario existe
    const userExists = await this.usersRepository.findOne({
      email
    })

    //Se existir, retornar user
    if(userExists){
      return userExists;
    }

    //Se nao existir, salvar no BD
    const userNew = this.usersRepository.create({
      email
    });

    await this.usersRepository.save(userNew);

    return userNew;
  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findOne({ email });

    return user;
  }

  
}

export { UsersService };