// Example with fetch api using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
    const choice = document.querySelector("input").value.toLocaleLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${choice}`;

    fetch(url)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(`error ${err}`);
        });
}


// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------


// Example with axios using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch1);

async function getFetch1() {
    const choice = document.querySelector("input").value.toLocaleLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${choice}`;

    const data = await axios.get(url);
    try {
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
