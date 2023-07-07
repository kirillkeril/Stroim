import {LoginResponse} from "@/services/http/types.ts";
import axios, {AxiosResponse} from "axios";
import {UserDto} from "@/dtos/Auth.ts";

class AuthService {
    async login(userDto: UserDto): Promise<LoginResponse | undefined> {
        try {
            const {data}: AxiosResponse<LoginResponse> = await axios.get<LoginResponse>('https://api-uae-test.ujin.tech/api/auth/authenticate/', {
                params: {
                    login: userDto.login,
                    password: userDto.password
                }
            });
            console.log(data.data.user_fullname, data.data.user);
            return data;
        } catch (e) {
            console.log(e);
            return;
        }
    }
}

export default new AuthService();
