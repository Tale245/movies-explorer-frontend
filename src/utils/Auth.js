const baseUrl = "http://localhost:3001";

export const register = (name, email, password) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    }),
  })
    .then((response) => {
      try {
        if (response.status === 200) {
          return response.json();
        } else {
          return response;
        }
      } catch (e) {
        return console.log(e);
      }
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};
export const login = (email, password) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      try {
        if (data.status === 200) {
          return data.json();
        } else if (data.token) {
          localStorage.setItem("token", data.token);
          return data;
        } else {
          return data;
        }
      } catch (e) {
        return console.log(e);
      }
    })
    .catch((err) => console.log(err));
};
