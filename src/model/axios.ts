import axios from 'axios'

export const lsApi = axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 1000
});

export const getObjectData = (model: unknown) => {
    let data = { ...model as any }
    Object.keys(data).forEach((key) => {
        if (typeof data[key] == 'function') delete data[key];
    })
    return data
}