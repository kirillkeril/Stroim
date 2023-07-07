import axios from "axios";

export class VkluchitBlyadskayaLampa {
    static async set(state: number) {
        await axios.get(`https://api-uae-test.ujin.tech/api/apartment/send-signal/?token=ust-738977-cf7acd749219f1ba15d2c28c8aeb7388&serialnumber=636586920&signal=in1-inv&state=${state}`);
    }
}
