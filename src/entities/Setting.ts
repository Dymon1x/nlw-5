import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn
} from "typeorm"

import { v4 as uuid } from "uuid"
/*
  v1 - gera a partir de um tempo e relacionado com o MAC ADDRESS da maquina
  v3 - gera um hash, utilizando um namespace e nome
  v4 - gerado com números aleatórios
  v5 - gera um hash, utilizando um namespace e nome

 */

@Entity("settings")
class Setting {

  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  chat: boolean;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  //metodo chamado sempre que der um NEW Setting
  constructor() {
    //preenche com o uuid, caso nao tenha um id preenchido
    if (!this.id) {
      this.id = uuid();
    }
  }

}

export { Setting };