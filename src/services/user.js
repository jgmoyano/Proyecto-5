import axios from 'axios'

const URL_ROOT = `${import.meta.env.VITE_BACKEND_URL}/user`

export const loginService = async (data) => {
    const response = await axios.post(`${URL_ROOT}/login`, data)
    return response.data
}

export const signupService = async (data) => {
    const response = await axios.post(`${URL_ROOT}/signup`, data)
    return response.data
}

console.log(URL_ROOT)