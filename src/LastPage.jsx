import React, {useState} from "react";
import axios from "axios";

function LastPage() {

    const [userInput, setUserinput] = useState("")
    const [jokes, setJokes] = useState([])

    const textSearchURL = `https://api.chucknorris.io/jokes/search?query=${userInput}`

    function loadJokes(event) {
        if (event.key === "Enter") {
            axios.get(textSearchURL).then( response => {
                setJokes(response.data.result)
            })
        }
    } 
    
    function removeJoke(id) {
        setJokes( prevValue => prevValue.filter( element => element.id !== id))
    }

    return (
        <div>
            <div className="text-center	mt-20 text-lg">
                    <input 
                    onChange={ event => setUserinput(event.target.value)}
                    onKeyPress={loadJokes}
                    className="w-96 rounded-lg"
                    value={userInput}
                    type="text" 
                    placeholder="Search jokes" 
                    />
            <div className="text-2xl font-bold text-cyan-900">
                <ul>
                    {jokes.slice(0,10).map( element => <li onClick={()=> removeJoke(element.id)} key={element.id}>{element.value}</li>)}
                </ul>
            </div>
            </div>
        </div>
    )
}

export default LastPage