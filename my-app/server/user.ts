export interface User {
  id: number;
  name: string;
  age: number;
  password: string;
  dateOfBirth: Date;
  dateOfFirstLogin: Date;
  dateOfNextNotification: Date;
  info: string;
}

// export class User {
//     id: number;
//     name: string;
//     password: string;
//     age: number;
//     dateOfBirth: Date;
//     dateOfFirstLogin: Date;
//     dateOfNextNotification: Date;
//     information?: string;
//
//     constructor(userName: string, userPass: string, userAge: number, userDateOfBirth: Date, userDateOfFirstLogin: Date, userDateOfNextNotification: Date, userInformation?: string) {
//         this.id = 0;
//         this.name = userName;
//         this.password = userPass;
//         this.age = userAge;
//         this.dateOfBirth = new Date(userDateOfBirth);
//         this.dateOfFirstLogin = new Date(userDateOfFirstLogin);
//         this.dateOfNextNotification = new Date(userDateOfNextNotification);
//         this.information = userInformation;
//     }
//
//     // setId(id: number) {
//     //     this.id = id;
//     // }
// }
