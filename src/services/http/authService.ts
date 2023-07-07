import {LoginResponse} from "@/services/http/types.ts";
import axios, {AxiosResponse} from "axios";

class AuthService {
    async login(): Promise<LoginResponse | undefined> {
        try {
            const {data}: AxiosResponse<LoginResponse> = await axios.get<LoginResponse>('https://api-uae-test.ujin.tech/api/auth/authenticate/?app=ujin&login=70000070002&password=zihykegy');
            console.log(data.data.user_fullname, data.data.user);
            return data;
        } catch (e) {
            console.log(e);
            return;
        }
    }
}

export default new AuthService();
