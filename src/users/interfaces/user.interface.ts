export interface User {
    readonly id?: string;
    readonly username: string;
    readonly email: string;
    readonly password: string;
    readonly isEmailVerified: boolean;
    readonly dateCreated: number;
};