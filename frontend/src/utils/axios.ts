import axios from "axios";

const url = process.env.NEXT_PUBLIC_URL_API;

export const api = axios.create({ baseURL: url });