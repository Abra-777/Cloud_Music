const contenedor = document.getElementById('contenedor')


function peticion(informacion) {
    console.log(informacion)

    const musicas = informacion.data.songs

    musicas.map(renderizarMusica)

}



function renderizarMusica(informacion) {
    const li = document.createElement('li')
    li.setAttribute('class', 'song-item')
    li.innerHTML = `
   
    ${informacion.title} - ${informacion.author}
    `


    li.addEventListener('click', function(){
        sonarcancion(informacion)
    }
    contenedor.appendChild(li)




}

function sonarcancion(informacion){
    alert(informacion.title)
}















axios.get("https://api.institutoalfa.org/api/songs")
    .then(peticion)