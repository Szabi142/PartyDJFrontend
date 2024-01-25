import { Input } from '@angular/core';

export class RegisterPageComponent {
    @Input()
    party: {
        name: string,
        password?: string,
    };
}