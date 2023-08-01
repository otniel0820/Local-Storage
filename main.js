const nombre = 'Otniel';
const edad = 31;
const origen = 'Venezuela';

localStorage.setItem('Nombre', nombre);
localStorage.setItem('Edad', edad);
localStorage.setItem('Origen', origen);

const student = {
  firstName: 'Otniel',
  lastName: 'Lascano',
  age: 28,
  country: 'Venezuela',
  courses: ['HTML', 'CSS', 'JavaScript', 'React']
};


localStorage.setItem('Student', JSON.stringify(student));

const body = document.querySelector('body');
let form = document.createElement('form'),
  labelName = document.createElement('label'),
  inputName = document.createElement("input"),
  labelLastName = document.createElement('label'),
  inputLastName = document.createElement("input"),
  labelAge = document.createElement('label'),
  inputAge = document.createElement("input"),
  labelCountry = document.createElement('label'),
  inputCountry = document.createElement("input"),
  buttonSubmit = document.createElement("input");

body.appendChild(form);
form.style = 'display: flex; flex-direction: column; align-items: start; gap: 0.5em'
form.appendChild(labelName);
labelName.innerText = 'Nombre:';
form.appendChild(inputName);
form.appendChild(labelLastName);
labelLastName.innerText = 'Apellido: ';
form.appendChild(inputLastName);
form.appendChild(labelAge);
labelAge.innerText = 'Edad: ';
form.appendChild(inputAge);
form.appendChild(labelCountry);
labelCountry.innerText = 'País de nacimiento: ';
form.appendChild(inputCountry);
form.appendChild(buttonSubmit);
buttonSubmit.innerText = "Enviar";
buttonSubmit.type = 'submit'

buttonSubmit.addEventListener('click', addStudent)
let newArrayStudents = [];
function addStudent(event) {
  event.preventDefault();
  let studentNew = {
    "firstName": inputName.value,
    "lastName": inputLastName.value,
    "age": inputAge.value,
    "country": inputCountry.value,
  };
  newArrayStudents.push(studentNew)
  localStorage.setItem('NewStudent', JSON.stringify(newArrayStudents));
  inputName.value = '';
  inputLastName.value = '';
  inputAge.value = '';
  inputCountry.value = '';
};

//ejercicio 4

const pokemons = [
  { id: 1, name: 'bulbasaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
  { id: 2, name: 'ivysaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
  { id: 3, name: 'venusaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' },
  { id: 4, name: 'charmander', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
  { id: 5, name: 'charmeleon', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' },
  { id: 6, name: 'charizard', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
  { id: 7, name: 'squirtle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
  { id: 8, name: 'wartortle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png' },
  { id: 9, name: 'blastoise', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png' },
  { id: 10, name: 'caterpie', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png' },
  { id: 11, name: 'metapod', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png' },
  { id: 12, name: 'butterfree', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png' },
  { id: 13, name: 'weedle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png' },
  { id: 14, name: 'kakuna', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png' },
  { id: 15, name: 'beedrill', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png' },
  { id: 16, name: 'pidgey', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png' },
  { id: 17, name: 'pidgeotto', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png' },
  { id: 18, name: 'pidgeot', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png' },
  { id: 19, name: 'rattata', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png' },
  { id: 20, name: 'raticate', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png' }
];

const divPokemon = document.createElement('div');
body.appendChild(divPokemon);
divPokemon.style = 'display:flex; justify-content: space-around; flex-wrap: wrap; gap: 5em'



pokemons.forEach(pokemon => {
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
  btnPokemon.innerText= 'Comprar';
  btnPokemon.addEventListener('click', () => {
    addtoCart(pokemon)
  })
  
  
  newArticlePok.appendChild(spanIdPkemon);
  newArticlePok.appendChild(h4NamePokemon);
  newArticlePok.appendChild(imgPokemon);
  newArticlePok.appendChild(btnPokemon);
  
  divPokemon.appendChild(newArticlePok);
  
});


let cartBuy = localStorage.getItem("buyPokemon") === null ? [] : JSON.parse(localStorage.getItem("buyPokemon")) 




function addtoCart(pokemon) {
  cartBuy.push(pokemon)
  localStorage.setItem('buyPokemon',JSON.stringify(cartBuy))
};






