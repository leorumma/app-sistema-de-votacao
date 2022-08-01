function createVoteByNumeroCandidato(numero) {
    ajax(`https://api-sistema-votacao.herokuapp.com/votacao/${numero}`, 'POST', (response) => {
        console.log(response);
    })
}
