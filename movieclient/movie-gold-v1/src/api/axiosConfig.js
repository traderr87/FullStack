import axios from 'axios';

export default axios.create({
    baseURL:'https://0f6e2bc17595.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});