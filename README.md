# Portfólio de Desenvolvedor Flutter - Jhoiti Kagawa

Um site moderno e responsivo para apresentar seus aplicativos Flutter, incluindo suporte para verificação do AdMob.

## 📁 Estrutura de Arquivos

```
web-page/
├── index.html          # Página principal (HTML)
├── styles.css          # Estilos (CSS)
├── script.js           # Interatividade (JavaScript)
├── app-ads.txt         # Arquivo de verificação AdMob
├── README.md           # Este arquivo
└── .gitignore          # Arquivos a ignorar no Git
```

## 🚀 Recursos

- ✨ Design moderno e responsivo
- 🎨 Gradientes animados e efeitos visual
- 📱 Totalmente responsivo para mobile
- ⚡ Performance otimizada
- 🔗 Links para LinkedIn, Play Store e GitHub
- 📊 Seção de habilidades com progresso visual
- 🎯 App showcase com estatísticas
- 📋 Arquivo app-ads.txt para AdMob

## 📋 O Que Está Incluído

### index.html
- Navegação sticky responsiva
- Hero section com call-to-action
- Seção "Sobre" com habilidades
- Showcase de aplicativos
- Seção de contato com links sociais
- Footer

### styles.css
- Design em glassmorphism
- Gradientes modenos (Indigo → Purple → Pink)
- Animações suaves
- Responsividade completa
- Modo escuro

### script.js
- Menu hamburger para mobile
- Scroll suave
- Observador de intersecção para animações
- Geração de estrelas de fundo
- Animações de skill bars
- Ativa links de navegação baseado em scroll

### app-ads.txt
- Arquivo pré-configurado com seu ID do AdMob
- Pronto para ser publicado

## 🌐 Como Subir no GitHub

### 1. Criar um repositório
```bash
# Acesse https://github.com/new
# Crie um repositório chamado "developer-portfolio"
```

### 2. Clonar e configurar localmente
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/developer-portfolio.git

# Entre na pasta
cd developer-portfolio

# Inicialize o Git (se não tiver clonado)
git init
```

### 3. Adicionar seus arquivos
```bash
# Copie os arquivos (index.html, styles.css, script.js, app-ads.txt) para a pasta do repositório

# Adicione todos os arquivos
git add .

# Faça um commit
git commit -m "Initial commit: Portfolio website"

# Envie para o GitHub
git push -u origin main
```

### 4. Ativar GitHub Pages
- Vá para **Settings** do seu repositório
- Procure por **Pages** no menu lateral
- Em **Source**, selecione `main branch`
- A página estará disponível em: `https://seu-usuario.github.io/developer-portfolio/`

## 🌍 Como Subir em um Domínio Próprio

### Opção 1: Usando Vercel (Recomendado - Grátis)
```bash
# 1. Instale Vercel CLI
npm install -g vercel

# 2. Execute na pasta do projeto
vercel

# 3. Siga as instruções
# 4. Seu site estará em uma URL Vercel

# 5. Para conectar um domínio:
# - Vá para https://vercel.com
# - Selecione seu projeto
# - Vá para Settings > Domains
# - Adicione seu domínio
```

### Opção 2: Usando Netlify (Grátis)
```bash
# 1. Faça login em netlify.com
# 2. Clique em "New site from Git"
# 3. Selecione seu repositório GitHub
# 4. Clique Deploy
# 5. Para domínio próprio, vá em Settings > Domain Management
```

### Opção 3: Servidor Web Tradicional
Se você tem um servidor ou hosting:

#### Via FTP
1. Abra um cliente FTP (FileZilla, WinSCP)
2. Conecte-se ao seu hosting
3. Copie todos os arquivos para a pasta `public_html` ou `www`
4. Pronto! Seu site estará no ar

#### Via SSH
```bash
# 1. Conecte-se ao servidor
ssh seu-usuario@seu-dominio.com

# 2. Navegue até a pasta web
cd /home/seu-usuario/public_html

# 3. Clone seu repositório GitHub
git clone https://github.com/seu-usuario/developer-portfolio.git .

# 4. Seu site estará pronto!
```

## 📌 App-ads.txt - Verificação AdMob

O arquivo `app-ads.txt` já está configurado com seu ID do AdMob:
```
google.com, pub-9322219809481726, DIRECT, f08c47fec0942fa0
```

**Importante:** Este arquivo DEVE estar na raiz do seu domínio:
- ✅ Correto: `seu-dominio.com/app-ads.txt`
- ❌ Incorreto: `seu-dominio.com/pasta/app-ads.txt`

### Passos para verificação no AdMob:
1. Acesse [AdMob](https://admob.google.com)
2. Vá para **Apps** e selecione seu app
3. Acesse **App settings**
4. Procure por **App-ads.txt**
5. Verifique se o arquivo está acessível
6. Clique em **Verify** e aguarde a verificação

## 🎨 Personalizações

### Mudar cores
Edite em `styles.css`:
```css
:root {
    --primary: #6366f1;        /* Cor primária */
    --secondary: #8b5cf6;      /* Cor secundária */
    --accent: #ec4899;         /* Cor de destaque */
}
```

### Atualizar informações
Edite em `index.html`:
- Nome do desenvolvedor
- Links de redes sociais
- Aplicativos (nome, descrição, link)
- Email de contato

### Adicionar mais aplicativos
No `index.html`, na seção `<!-- Apps Section -->`, copie o bloco `.app-card` e adapte.

## 📱 Responsividade

O site é totalmente responsivo para:
- 📱 Dispositivos móveis (320px+)
- 📱 Tablets (768px+)
- 🖥️ Desktops (1024px+)

## 🔗 Links Importantes

- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com/)
- [AdMob Help](https://support.google.com/admob)
- [App-ads.txt Specification](https://iabtechlab.com/ads-txt/)

## 📝 Próximos Passos

1. ✅ Personalize `index.html` com suas informações
2. ✅ Suba para GitHub
3. ✅ Escolha uma opção de hosting (Vercel, Netlify ou servidor próprio)
4. ✅ Configure seu domínio
5. ✅ Verifique o `app-ads.txt` no AdMob
6. ✅ Atualize o link do desenvolvedor na Google Play

## 🆘 Troubleshooting

### Arquivo app-ads.txt não encontrado
- Certifique-se de que está na raiz do domínio
- Verifique permissões de acesso (chmod 644)
- Limpe o cache do navegador

### Imagens não carregam
- Todas as imagens são ícones de fonte (Font Awesome)
- Se não aparecerem, verifique conexão com CDN

### Site lento
- Comprima imagens (se adicionar)
- Minifique CSS e JavaScript em produção
- Use CDN para arquivos estáticos

## 📄 Licença

Este projeto é livre para uso pessoal e comercial.

---

**Criado com ❤️ para sua presença digital**
