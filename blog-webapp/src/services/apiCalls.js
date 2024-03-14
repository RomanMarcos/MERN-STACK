import axios from 'axios';
import { env } from '../../environment.js';

export const getArticles = async () => {
    return await axios.get(`${env.API_URL}/articles`);
}

export const createArticle = async (title, content, image) => {
    return await axios.post(`${env.API_URL}/article/new`, {
        title: title,
        content: content, 
        image: image
    }).then((data) => {
        saveImage(data.data.article._id, data.data.article.image);
    });
}

export const saveImage = async (id, image) => {
    return await axios.post(`${env.API_URL}/uploadImg/${id}`, {file: image});
}