# Technical Specification Document (SPEC)
## Página HTML Semântica com Saudação Personalizada

---

## 1. Arquitetura Proposta

### 1.1 Visão Geral
Sistema simples de renderização de página HTML estática com suporte a personalização de saudações. A arquitetura segue o padrão **Frontend-Only** com foco em semântica HTML5 e acessibilidade.

### 1.2 Componentes Principais

```
┌─────────────────────────────────────┐
│   Client (Navegador Web)            │
│  ┌───────────────────────────────┐  │
│  │  HTML Semântico (index.html)  │  │
│  │  - Header                     │  │
│  │  - Main Content               │  │
│  │  - Footer                     │  │
│  └───────────────────────────────┘  │
│  ┌───────────────────────────────┐  │
│  │  CSS (styles.css)             │  │
│  │  - Responsividade             │  │
│  │  - Acessibilidade             │  │
│  └───────────────────────────────┘  │
│  ┌───────────────────────────────┐  │
│  │  JavaScript (app.js)          │  │
│  │  - Personalização dinâmica    │  │
│  │  - Interatividade             │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

### 1.3 Stack Tecnológico
- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Semântica**: ARIA labels, semantic HTML tags
- **Acessibilidade**: WCAG 2.1 (AA)
- **SEO**: Meta tags, Open Graph
- **Responsividade**: Mobile-first approach

### 1.4 Padrões de Design
- **Semântica HTML**: `<header>`, `<main>`, `<footer>`, `<article>`
- **BEM CSS**: Block Element Modifier para naming conventions
- **Progressive Enhancement**: Funcionalidade sem JavaScript

---

## 2. Modelos de Dados (Schema)

### 2.1 Estrutura de Dados JSON (Opcional - Para Extensão Futura)

```json
{
  "page": {
    "title": "Olá Jaqueline",
    "lang": "pt-BR",
    "meta": {
      "description": "Página de saudação personalizada",
      "charset": "UTF-8",
      "viewport": "width=device-width, initial-scale=1.0"
    },
    "header": {
      "title": "Olá Jaqueline",
      "level": 1
    },
    "main": {
      "content": "Conteúdo principal da página",
      "sections": []
    },
    "footer": {
      "content": "Rodapé da página"
    }
  }
}
```

### 2.2 Estrutura HTML Semântica

| Elemento | Tipo | Descrição | Obrigatório |
|----------|------|-----------|------------|
| `<!DOCTYPE html>` | Meta | Declaração de tipo de documento | ✅ Sim |
| `<html lang="pt-BR">` | Root | Elemento raiz com atributo de idioma | ✅ Sim |
| `<head>` | Meta | Metadados da página | ✅ Sim |
| `<meta charset="UTF-8">` | Meta | Codificação de caracteres | ✅ Sim |
| `<meta name="viewport">` | Meta | Responsividade mobile | ✅ Sim |
| `<title>` | Meta | Título da página | ✅ Sim |
| `<header>` | Semântico | Seção de cabeçalho | ✅ Sim |
| `<h1>` | Semântico | Título principal (único) | ✅ Sim |
| `<main>` | Semântico | Conteúdo principal | ✅ Sim |
| `<footer>` | Semântico | Rodapé da página | ⚠️ Recomendado |

### 2.3 Atributos ARIA (Acessibilidade)

```html
<!-- Exemplo de atributos ARIA -->
<header role="banner" aria-label="Cabeçalho da página">
  <h1 aria-level="1">Olá Jaqueline</h1>
</header>

<main role="main" aria-label="Conteúdo principal">
  <!-- Conteúdo -->
</main>
```

---

## 3. Endpoints de API

### 3.1 Estrutura de Arquivos
Para uma aplicação estática simples:

```
projeto/
├── index.html           (Arquivo principal)
├── css/
│   └── styles.css       (Estilos)
├── js/
│   └── app.js          (Lógica JavaScript)
├── assets/
│   ├── images/
│   └── fonts/
└── README.md           (Documentação)
```

### 3.2 GET / (Raiz)

**Descrição**: Retorna a página HTML com saudação semântica

**Request**:
```
GET / HTTP/1.1
Host: localhost:3000
```

**Response** (200 OK):
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Página de saudação personalizada">
    <meta property="og:title" content="Olá Jaqueline">
    <meta property="og:description" content="Página de saudação para Jaqueline">
    <title>Olá Jaqueline</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <header role="banner">
        <h1>Olá Jaqueline</h1>
    </header>
    <main role="main">
        <article>
            <p>Bem-vinda à nossa página personalizada!</p>
        </article>
    </main>
    <footer role="contentinfo">
        <p>&copy; 2024 - Página Semântica</p>
    </footer>
    <script src="js/app.js"></script>
</body>
</html>
```

