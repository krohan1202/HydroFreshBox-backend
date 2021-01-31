import { API } from "../backend";

export const newsletter = (values) => {
  console.log(values);
  return fetch(`http://localhost:8000/`, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email: values.email}),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};