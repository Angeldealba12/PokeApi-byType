
const PokemonInfo = ( { name, img } ) => {  
    return(
        <div className="pokemon-card">        
            <img alt={name} src={img}/>
            <p>{ name }</p>
        </div>
    )
}

export default PokemonInfo;