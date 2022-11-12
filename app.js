const url = "https://icanhazdadjoke.com/";

const btn = document.querySelector(".btn")
const result = document.querySelector(".result")

// console.log(result,btn);

btn.addEventListener("click",()=>{
    fetchDadJoke()
})

const fetchDadJoke = async() =>{
    result.textContent = "loading..."
    try {
        const response = await fetch(url, {
          headers: {
            Accept: "application/json",
            "User-Agent": "learning app",
          },
        });
        // console.log(response);
        if(!response.ok){
            throw new Error("there was an error");
        }
        const data = await response.json();
        // console.log(data);
        result.textContent = data.joke; 
    } catch (error) {
        result.textContent = "There was an error..."
    }
}

fetchDadJoke()