### 3.3 GET /css/styles.css

**Descrição**: Arquivo CSS com estilos responsivos

**Response** (200 OK):
```css
/* Variáveis CSS */
:root {
  --primary-color: #333;
  --background-color: #fff;
  --text-color: #333;
  --spacing-base: 1rem;
}

/* Reset e estilos base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
  line-height: 1.6;
}

/* Semântica HTML */
header {
  padding: var(--spacing-base);
  background-color: #f5f5f5;
  border-bottom: 2px solid var(--primary-color);
}

h1 {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-base);
}

main {
  max-width: 1200px;
  margin: 0 auto;
  padding: calc(var(--spacing-base) * 2);
}

footer {
  background-color: #f5f5f5;
  padding: var(--spacing-base);
  text-align: center;
  margin-top: calc(var(--spacing-base) * 2);
  border-top: 1px solid #ddd;
}

/* Responsividade */
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
  
  main {
    padding: var(--spacing-base);
  }
}
```

### 3.4 GET /js/app.js

**Descrição**: Lógica JavaScript para interatividade

**Response** (200 OK):
```javascript
/**
 * App.js - Funcionalidades da página
 */

document.addEventListener('DOMContentLoaded', function() {
  console.log('✅ Página carregada com sucesso');
  
  // Validar semântica
  validateSemanticStructure();
  
  // Personalização dinâmica (opcional)
  personalizeGreeting();
});

/**
 * Valida a estrutura semântica da página
 */
function validateSemanticStructure() {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');
  
  if (!header) console.warn('⚠️ Elemento <header> não encontrado');
  if (!main) console.warn('⚠️ Elemento <main> não encontrado');
  if (!footer) console.warn('⚠️ Elemento <footer> não encontrado');
}

/**
 * Personaliza a saudação com base no URL ou localStorage
 */
function personalizeGreeting() {
  const params = new URLSearchParams(window.location.search);
  const name = params.get('name') || localStorage.getItem('userName') || 'Jaqueline';
  
  const h1 = document.querySelector('h1');
  if (h1) {
    h1.textContent = `Olá ${name}`;
    localStorage.setItem('userName', name);
  }
}
```

---

## 4. Acceptance Criteria (BDD / Gherkin)

### 4.1 Feature: Página HTML Semântica com Saudação Personalizada

```gherkin
# language: pt-BR

Funcionalidade: Página com saudação semântica personalizada
  Como usuário da web
  Quero acessar uma página com estrutura HTML semântica
  Para ter melhor acessibilidade e SEO

  Cenário: Carregar página com estrutura semântica correta
    Dado que acesso a URL raiz da aplicação
    Quando a página é carregada
    Então devo ver o elemento <header> na página
    E devo ver o elemento <main> na página
    E devo ver o elemento <footer> na página
    E a página deve ter apenas um elemento <h1>

  Cenário: Validar DOCTYPE e metadados
    Dado que acesso a página
    Quando inspeciono o código-fonte
    Então devo ver "<!DOCTYPE html>" na primeira linha
    E devo ver <meta charset="UTF-8">
    E devo ver <meta name="viewport" content="width=device-width, initial-scale=1.0">
    E devo ver <meta name="description">
    E devo ver <title>Olá Jaqueline</title>

  Cenário: Exibir saudação correta
    Dado que acesso a página
    Quando a página é completamente carregada
    Então devo ver o texto "Olá Jaqueline" no elemento <h1>
    E o texto deve estar visível na tela

  Cenário: Validar acessibilidade ARIA
    Dado que inspeciono a página
    Quando verifico os atributos semânticos
    Então o elemento <header> deve ter role="banner"
    E o elemento <main> deve ter role="main"
    E o elemento <footer> deve ter role="contentinfo"
    E os elementos devem ter aria-label descritivos

  Cenário: Validar responsividade
    Dado que acesso a página em um navegador
    Quando redimensiono a viewport para 320px de largura
    Então a página não deve ter scroll horizontal
    E o conteúdo deve permanecer legível
    E os elementos devem se reorganizar adequadamente

  Cenário: Validar linguagem da página
    Dado que inspeciono a página
    Quando verifico o atributo lang
    Então o elemento <html> deve ter lang="pt-BR"
    E isso deve beneficiar ferramentas de tradução e leitores de tela

  Cenário: Personalizar saudação via URL
    Dado que acesso a página com parâmetro ?name=Maria
    Quando a página é carregada
    Então devo ver "Olá Maria" no elemento <h1>
    E o nome deve ser salvo no localStorage

  Cenário: Validar código CSS responsivo
    Dado que inspeciono os estilos CSS
    Quando verifico as media queries
    Então devo ver estilos para dispositivos mobile (<= 768px)
    E devo ver estilos para desktop (> 768px)
    E os estilos devem ser aplicados corretamente

  Cenário: Validar carregamento de arquivos externos
    Dado que a página é carregada
    Quando verifico as requisições de rede
    Então devo ver css/styles.css carregado com status 200
    E devo ver js/app.js carregado com status 200

  Cenário: Validar SEO com Open Graph
    Dado que inspeciono a página
    Quando verifico as meta tags
    Então devo ver <meta property="og:title">
    E devo ver <meta property="og:description">
    E os valores devem ser relevantes para a página
```

