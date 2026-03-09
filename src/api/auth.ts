export interface AuthUserResponse {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    token: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    inviteCode: string;
}
