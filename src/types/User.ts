import {Apartment} from "@/types/Apartment.ts";

export interface User {
    user_mail: string;
    user_phone: string;
    token: string;
    authKey: string;
    apartment: Apartment[];
}