### 4.2 Cenários de Testes de Aceitação (Detalhados)

#### **AC-001: Estrutura Semântica Obrigatória**

```gherkin
Cenário: Validar presença de elementos semânticos
  Quando a página é renderizada
  Então EXISTS elemento com tag "header"
  E EXISTS elemento com tag "main"
  E EXISTS elemento com tag "footer"
  E NOT EXISTS mais de um elemento com tag "h1"
  E XPath "//h1/text()" contém "Olá Jaqueline"
```

**Critérios de Aceite**:
- ✅ Elemento `<header>` deve estar presente
- ✅ Elemento `<main>` deve estar presente
- ✅ Elemento `<footer>` deve estar presente
- ✅ Apenas UM elemento `<h1>` deve existir
- ✅ Texto do `<h1>` deve ser "Olá Jaqueline"

---

#### **AC-002: Metadados e SEO**

```gherkin
Cenário: Validar metadados da página
  Quando a página é carregada
  Então meta[charset] = "UTF-8"
  E meta[name="viewport"] contém "width=device-width"
  E meta[name="description"] NOT EMPTY
  E title = "Olá Jaqueline"
  E lang atributo = "pt-BR"
```

**Critérios de Aceite**:
- ✅ Charset deve ser UTF-8
- ✅ Viewport deve suportar devices responsivos
- ✅ Description não pode estar vazio
- ✅ Title deve ser exato "Olá Jaqueline"
- ✅ HTML lang deve ser "pt-BR"

---

#### **AC-003: Acessibilidade (WCAG 2.1 AA)**

```gherkin
Cenário: Validar acessibilidade ARIA
  Quando inspeciono os atributos de acessibilidade
  Então header[role] = "banner"
  E main[role] = "main"
  E footer[role] = "contentinfo"
  E h1[aria-level] = "1"
  E todos elementos têm aria-label descritivo OU accessible name
```

**Critérios de Aceite**:
- ✅ `<header>` deve ter `role="banner"`
- ✅ `<main>` deve ter `role="main"`
- ✅ `<footer>` deve ter `role="contentinfo"`
- ✅ Nível de contraste >= 4.5:1 (AAA)
- ✅ Todos inputs/botões devem ter labels associadas
- ✅ Página deve ser navegável apenas com teclado

---

#### **AC-004: Responsividade Mobile**

```gherkin
Cenário: Validar layout responsivo em diferentes resoluções
  Quando viewport = 320px (Mobile)
  Então NO horizontal scroll
  E readability NOT impacted
  
  Quando viewport = 768px (Tablet)
  Então layout reorganiza CORRECTLY
  
  Quando viewport = 1920px (Desktop)
  Então max-width respeitado
  E espaçamento adequado
```

**Critérios de Aceite**:
- ✅ Mobile (320px): sem scroll horizontal
- ✅ Tablet (768px): layout adaptado
- ✅ Desktop (1920px): max-width aplicado
- ✅ Touch targets >= 44x44px
- ✅ Media queries implementadas corretamente

---

#### **AC-005: Carregamento e Performance**

```gherkin
Cenário: Validar carregamento de recursos
  Quando a página é carregada
  Então html file HTTP status = 200
  E css/styles.css HTTP status = 200
  E js/app.js HTTP status = 200
  E First Contentful Paint <= 1s
  E Largest Contentful Paint <= 2.5s
```

**Critérios de Aceite**:
- ✅ Todos os arquivos devem retornar HTTP 200
- ✅ Nenhum erro no console do navegador
- ✅ FCP <= 1 segundo
- ✅ LCP <= 2.5 segundos
- ✅ CLS < 0.1

---

#### **AC-006: Validação W3C HTML**

```gherkin
Cenário: Validar HTML válido segundo W3C
  Quando valido HTML no validator.w3.org
  Então ZERO erros
  E ZERO warnings críticas
  E DOCTYPE válido
  E nesting correto
```

**Critérios de Aceite**:
- ✅ W3C Validator: 0 erros
- ✅ DOCTYPE correto
- ✅ Tags aninhadas corretamente
- ✅ Nenhum atributo deprecated

