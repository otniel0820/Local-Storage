const body = document.querySelector('body');
const divPokemon = document.createElement('div');
body.appendChild(divPokemon)
const pokemonLocal = JSON.parse(localStorage.getItem("buyPokemon"));

pokemonLocal.length === 0 ? divPokemon.innerText = 'Carrito Vacio' : localStorage.getItem("buyPokemon");

pokemonLocal.forEach(pokemon => {
    const newArticlePok = document.createElement('article');
    newArticlePok.className = 'pkemon-article';
    newArticlePok.style = 'display:flex; justify-content: center; align-items: center; flex-direction:column; border: 2px solid black; width: 10.5em; background:linear-gradient(#ff0000 50%, #ffffff 25%); border-radius: 50%; padding:4em'
  
    const spanIdPkemon = document.createElement('span');
    spanIdPkemon.textContent = `Id: ${pokemon.id}`;
  
    const h4NamePokemon = document.createElement('h4');
    h4NamePokemon.textContent = `${pokemon.name}`;
  
    const imgPokemon = document.createElement('img');
    imgPokemon.src = pokemon.img;
  
    const btnPokemon = document.createElement('button')
    btnPokemon.innerText= 'Eliminar';
    btnPokemon.addEventListener('click', () => {
      deletePokemon(pokemon)
    })
    
  
    newArticlePok.appendChild(spanIdPkemon);
    newArticlePok.appendChild(h4NamePokemon);
    newArticlePok.appendChild(imgPokemon);
    newArticlePok.appendChild(btnPokemon);
  
    divPokemon.appendChild(newArticlePok);
  
  });

  function deletePokemon(pokemon) {
    let pokemonDelete = pokemonLocal.filter(deletePoke => deletePoke.name !== pokemon.name)
    localStorage.setItem("buyPokemon",JSON.stringify(pokemonDelete));
    location.reload();
  }
