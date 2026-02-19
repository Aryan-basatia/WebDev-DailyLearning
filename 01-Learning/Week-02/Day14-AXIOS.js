// axios.get("https://swapi.dev/api/people/1/")
// .then(res => {
//     console.log("Response",res);
// })
// .catch(e => {
//     console.log("Error",e);
// })

/* const getStarWarPerson = async(id) => {
    try{
const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
console.log(res.data);
    }catch(e){
        console.log("error",e)
    }
}
for(let i =1;i<=5;i++){
    getStarWarPerson(i);
}
 */

// AXIOS Header

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');


const addNewJoke = async() => {
    const jokeText = await getDadJoke();
     const newLi = document.createElement('li');
    newLi.append(jokeText);
    jokes.append(newLi);
}

const getDadJoke = async() =>{
    try{const config = { headers: {Accept: 'application/json'} }
    const res = await axios.get("https://icanhazdadjoke.com/", config)
    return res.data.joke
    } catch(e){
            return "No jokes available sorry"
    }
}

button.addEventListener('click',addNewJoke)