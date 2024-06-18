document.addEventListener('DOMContentLoaded', () => {
    const episodios = document.querySelectorAll('.episodios img')
    episodios.forEach(ep => {
        ep.addEventListener('click', () => {
            episodioClicado(ep.alt)
        })
    })
})

function episodioClicado(epAlt) {
    console.log(`${epAlt} foi clicado`)
}
