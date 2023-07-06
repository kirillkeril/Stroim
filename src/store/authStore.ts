import {defineStore} from "pinia";
import {Ref, ref} from "vue";

export const useAuthStore = defineStore('global', () => {
    const username: Ref<string> = ref('');
    const errors: Ref<any[]> = ref([]);

    function setUsername(newUsername: string) {
        username.value = newUsername;
    }
    function logout() {
        username.value = '';
        errors.value = [];
    }

    return {username, errors, setUsername, logout}
});
