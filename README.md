# PokeDex Utilizando PokeApi React+TailwindCSS

PokeDex utilizando api pública [PokeApi](pokeApi.co), de la cual se obtiene datos de pokemon como nombre, id, tipo e imagen. Esta pagina considerá interacción con usuario según criterios para busqueda de pokemon y tipo de orden que se deben renderizar datos.


[Ver Pagina](https://pokedex-gutsan.netlify.app/)

## Explicación general
SPA desarrollada con React y estilada con Tailwind Css, Se utilizá React Router para direccionar y gestionar las 3 vista de app: 

### View/Home.jsx
Landing page "/home" como pagina principal con navbar enn header para navegar entre distintas paginas utilizando componente NavLink de react router y estilando con propiedad Activate para indicar "Donde estamos". Por ultimo en Home se agrega componente Link para direccionar a pagina /pokemon => view/listPokemon.jsx
![image](https://github.com/Gutsan/Pokedex/assets/127453901/f58043cc-a3d0-4010-976a-5266ce5a7431)

### view/Pokemon.jsx
Galleria con lista de pokemon se renderizan en distintas paginas cada una con 12 pokemon donde cada card se encuentra estilizada con Tailwind css dependiendo del tipo principal da cada pokemon. 

![image](https://github.com/Gutsan/Pokedex/assets/127453901/ebe2b27d-8259-4f27-97e9-933337d76adf)

Para interactuar en Pagina tenemos un input para buscar pokemon según el nombre, un select para ordenar de manera alfabetica y numerica(por defecto), tambien existen botones para cambiar pagina de pokemones a renderizar y por ultimo cada card ejecuta metódo onClick para direcciónar a Pagina /Pokemon/:id =>view/PokemonPage.jsx mediante hook de react router "useNavigate()"

### View/PokemonPage.jsx
Pagina con información detalla de pokemon renderizada utilizando hook de react router "useParams()"

![image](https://github.com/Gutsan/Pokedex/assets/127453901/5ca3f879-8fc0-4f3a-9473-976a1220f295)

## Lógica
Para la logica de se utilizaron 4 custom hook para llamar a la PokeApi detallados a continuación 
|Nombre|Descripción|
|:-----|:--|
|useListPokemon|Aquí se obtiene el listado completo de pokemon desde el endPoint: `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${qty}` donde se puede ingresar la constante qty para indicar la cantidad de pokemon que se deben obtener en la llamada. este hook retorna el estado "dataListPokemon" que contiene nombre y endPoint de cada pokemon |
|usePokemon|Hook para obtener desde pokeApi los taods de un pokemon en especifico, recibe como parametro el endPoint del pokemon `ENDPOINT_POKEMON` y retorna un estado seteado con un objeto con la información de pokemon `{ name, imgFront, type, id, height,weight,base_experience,stats}`|
|useSpecie|Hook para obtener desde en el endpoint `https://pokeapi.co/api/v2/pokemon-species/${idPokemon}` Curiosidades y/o descripción de pokemon y endpoint con grupo evolutivo de pokemon. recibe como parametro el ID de pokemon `idPoke` y retorna  estado speciData `{curiosities,evolutionsURL}`  |
|useEvolutions|Hook para obtener desde pokeApi grupo evolutivo de pokemon. recibe como parametro Endpoint de evoluciones `evolutionUrl` y retorna datos array con nombres de evoluciones `{nameEvolutions}`|

Además de estos custom hook se utilizaron distintos estados globales con hook useContext:

|Nombre|Descripción|
|:-----|:--|
|endpointLimit|Estado para definir limites de pokemon a renderizar por defecto esta el id de los 12 primeros pokemon|
|searchType|Estado con el tipo de busqueda que desea utilizar usuario(en esta versión solo se realiza busqueda por nombre)|
|searchValue|Estado que guarda lo ingresado por usuario para realizar la busqueda|
|RenderPage|Estado para guardar la pagina que quiere renderizar el usuario|





