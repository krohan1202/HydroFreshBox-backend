import { API } from "../backend";

export const newsletter = (values) => {
  // console.log(values);
  return fetch(`${API}`, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((response) => {
      // console.log(response); 
      return response.json();
    })
    .catch((err) => console.log(err));
};