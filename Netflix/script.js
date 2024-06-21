document.addEventListener('DOMContentLoaded', () => {
    const episodios = [
        { id: 'ep1', src: 'https://m.media-amazon.com/images/S/pv-target-images/06bb373dd5db39e4588a34ecb7b99b303983069abe46efbad8c647f1cb68f5e8._BR-6_AC_SX480_FMwebp_.jpg', alt: 'Episódio 1'},
        { id: 'ep2', src: 'https://m.media-amazon.com/images/S/pv-target-images/bdcbfe6c9e9e81802b62f7dd2e323a92b4967d8bea4beb2c1816b0ea87e892ce._BR-6_AC_SX480_FMwebp_.jpg', alt: 'Episódio 2'},
        { id: 'ep3', src: 'https://m.media-amazon.com/images/S/pv-target-images/30956a2987612630c51a2e686610409670de628027ae2dbde2c9c096e105a948._BR-6_AC_SX480_FMwebp_.jpg', alt: 'Episódio 3'}
    ]

    const episodiosContainer = document.getElementById('episodios-container')
    episodios.forEach(ep => {
        const epCard = document.createElement('img')
        epCard.id = ep.id
        epCard.className = 'pointer radius20 shadow m-r-15'
        epCard.src = ep.src
        epCard.alt = ep.alt
        epCard.addEventListener('click', () => {
            episodioClicado(ep.alt)
        })
        episodiosContainer.appendChild(epCard)
    })
})

function episodioClicado(epAlt) {
    console.log(`${epAlt} foi clicado`)
}
