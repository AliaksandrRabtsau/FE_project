import * as fs from 'fs';
import {findIndex} from 'lodash';
import {User} from './user';

class Dao {
    private example: Array<User>;
    constructor() {
        this.example = JSON.parse(fs.readFileSync('./users.json', 'utf8'));
    }
    getUsersList() {
        return new Promise((resolve, reject) => {
            resolve(this.example)
        })
    }
    getUser(id: number) {
        return new Promise((resolve, reject) => {
            resolve(this.example.filter((item: User) => item.id === id)[0])
        })
    }
    addUser(user: User) {
        return new Promise((resolve, reject) => {
            const idList = this.example.map((item: User) => item.id);
            user.setId(idList.length > 0 ? Math.max(...idList) + 1 : 1);
            this.example.push(user);
            this.saveFile();
            resolve(user);
        })
    }
    updateUser(user: User) {
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
            // const tmp = new User(user);

        })
    }
    deleteUser(id: number) {
        return new Promise((resolve, reject) => {
            this.example = this.example.filter((item: User) => item.id !== id);
            this.saveFile();
            resolve({id})
        })
    }
    saveFile() {
        fs.writeFileSync('./users.json', JSON.stringify(this.example), 'utf-8');
    }
}

export const dao = new Dao;