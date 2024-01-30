export class User {
    constructor(
        public email: string,
        public username: string,
        public password: string,
    ) { }
}

export class Login {
    constructor(
        public username: string,
        public password: string,
    ) { }
}