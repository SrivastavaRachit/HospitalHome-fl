import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import app_config from "../config";

export const NursingContext = createContext();

export const NursingProvider = props => {

    const url = app_config.api_url + '/nursing';


    useEffect(() => {



    }, [])

    const addNursing = data => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }

        return fetch(url + '/add', requestOptions)
            .then(response => response.json());
    }

    const uploadImage = data => {
        const requestOptions = {
            method: 'POST',
            body: data
        }

        return fetch(app_config.api_url + '/util/addimg', requestOptions)
            .then(response => response.json());
    }


    const getNursingById = id => {

        return fetch(url + '/getbyid/' + id)
            .then(response => response.json());
    }

    const deleteNursing = id => {

        return fetch(url + '/delete/' + id, { method: 'DELETE' })
            .then(response => response.json());
    }

    const getAll = () => {

        return fetch(url + '/getall')
            .then(response => response.json());
    }


    const toProvide = {

        addNursing,
        getNursingById,
        getAll,
        deleteNursing,
        uploadImage

    }

    return (
        <NursingContext.Provider value={toProvide}>
            {props.children}
        </NursingContext.Provider>
    )

}