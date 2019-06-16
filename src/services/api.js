import axios from 'axios';

// Para emulador normal, pode usar o baseURL
// como 'http://localhost:3333'
// Para dispositivo conectado por USB, usa o baseURL
// através do IP da máquina na rede
// No genymotion, usa http://10.0.3.2:3333

const api = axios.create({
    baseURL: 'http://192.168.0.117:3333'
});

export default api;