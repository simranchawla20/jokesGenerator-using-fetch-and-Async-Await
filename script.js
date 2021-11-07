const jokes= document.querySelector('#joke');
const jokeBtn=document.querySelector('#jokesbtn');

const generateJokes= async ()=>{
    try{
            const setHeader={
                headers:{
                    Accept:"application/json"
                }
            }

            const res= await fetch('https://icanhazdadjoke.com/',setHeader);
            const data=res.json();
            jokes.innerHTML=data.joke;

        }catch(err){
            console.log(`the error is ${err}`);
        }

}
generateJokes();
jokeBtn.addEventListener('click',generateJokes);