export interface UserModel {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface UserResponseDto {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    token?: string;
}
