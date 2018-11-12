import * as fs from 'fs';
import {findIndex} from 'lodash';
import {User} from './user';
import * as jwt from 'jsonwebtoken';

export interface jwebtoken {
  exp: number;
  sub: string;
}

class Dao {
  private example: Array<User>;

  constructor() {
    this.example = JSON.parse(fs.readFileSync('./server/users.json', 'utf8'));
  }

  getUsersList() {
    return new Promise((resolve, reject) => {
      resolve(this.example);
    });
  }

  getUser(id: number) {
    return new Promise((resolve, reject) => {
      resolve(this.example.filter((item: User) => item.id === id)[0]);
    });
  }

  getUserByName(name: string) {
    return new Promise((resolve, reject) => {
      const user = (this.example.filter((item: User) => item.name === name)[0]);
      if (user) {
        resolve(this.example.filter((item: User) => item.name === name)[0]);
      }
      reject();
    });
  }

  addUser(user: User) {
    return new Promise((resolve, reject) => {
      const idList = this.example.map((item: User) => item.id);
      user.id = (idList.length > 0 ? Math.max(...idList) + 1 : 1);
      this.example.push(user);
      this.saveFile();
      resolve(user);
    });
  }

  loginUser(name: string, pass: string) {
    return new Promise((resolve, reject) => {
      const user = this.example.find((item: User) => item.name === name && item.password === pass);
      if (user) {
        const token = jwt.sign({
        }, 'secret', {
          expiresIn: '60m',
          subject: user.id.toString()
        });
        resolve((token) || false);
      } else {
        reject();
      }
    });
  }

  authCheck(jwtoken: string) {
    return new Promise((resolve, reject) => {
      if (typeof jwtoken !== 'undefined' && jwtoken !== null) {
        const jWebToken: jwebtoken | null = jwt.decode(jwtoken) as jwebtoken;
        const user = this.getUser(+jWebToken.sub);
        resolve(user);
      }
      reject();
    });
  }

  currentUser(jwtoken: string) {
    return new Promise((resolve, reject) => {
      if (typeof jwtoken !== 'undefined' && jwtoken !== null) {
        const jWebToken: jwebtoken | null = jwt.decode(jwtoken) as jwebtoken;
        const user = this.getUser(+jWebToken.sub);
        resolve(user);
      }
      reject();
    });
}

  updateUserById(user: User) {
    return new Promise((resolve, reject) => {
      const index = findIndex(this.example, (item: User) => item.id === user.id);
      if (index < 0) {
        reject('wrong id');
      } else {
        const tmp: User = user;
        this.example[index] = tmp;
        this.saveFile();
        resolve(tmp);
      }
    });
  }

  updateUser(params: User) {
    return new Promise((resolve, reject) => {
      const {id, name, age, dateOfBirth, dateOfFirstLogin, dateOfNextNotification} = params;
      const index = findIndex(this.example, (item: User) => item.id === +id);
      if (index >= 0) {
        this.example[index].name = name;
        this.example[index].age = age;
        this.example[index].dateOfBirth = new Date(dateOfBirth);
        this.example[index].dateOfFirstLogin = new Date(dateOfFirstLogin);
        this.example[index].dateOfNextNotification = new Date(dateOfNextNotification);
        this.saveFile();
        resolve(this.example[index]);
      } else {
        reject();
      }
    });
  }

  deleteUser(id: number) {
    return new Promise((resolve, reject) => {
      this.example = this.example.filter((item: User) => item.id !== id);
      this.saveFile();
      resolve({id});
    });
  }

  saveFile() {
    fs.writeFileSync('./server/users.json', JSON.stringify(this.example), 'utf-8');
  }
}

export const dao = new Dao;
