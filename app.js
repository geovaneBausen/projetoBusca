function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById('resultados');
    let campoPesquisa = document.getElementById('campoPesquisa').value;

    campoPesquisa = campoPesquisa.toLowerCase();

    if (campoPesquisa == "") {
        section.innerHTML = "<p>Campo pesquisa esta vazio</p>";
        return;
    }

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo card HTML 
            resultados += `
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Título: ${dado.titulo}</h5>
                    </div>
                    <div class="card-body">
                        <p class="card-description">Informação: ${dado.descricao}</p>
                    </div>
                </div>
            `;
        }
    }

    // Se não houver resultados, exibe uma mensagem de erro
    if (resultados === "") {
        section.innerHTML = "<p>Nada foi encontrado. Pesquisa invalida</p>";
    } else {
        // Atribui os resultados HTML à seção
        section.innerHTML = resultados;
    }

     // Limpa o campo de pesquisa após a busca
     document.getElementById('campoPesquisa').value = "";
}
