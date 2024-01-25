import { Input } from '@angular/core';

export class RegisterPageComponent {
    @Input()
    user: {
        name: string,
        usename: string,
        email: string,
        password: string
    };
}