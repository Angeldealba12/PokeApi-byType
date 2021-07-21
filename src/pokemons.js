import { useEffect, useState } from "react";
import PokemonInfo from "./PokemonInfo"

 const Pokemons = ({ url }) => {

    const [name, setName] = useState('')
    const [img, setImg] = useState('')

    useEffect(() => {
       const logic = async () => {
           const res = await fetch(url).then(
           res => res.json())

           setName(res.name)
           setImg(res.sprites.other.dream_world.front_default)
       } 
       logic()
    }, [url])

    return (
        <div>
            {name && img && <PokemonInfo name={name} img={img}/>}
        </div>
    )
}

export default Pokemons;