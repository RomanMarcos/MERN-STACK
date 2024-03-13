import axios from 'axios';
import { env } from '../../environment.js';

export const getArticles = async () => {
    return await axios.get(`${env.API_URL}/articles`);
}