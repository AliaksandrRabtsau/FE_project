export class User {
    id: number;
    name: string;
    password: string;
    dateOfBirth: Date;
    dateOfFirstLogin: Date;
    dateOfNextNotification: Date;
    information: string;

    constructor(userName: string, userPass: string, userDateOfBirth: Date, userDateOfFirstLogin: Date, userDateOfNextNotification: Date, userInformation: string) {
        this.id = 0;
        this.name = userName;
        this.password = userPass;
        this.dateOfBirth = new Date(userDateOfBirth);
        this.dateOfFirstLogin = new Date(userDateOfFirstLogin);
        this.dateOfNextNotification = new Date(userDateOfNextNotification);
        this.information = userInformation;
    }

    setId(id: number) {
        this.id = id;
    }
}