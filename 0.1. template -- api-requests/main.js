// // example with json placeholder api of users

// // with fetch (promises)
const getUsersByFetch = () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
        .then((res) => res.json())
        .then((data) => console.log("fetch api data (users):", data))
        .catch((err) => console.log(err));
};
getUsersByFetch();


// ------------------------------------------------------------------
// ------------------------------------------------------------------


// // with fetch (async-await)
const getUsersByFetch2 = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("fetch api data (users):", data);
    } catch (err) {
        console.log(err);
    }
};
getUsersByFetch2();


// ------------------------------------------------------------------
// ------------------------------------------------------------------


// // with axios (async-await)
const getUsersByAxios = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await axios.get(url); // note that axios has been included in the html file via cdn
    console.log("axios data: (users):", response.data);
};
getUsersByAxios();
