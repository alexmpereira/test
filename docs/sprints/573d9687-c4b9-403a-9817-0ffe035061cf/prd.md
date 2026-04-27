# Página Elegante com Hello World - HTML Semântico

Aqui está a página HTML **semântica e elegante**:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        main {
            text-align: center;
        }

        h1 {
            font-size: 4rem;
            color: #ffffff;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            letter-spacing: 2px;
            font-weight: 700;
            animation: fadeIn 1s ease-in;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    </style>
</head>
<body>
    <main>
        <h1>Hello World</h1>
    </main>
</body>
</html>
```

**Características da página:**
- ✨ Gradiente de fundo moderno (roxo)
- 📱 Responsiva (adapta a todos os tamanhos)
- 🎨 Texto centralizado e elegante
- ⚡ Animação suave de entrada
- 🎯 Tipografia refinada
- **🏷️ HTML Semântico** (uso da tag `<main>` para envolver o conteúdo principal)

**Por que HTML semântico?**
- Melhor acessibilidade (leitores de tela)
- Melhor SEO (mecanismos de busca)
- Código mais legível e profissional
- Melhor estrutura semântica do documento

Basta copiar este código em um arquivo `.html` e abrir no navegador! 🚀