import axios from 'axios';
import { env } from '../../environment.js';

export const getArticles = async () => {
    return await axios.get(`${env.API_URL}/articles`);
}

export const getArticle = async (text) => {
    return await axios.get(`${env.API_URL}/article/${text}`);
}

export const createArticle = async (title, content, image) => {
    return await axios.post(`${env.API_URL}/article/new`, {
        title: title,
        content: content, 
        image: image.name
    }).then((data) => {
        saveImage(data.data.article._id, image);
    });
}

export const saveImage = async (id, image) => {
    const formData = new FormData();
    formData.append('file', image);
    return await axios.post(`${env.API_URL}/uploadImg/${id}`, formData);
}