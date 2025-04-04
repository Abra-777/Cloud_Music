const contenedor = document.getElementById('contenedor')


function peticion (informacion) {
    console.log(informacion)
    
    const musicas = informacion.data.songs
    
}



    function renderizarMusica () {

    }
    


axios.get("https://api.institutoalfa.org/api/songs")
     .then(peticion)