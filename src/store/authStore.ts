import {defineStore} from "pinia";
import {reactive, Ref, ref} from "vue";
import {User} from "@/types/User.ts";

export const useAuthStore = defineStore('auth', () => {
    const userFullName: Ref<string> = ref('');
    const _userInit = {
        token: "",
        authKey: '',
        user_mail: '',
        user_phone: '',
        apartment: [{
            complex_title: '',
            custom_title: '',
        }],
    }
    const user: User = reactive(_userInit);
    const isLoggedIn: Ref<boolean> = ref(false);

    const errors: Ref<any[]> = ref([]);

    function setUsername(newUsername: string) {
        userFullName.value = newUsername;
    }
    function setUserData(newUser: User) {
        user.user_phone = newUser.user_phone;
        user.user_mail = newUser.user_mail;
        user.authKey = newUser.authKey;
        user.token = newUser.token;
        user.apartment = newUser.apartment;
    }

    function login(newUsername: string, newUser: User) {
        setUsername(newUsername);
        setUserData(newUser);
        isLoggedIn.value = true;
    }
    function logout() {
        userFullName.value = '';
        errors.value = [];
    }

    return {userFullName, user, errors, setUsername, logout, isLoggedIn, setUserData, login}
});
