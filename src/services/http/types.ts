import {User} from "@/types/User.ts";

export interface LoginResponse {
    error: 0 | 1;
    message: string;
    data: {
        user_fullname: string;
        user: User;
    }
}
