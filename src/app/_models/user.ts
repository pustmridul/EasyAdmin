import { Role } from "./role";

export class User {
    id: number;
    username: string;
    Name :string;
    UserTypeID : number;
    password: string;
    Token?: string;
    role: Role;
}