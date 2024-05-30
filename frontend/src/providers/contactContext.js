import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import app_config from "../config";

export const ContactContext = createContext();
export const ContactProvider = props => {

    const url = app_config.api_url + '/contact';

    useEffect(() => {
    }, [])

    const addContact = data => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }

        return fetch(url + '/add', requestOptions)
            .then(response => response.json());
    }






    const deleteContact = id => {

        return fetch(url + '/delete/' + id, { method: 'DELETE' })
            .then(response => response.json());
    }

    const getAll = () => {

        return fetch(url + '/getall')
            .then(response => response.json());
    }


    const toProvide = {

        addContact,

        getAll,
        deleteContact,

    }

    return (
        <ContactContext.Provider value={toProvide}>
            {props.children}
        </ContactContext.Provider>
    )

}