import axios from "axios";
const url = "http://localhost:8080/users";

export const getAllUsers = async(getId) => {
    try {
        const id = getId || "";
        return await axios.get(`${url}/${id}`);
    } catch (error) {
        console.log(error);
    }
}

export const createNewUser = async(data) => {
    try {
        return await axios.post(url+"/add", data);
    } catch (error) {
        console.log(error);
    }
}