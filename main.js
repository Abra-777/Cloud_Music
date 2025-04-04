const contenedor = document.getElementById('contenedor')


function peticion(informacion) {
    console.log(informacion)

    const musicas = informacion.data.songs

    musicas.map(renderizarMusica)

}



function renderizarMusica(informacion) {
    const div = document.createElement('div')
    // div.setAttribute

    div.innerHTML = `
        <img src="/assets/image 20.png" alt="">
            <p>titulo</p>
            <p>artistta</p>
    `






contenedor.appendChild(div)



}



axios.get("https://api.institutoalfa.org/api/songs")
    .then(peticion)