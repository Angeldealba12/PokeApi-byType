

const PokemonInfo = ( { name, img } ) => {  
    return(
        <div>
            <p>{ name }</p>
            <img alt={name} src={img}/>
        </div>
    )
}

export default PokemonInfo;