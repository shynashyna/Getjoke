const url = "https://v2.jokeapi.dev/joke/Any";
document.getElementById("joke");
const btn = document.getElementById("btn")

let getjoke = ()=> { 

fetch (url)
.then (data =>data.json())
.then( item =>

    //  console.log(item.joke)
    {
        joke.textContent = `${item.joke}`;
        console.log(item.joke);
    }

)

 };

 btn.addEventListener("click", getjoke());
 getjoke();