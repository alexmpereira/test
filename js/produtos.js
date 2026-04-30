// ===== Dados Mockados de Produtos =====

const produtosMock = [
    {
        id: 1,
        nome: 'Notebook Dell Inspiron',
        descricao: 'Notebook de alto desempenho com processador Intel i7 e 16GB RAM',
        preco: 3999.90,
        precoOriginal: 4999.90,
        categoria: 'Eletrônicos',
        estoque: 8,
        avaliacao: 4.5,
        promocao: true
    },
    {
        id: 2,
        nome: 'Mouse Gamer RGB',
        descricao: 'Mouse com 7200 DPI, iluminação RGB e 6 botões programáveis',
        preco: 189.90,
        precoOriginal: null,
        categoria: 'Periféricos',
        estoque: 25,
        avaliacao: 4.8,
        promocao: false
    },
    {
        id: 3,
        nome: 'Teclado Mecânico RGB',
        descricao: 'Teclado mecânico com switches azuis, retroiluminação RGB',
        preco: 349.90,
        precoOriginal: 450.00,
        categoria: 'Periféricos',
        estoque: 3,
        avaliacao: 4.7,
        promocao: true
    },
    {
        id: 4,
        nome: 'Monitor Ultra Widescreen',
        descricao: 'Monitor 34" ultrawide com resolução 3440x1440 e 100Hz refresh rate',
        preco: 1899.90,
        precoOriginal: 2499.90,
        categoria: 'Monitores',
        estoque: 0,
        avaliacao: 4.9,
        promocao: true
    },
    {
        id: 5,
        nome: 'Headset Wireless',
        descricao: 'Headset sem fio com cancelamento de ruído ativo e bateria de 30h',
        preco: 299.90,
        precoOriginal: null,
        categoria: 'Áudio',
        estoque: 12,
        avaliacao: 4.6,
        promocao: false
    },
    {
        id: 6,
        nome: 'Webcam Full HD',
        descricao: 'Webcam 1080p com microfone integrado e lentes de vidro',
        preco: 159.90,
        precoOriginal: 199.90,
        categoria: 'Periféricos',
        estoque: 15,
        avaliacao: 4.3,
        promocao: true
    }
];

// ===== Funções Auxiliares =====

/**
 * Calcula o desconto percentual entre preço original e preço atual
 * @param {number} precoAtual - Preço atual do produto
 * @param {number} precoOriginal - Preço original do produto
 * @returns {number} Percentual de desconto
 */
function calcularDesconto(precoAtual, precoOriginal) {
    if (!precoOriginal) return 0;
    return Math.round(((precoOriginal - precoAtual) / precoOriginal) * 100);
}

/**
 * Determina o status do estoque e retorna informações
 * @param {number} estoque - Quantidade em estoque
 * @returns {object} Objeto com status, classe CSS e texto
 */
function determinarStatusEstoque(estoque) {
    if (estoque === 0) {
        return {
            status: 'indisponivel',
            classe: 'badge-indisponivel',
            texto: 'Indisponível'
        };
    } else if (estoque < 5) {
        return {
            status: 'baixo',
            classe: 'badge-estoque-baixo',
            texto: 'Estoque Baixo'
        };
    } else {
        return {
            status: 'disponivel',
            classe: 'badge-em-estoque',
            texto: 'Em Estoque'
        };
    }
}

/**
 * Gera uma string com estrelas de avaliação
 * @param {number} avaliacao - Nota de 0 a 5
 * @returns {string} String com estrelas e meia estrela quando aplicável
 */
function gerarEstrelas(avaliacao) {
    const estrelaCheia = '★';
    const meiaestrela = '⭐';
    const estrelaVazia = '☆';
    
    const notaInteira = Math.floor(avaliacao);
    const temMeia = avaliacao % 1 >= 0.5;
    const vazias = 5 - notaInteira - (temMeia ? 1 : 0);
    
    let estrelas = estrelaCheia.repeat(notaInteira);
    if (temMeia) {
        estrelas += '⭐';
    }
    estrelas += estrelaVazia.repeat(vazias);
    
    return estrelas;
}

/**
 * Formata valor numérico como moeda brasileira
 * @param {number} valor - Valor a formatar
 * @returns {string} Valor formatado como R$ XXX,XX
 */
function formatarMoeda(valor) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valor);
}

/**
 * Cria o HTML de um item de produto
 * @param {object} produto - Objeto contendo dados do produto
 * @returns {string} HTML do item de produto
 */
function criarItemProduto(produto) {
    const statusEstoque = determinarStatusEstoque(produto.estoque);
    const desconto = calcularDesconto(produto.preco, produto.precoOriginal);
    const estrelas = gerarEstrelas(produto.avaliacao);
    const precoFormatado = formatarMoeda(produto.preco);
    const precoOriginalFormatado = produto.precoOriginal ? formatarMoeda(produto.precoOriginal) : '';

    let html = `
        <li class="item-produto">
            <div class="card card-produto">
                <div class="card-produto-header">
                    <div class="categoria">${produto.categoria}</div>
                    <h5>${produto.nome}</h5>
                </div>
                <div class="card-produto-body">
                    <p class="descricao">${produto.descricao}</p>
                    
                    <div class="preco-container">
    `;

    if (produto.precoOriginal) {
        html += `<span class="preco-original">${precoOriginalFormatado}</span>`;
    }
    
    html += `
                        <span class="preco-atual">${precoFormatado}</span>
                    </div>
                    
                    <div class="avaliacao">
                        <span class="estrelas">${estrelas}</span>
                        <span class="numero-avaliacao">${produto.avaliacao.toFixed(1)}</span>
                    </div>
                    
                    <div class="estoque-info">
                        Quantidade em estoque: <strong>${produto.estoque}</strong>
                    </div>
                    
                    <div class="badges-container">
    `;

    if (produto.promocao && desconto > 0) {
        html += `<span class="badge badge-promocao">-${desconto}%</span>`;
    }

    html += `
                        <span class="badge ${statusEstoque.classe}">${statusEstoque.texto}</span>
                    </div>
                </div>
            </div>
        </li>
    `;

    return html;
}

/**
 * Renderiza todos os produtos na página
 * @param {array} produtos - Array com dados dos produtos
 */
function renderizarProdutos(produtos) {
    const listaProdutos = document.getElementById('lista-produtos');
    
    if (!listaProdutos) {
        console.error('Elemento com id "lista-produtos" não encontrado');
        return;
    }

    let html = '';
    produtos.forEach(produto => {
        html += criarItemProduto(produto);
    });

    listaProdutos.innerHTML = html;
}

// ===== Inicialização =====

/**
 * Executa a renderização ao carregar o DOM
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página carregada. Renderizando produtos...');
    renderizarProdutos(produtosMock);
    console.log(`${produtosMock.length} produtos renderizados com sucesso.`);
});
