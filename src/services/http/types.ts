export interface RegisterResponse {
    id: number;
    username: string;
    email: string;
    tokens: {
        "refresh": string;
        "access": string;
    }
    errors: any[] | undefined;
}

export interface LoginResponse {
    user: any;
    refresh: string;
    access: string
    errors: any[] | undefined;
}
