import axios from "axios";
const url = "http://localhost:8080/users";

//get all user or by id
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

export const deleteUserById = async(id) => {
    try {
        return await axios.get(`${url}/delete/${id}`);
    } catch (error) {
        console.log(error);
    }
}

export const editUserById = async(id, data) => {
    try {
        return await axios.post(`${url}/update/${id}`, data);
    } catch (error) {
        console.log(error);
    }
}