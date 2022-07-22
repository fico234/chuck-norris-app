import React, {useState, useEffect} from "react";
import  axios from "axios";


function SecondPage() {
    const [allCategories, setCategories] = useState([])
    const [category, setCategory] = useState("")
    const [jokes, setJokes] = useState([])

    const categoryURL = "https://api.chucknorris.io/jokes/categories"
    const jokeURL = `https://api.chucknorris.io/jokes/random?category=${category}`

    useEffect(() => {
        axios.get(categoryURL).then( response => {
            setCategories(response.data)
        })
    }, [categoryURL])

   useEffect( () => {
        axios.get(jokeURL).then( response => {
            setJokes( prevValue => [response.data, ...prevValue])
        })
        setCategory("")
   }, [jokeURL])

    return (
        <div>
            <div className="text-2xl font-bold text-cyan-900">
                {allCategories.map( element => <button onClick={() => setCategory(element)} className="bg-cyan-50 rounded-lg ml-2 mt-5" type="button">{element}</button>)}
                <div className="center-screen">
                    <ul>
                        {jokes.map( element => <li>{element.value}</li>)}
                    </ul>
                </div>
            </div>   
        </div>
    )
}

export default SecondPage