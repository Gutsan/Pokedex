# PokeDex Utilizando PokeApi Reacte+TailwindCSS

PokeDex utilizando api pública [PokeApi](pokeApi.co), de la cual se obtiene datos de pokemon como nombre, id, tipo e imagen. Esta pagina considerá interacción con usuario según criterios para busqueda de pokemon y tipo de orden que se deben renderizar datos.


[Ver Pagina](https://pokedex-gutsan.netlify.app/)

## Explicación general

[Ver explicación en YouTube](https://youtu.be/wh-Vy6V8RtE)

Landing Page dividida en 6 componentes de react:
```
App (principal)
Header
Searcher
SortSelect
MiApi
ModfPage
Footer
```
## App
App es el componente principal donde se renderizan los demás componentes.

Dentro de App para interactuar con el usuario se utiliza el hook de react useState, declarando los siguientes estados:
|Estado|Descripción|
|:-----|:--|
|endpointLimit|Estado para definir limites de pokemon a renderizar por defecto esta el id de los 12 primeros pokemon|
|searchType|Estado con el tipo de busqueda que desea utilizar usuario(en esta versión solo se realiza busqueda por nombre)|
|dataRequestPokemon|Estado definido como array que guarda todos los endpoint de los pokemones, por defecto estan todos los pokemon|
|searchValue|Estado que guarda lo ingresado por usuario para realizar la busqueda|
|RenderPage|Estado para guardar la pagina que quiere renderizar el usuario|

Además de useState se utiliza el hook useEffect:

El primero se utiliza para modificar el estado endpointLimit cada vez que se modifique el estado RenderPage

El segundo useEffect es el que modifica el estado dataRequestPokemon cada vez que se modifique searchValue, dataRequestPokemon o sortType.

Luego de esto en app tenemos definidas 2 funciones para obtener el vector de pokemones que se deben renderizar (estado: dataRequestPokemon) según el resultado de busqueda o el orden que requiere usuario,

## Header
El componente Header es sencillo y mas que nada estetico. Contiene el titulo de pagina y se encuentre estilizado mediante tailwindCSS

## Searcher
componente recibe como parametro las funciones para modificar estados setSearchValue y setRenderPage, con esto que renderiza un input que contiene evento onChange que utiliza el parametro setSearchValue para modificar el estado searchValue  guardando lo que usuario vaya igresando y modificar renderPage para que siempre vuelva a la primera pagina.

## SortSelect
Componente recibe como parametro setSortType y renderiza un Select con las 2 opciones de orden por numero o alfabetico y lo guarda en estado sortType.

## MiApi
En este componente se renderiza la galeria de pokemones según los criteros del usuario (busqueda y orden). recibe como parametro el EndPoint que desean renderizar. Acá se realiza el fetch para cada card que luego se renderiza según componente pokemonCard

## ModfPage
componente donde usuario puede cambiar pagina a renderizar 

## Footer
Componente final con créditos de pagina.


