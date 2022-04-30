import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import app_config from "../config";

export const UserContext = createContext();

export const UserProvider = props => {

    const url = app_config.api_url + '/user';

    const [loggedin, setLoggedin] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        let user = sessionStorage.getItem('user');
        console.log(user);
        if (user) {
            setLoggedin(true);
            setCurrentUser(JSON.parse(user));
        }

    }, [])

    const addUser = data => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }

        return fetch(url + '/add', requestOptions)
            .then(response => response.json());
    }

    const updateUser = (id, data) => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }

        return fetch(url + '/update/' + id, requestOptions)
            .then(response => response.json());
    }

    const getUserByEmail = email => {

        return fetch(url + '/getbyemail/' + email)
            .then(response => response.json());
    }
    

    const getUserById = id => {

        return fetch(url + '/getbyid/' + id)
            .then(response => response.json());
    }
    const getAllUsers = () => {

        return fetch(url + '/getall')
            .then(response => response.json());
    }
    
    

    const uploadImage = (data) => {
        const requestOptions = {
            method: "POST",
            body: data,
        };

        return fetch(app_config.api_url + "/util/addimg", requestOptions).then(
            (response) => response.json()
        );
    };

    const deleteUser = id => {

        return fetch(url + '/delete/' + id, { method: 'DELETE' })
            .then(response => response.json());
    }

    const Logout = () => {
        sessionStorage.removeItem('user');
        setLoggedin(false);
        setCurrentUser(null);
    }

    const toProvide = {
        loggedin,
        currentUser,
        setLoggedin,
        setCurrentUser,
        uploadImage,
        getUserById,
        addUser,
        updateUser,
        deleteUser,
        getUserByEmail,
        getAllUsers,
        Logout
    }

    return (
        <UserContext.Provider value={toProvide}>
            {props.children}
        </UserContext.Provider>
    )

}