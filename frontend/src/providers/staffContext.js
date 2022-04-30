import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import app_config from "../config";

export const StaffContext = createContext();

export const StaffProvider = props => {

    const url = app_config.api_url + '/staff';


    useEffect(() => {



    }, [])

    const addStaff = data => {
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

    const getStaffById = id => {

        return fetch(url + '/getbyid/' + id)
            .then(response => response.json());
    }

    const deleteStaff = id => {

        return fetch(url + '/delete/' + id, { method: 'DELETE' })
            .then(response => response.json());
    }

    const getAll = () => {

        return fetch(url + '/getall')
            .then(response => response.json());
    }

    
    const AddRating = (id, reviewData) => {


        return newRating(reviewData)
            .then(data => {
                const requestOptions = {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ reviews: data._id })
                }
                return fetch(url + '/addreview/' + id, requestOptions)
                    .then(response => response.json());
            })

    }

    const newRating = (data) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }

        return fetch(app_config.api_url + '/review/add', requestOptions)
            .then(response => response.json());
    }

    const toProvide = {

        addStaff,
        getStaffById,
        getAll,
        uploadImage,
        deleteStaff,
        AddRating,
    }

    return (
        <StaffContext.Provider value={toProvide}>
            {props.children}
        </StaffContext.Provider>
    )

}