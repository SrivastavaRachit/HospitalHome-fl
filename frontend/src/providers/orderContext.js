import { createContext } from "react";
import app_config from "../config";

export const OrderContext = createContext();

export const OrderProvider = (props) => {
  const url = app_config.api_url + "/order";
  const url2 = app_config.api_url + "/rent";
  const url3 = app_config.api_url + "/hire";

  const addOrder = (data) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    return fetch(url + "/add", requestOptions).then((response) =>
      response.json()
    );
  };
  const addHire = (data) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    return fetch(url3 + "/add", requestOptions).then((response) =>
      response.json()
    );
  };

  const addRent = (data) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    return fetch(url2 + "/add", requestOptions).then((response) =>
      response.json()
    );
  };

  const updateOrder = (id, data) => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    return fetch(url + "/update/" + id, requestOptions).then((response) =>
      response.json()
    );
  };

  const getOrderByUser = (id) => {
    return fetch(url + "/getbyuser/" + id).then((response) => response.json());
  };

  const getRentByUser = (id) => {
    return fetch(url2 + "/getbyuser/" + id).then((response) => response.json());
  };
  const getHireByUser = (id) => {
    return fetch(url3 + "/getbyuser/" + id).then((response) => response.json());
  };

  const getAll = () => {
    return fetch(url + "/getall").then((response) => response.json());
  };

  const getAllRents = () => {
    return fetch(url2 + "/getall").then((response) => response.json());
  };

  const toProvide = {
    addOrder,
    addRent,
    updateOrder,
    getOrderByUser,
    getRentByUser,
    getAll,
    getAllRents,
    getHireByUser,
    addHire,
  };

  return (
    <OrderContext.Provider value={toProvide}>
      {props.children}
    </OrderContext.Provider>
  );
};