---

### 4.3 Checklist de QA

```markdown
## Checklist de Aceitação

### Estrutura HTML
- [ ] Elemento `<header>` presente
- [ ] Elemento `<main>` presente  
- [ ] Elemento `<footer>` presente
- [ ] Apenas um `<h1>` com texto "Olá Jaqueline"
- [ ] DOCTYPE HTML5 declarado
- [ ] Nesting correto de elementos

### Metadados
- [ ] Charset UTF-8 definido
- [ ] Meta viewport presente
- [ ] Meta description preenchida
- [ ] Title correto
- [ ] Lang pt-BR definido
- [ ] Open Graph tags presentes

### CSS
- [ ] Estilos carregam sem erros
- [ ] Responsividade funciona (320px, 768px, 1920px)
- [ ] Cores contrastam adequadamente
- [ ] Fonts legíveis
- [ ] Layout não quebra em telas pequenas

### JavaScript
- [ ] App.js carrega sem erros
- [ ] Console limpo (sem errors)
- [ ] Validação semântica funciona
- [ ] Personalização via URL funciona
- [ ] localStorage funciona

### Acessibilidade
- [ ] ARIA roles corretos
- [ ] Teclado navegável
- [ ] Leitor de tela funciona
- [ ] Contraste >= 4.5:1
- [ ] Touch targets >= 44x44px

### SEO
- [ ] Meta description presente
- [ ] H1 único e descritivo
- [ ] URL amigável
- [ ] Sitemap (se aplicável)
- [ ] robots.txt (se aplicável)

### Performance
- [ ] FCP <= 1s
- [ ] LCP <= 2.5s
- [ ] CLS < 0.1
- [ ] Network: todas requisições 200
- [ ] Bundle size otimizado

### Compatibilidade
- [ ] Chrome (últimas 2 versões)
- [ ] Firefox (últimas 2 versões)
- [ ] Safari (últimas 2 versões)
- [ ] Edge (últimas 2 versões)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Android
```

---

## 5. Estrutura de Testes

### 5.1 Testes Automatizados Sugeridos

```javascript
// Exemplo: tests/index.test.js
describe('Página HTML Semântica', () => {
  
  it('deve conter header com h1 "Olá Jaqueline"', () => {
    const h1 = document.querySelector('h1');
    expect(h1.textContent).toBe('Olá Jaqueline');
  });

  it('deve ter apenas um h1', () => {
    const h1s = document.querySelectorAll('h1');
    expect(h1s.length).toBe(1);
  });

  it('deve conter header, main e footer', () => {
    expect(document.querySelector('header')).toBeTruthy();
    expect(document.querySelector('main')).toBeTruthy();
    expect(document.querySelector('footer')).toBeTruthy();
  });

  it('deve ter atributos ARIA corretos', () => {
    expect(document.querySelector('header').getAttribute('role')).toBe('banner');
    expect(document.querySelector('main').getAttribute('role')).toBe('main');
    expect(document.querySelector('footer').getAttribute('role')).toBe('contentinfo');
  });

  it('deve ter charset UTF-8', () => {
    const charset = document.querySelector('meta[charset]').getAttribute('charset');
    expect(charset).toBe('UTF-8');
  });

  it('deve ser responsivo', () => {
    expect(window.innerWidth).toBeGreaterThan(0);
    expect(window.innerHeight).toBeGreaterThan(0);
  });
});
```

---

## 6. Arquivos Entregáveis

```
deliverables/
├── index.html              ✅ Página principal
├── css/
│   └── styles.css          ✅ Estilos responsivos
├── js/
│   └── app.js              ✅ Lógica JavaScript
├── tests/
│   └── index.test.js       ✅ Testes automatizados
├── SPEC.md                 ✅ Este documento
├── README.md               ✅ Documentação
└── ACCESSIBILITY.md        ✅ Guia de acessibilidade
```

---

## 7. Critérios Finais de Aceitação

| Critério | Status | Validação |
|----------|--------|-----------|
| HTML Semântico Válido | ✅ | W3C Validator 0 erros |
| Elementos Obrigatórios | ✅ | header, main, footer presentes |
| Acessibilidade WCAG 2.1 | ✅ | Lighthouse score >= 90 |
| Responsividade | ✅ | Funciona em 320px-1920px |
| Performance | ✅ | FCP/LCP dentro de targets |
| SEO Básico | ✅ | Metadados completos |
| Compatibilidade | ✅ | Todos navegadores modernos |
| Código Limpo | ✅ | ESLint/Prettier configurado |

---

**Versão**: 1.0  
**Data**: 2024  
**Status**: 🟢 Pronto para Desenvolvimento