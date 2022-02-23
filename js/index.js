
fetch('https://pokeapi.co/api/v2/pokemon?limit=12')
    .then(request => request.json())
    .then(allpokemon => {

        var pokemons = []
      
        allpokemon.results.map((val) => {
            
            
            fetch(val.url)
                .then(request => request.json())
                .then(singlePokemon => {
                    pokemons.push({
                        nome:val.name,
                        imagem: singlePokemon.sprites.front_default,
                        id: singlePokemon.id
                    });
                    
                   

                    if (pokemons.length == 12){

                        var pokemonBoxes =  document.querySelector('.pokemon-boxes')
                        pokemonBoxes.innerHTML = ''


                            pokemons.map((val) => {
                            pokemonBoxes.innerHTML += `
                            
                        <div class="pokemon">
                            <img src=`+val.imagem+`>
                            <p class="pokemon-number">00`+ val.id +`</p>
                            <p class="pokemon-name">`+val.nome+`</p>
                            <div class="poke-abilities">
                                <span class="type">water</span>
                                <span class="power">water</span>
                            </div>
                        </div>
                            
                            `
                        })
                    
                    }


                 });
    
        })

            

    })