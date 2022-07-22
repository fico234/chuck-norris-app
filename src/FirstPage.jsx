import React, {useState, useEffect} from "react";
import  axios  from "axios";

function FirstPage() {

    const [rJoke, setRJoke] = useState({})
    const [jokes, setJokes] = useState([])

    const randomJokeURL = "https://api.chucknorris.io/jokes/random"

    useEffect(()=> {
        axios.get(randomJokeURL).then( response => {
            setRJoke(response.data)
        })
    }, [randomJokeURL])
 
   
    function loadJokes() {
        axios.get(randomJokeURL).then( response => {
            setJokes(prevValue => [response.data.value, ...prevValue])
        })
    }

    return (
        <div className="center-screen">
            <div className="text-2xl font-bold text-cyan-900">
                <ul>
                {jokes.map( element => <li>{element}</li>)}
                <li>{rJoke.value}</li>
                </ul>
                <button onClick={loadJokes} className="bg-cyan-50 rounded-lg" type="button">More jokes</button>
            </div>   
        </div>
    )
}

export default FirstPage