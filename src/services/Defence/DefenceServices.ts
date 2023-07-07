import {httpClient} from "@/services/http/httpClient.ts";
import axios from "axios";

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
    async sendMessage(token: string, channelKey: string, text: string) {
        const res = await axios.post('https://im-uae-test.ujin.tech/sendMessage', {
            channelKey: channelKey,
            text: text,
            token: token
        });
        return res.data;
    }
}
export default new DefenceServices();
