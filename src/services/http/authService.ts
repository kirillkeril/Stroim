import {httpClient} from "@/services/http/httpClient.ts";
import {LoginDto, RegisterDto} from "@/dtos/Auth.ts";
import {LoginResponse, RegisterResponse} from "@/services/http/types.ts";
import {HttpError} from "@/services/http/HttpError.ts";

class AuthService {
    async register(userDto: RegisterDto): Promise<RegisterResponse> {
        const response = await httpClient.post<RegisterResponse>('/api/registration/', {...userDto});
        if (response.data.errors) {
            throw new HttpError(response.statusText, response.data.errors);
        }
        localStorage.setItem('access', response.data.tokens.access);
        localStorage.setItem('refresh', response.data.tokens.refresh);
        return response.data;
    }
    async login(userDto: LoginDto): Promise<LoginResponse> {
        const response = await httpClient.post<LoginResponse>('/api/login/', {...userDto});
        if (response.data.errors) throw new HttpError(response.statusText, response.data.errors);

        localStorage.setItem('access', response.data.access);
        localStorage.setItem('refresh', response.data.refresh);
    }
    async logout() {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
    }
    async refreshToken() {

    }
}

export default new AuthService();
