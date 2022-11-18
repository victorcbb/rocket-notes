import axios from "axios"

export const api = axios.create({
  // baseURL: "https://localhost:3333"
  // baseURL: "https://apirocketnotes.herokuapp.com"
  baseURL: "https://rocketnotes-api-b5bo.onrender.com"
})
