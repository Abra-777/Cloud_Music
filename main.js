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
    <img src="${informacion.image.url}">
    ${informacion.title} - ${informacion.author}
    `


    li.addEventListener('click', function () {
        sonarcancion(informacion)
    })
    contenedor.appendChild(li)

}




function sonarcancion(informacion) {
    const tiempo = document.getElementById('tiempo')
    tiempo.setAttribute('src', informacion.audio.url)
    
    
    document.getElementById('imagen').setAttribute('src', informacion.image.url)

    document.getElementById('titulo').innerHTML = informacion.title
    
    document.getElementById('artista').innerHTML = informacion.author
}


axios.get("https://api.institutoalfa.org/api/songs")
    .then(peticion)