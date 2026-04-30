# PRD - Página de Lista de Produtos com Bootstrap

## 📋 Visão Geral
Desenvolvimento de uma página HTML responsiva para exibição de uma lista não ordenada de produtos mockados, utilizando Bootstrap via CDN para estilização e layout.

## 🎯 Objetivo
Criar uma interface limpa, intuitiva e responsiva que apresente um catálogo de produtos com informações relevantes, mantendo uma experiência de usuário otimizada em dispositivos móveis e desktop.

---

## 📦 Requisitos Funcionais

### 1. **Lista de Produtos**
- [ ] Exibir lista não ordenada (`<ul>`) com produtos mockados
- [ ] Cada item da lista deve conter as seguintes informações:
  - Nome do produto
  - Descrição breve
  - Preço atual
  - Preço original (se houver desconto)
  - Categoria
  - Quantidade em estoque
  - Avaliação (em estrelas)
  - Badges de promoção e status de estoque

### 2. **Dados Mockados**
- [ ] Criar array de objetos com pelo menos 5 produtos
- [ ] Dados incluir: id, nome, descrição, preço, preçoOriginal, categoria, estoque, avaliação, promocao
- [ ] Renderizar dados dinamicamente via JavaScript

### 3. **Estilização com Bootstrap**
- [ ] Utilizar Bootstrap 5 via CDN
- [ ] Aplicar classes Bootstrap para:
  - Grid layout (container, row, col)
  - Cards ou componentes de listagem
  - Badges para status e promoção
  - Responsividade automática
- [ ] Manter estilo consistente e profissional

### 4. **Badges e Indicadores**
- [ ] Badge de promoção (desconto percentual)
- [ ] Badge de status de estoque:
  - Verde: "Em Estoque"
  - Amarelo: "Estoque Baixo" (< 5 unidades)
  - Vermelho: "Indisponível" (0 unidades)

### 5. **Avaliações**
- [ ] Exibir avaliação em formato de estrelas (★)
- [ ] Mostrar valor numérico da avaliação

### 6. **Responsividade**
- [ ] Layout adaptável para dispositivos móveis (< 768px)
- [ ] Funcionalidade completa em tablets e desktops
- [ ] Usar grid do Bootstrap para garantir responsividade

---

## 🎨 Requisitos de Design

### Layout
- [ ] Header com título "📦 Catálogo de Produtos"
- [ ] Container centralizado com largura máxima
- [ ] Espaçamento adequado entre elementos
- [ ] Padding e margins consistentes

### Cores e Tipografia
- [ ] Utilizar paleta de cores do Bootstrap (ou personalizada)
- [ ] Fontes legíveis e hierarquia clara
- [ ] Contraste adequado para acessibilidade

### Interatividade
- [ ] Efeito hover nos itens da lista
- [ ] Transições suaves
- [ ] Cursor pointer nos elementos clicáveis

---

## 🛠️ Requisitos Técnicos

### HTML
- [ ] Estrutura semântica correta
- [ ] Meta tags para viewport e charset
- [ ] Validação HTML5

### CSS
- [ ] Bootstrap via CDN
- [ ] CSS customizado apenas para complementar Bootstrap
- [ ] Sem conflitos com classes Bootstrap

### JavaScript
- [ ] Array com dados mockados
- [ ] Função para renderizar produtos dinamicamente
- [ ] Função para gerar estrelas de avaliação
- [ ] Função para determinar status de estoque
- [ ] Cálculo automático de desconto percentual
- [ ] Execução ao carregar o DOM

---

## 📱 Comportamento Responsivo

| Breakpoint | Comportamento |
|-----------|--------------|
| Extra Small (< 576px) | 1 coluna, cards em tela cheia |
| Small (≥ 576px) | 1 coluna |
| Medium (≥ 768px) | 2 colunas |
| Large (≥ 992px) | 3 colunas |
| Extra Large (≥ 1200px) | 4 colunas |

---

## ✨ Características Principais

✅ Lista não ordenada com produtos mockados  
✅ Informações úteis: nome, descrição, preço, categoria, estoque, avaliação  
✅ Estilização completa com Bootstrap via CDN  
✅ Design responsivo (mobile-first)  
✅ Badges para promoção e status de estoque  
✅ Sistema de avaliação com estrelas  
✅ Preço original com desconto destacado  
✅ Efeitos hover para melhor UX  
✅ Dados dinâmicos gerados via JavaScript  
✅ Código limpo e bem estruturado  

---

## 📂 Estrutura do Projeto

```
projeto/
├── index.html          # Página principal com lista de produtos
├── css/
│   └── custom.css      # Estilos customizados (complementar Bootstrap)
└── js/
    └── produtos.js     # Lógica JavaScript (opcional - pode estar inline)
```

---

## 🚀 Próximas Etapas (Futuro)

- [ ] Implementar filtros por categoria
- [ ] Adicionar ordenação (preço, avaliação)
- [ ] Modal de detalhes do produto
- [ ] Carrinho de compras
- [ ] Integração com API real
- [ ] Busca/filtro por nome
- [ ] Paginação

---

## ✅ Critérios de Aceitação

- [ ] Página abre sem erros no navegador
- [ ] Lista de produtos exibida corretamente
- [ ] Bootstrap aplicado e funcionando
- [ ] Responsivo em todos os breakpoints
- [ ] Badges exibem informações corretas
- [ ] Estrelas renderizam conforme avaliação
- [ ] Código validado e sem console errors
- [ ] Design segue padrões do Bootstrap
- [ ] Todos os dados mockados exibidos corretamente

---

## 📝 Notas Adicionais

- Utilizar **Bootstrap 5** via CDN oficial
- Manter compatibilidade com navegadores modernos
- Seguir boas práticas de acessibilidade (WCAG)
- Código bem comentado e indentado
- Nomes de classes e IDs em português (legibilidade)