import {httpClient} from "@/services/http/httpClient.ts";

class DefenceServices {
    async setLampState(state: 1 | 0, token: string) {
        const response = await httpClient.get('api/setLampState/', {
            params: {
                token, state
            }
        });
        console.log(response.data);
    }
    async isFlooded(token: string) {
        const response = await httpClient.get('api/isFlooded/', {
            params: {
                token
            }
        });
        return response.data;
    }
    async isTooWarm(token: string) {
        const response = await httpClient.get('api/isTooWarm', {
            params: {
                token
            }
        });
        return response.data;
    }
}
export default new DefenceServices();
