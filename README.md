# Portfolio Jhoiti Kagawa

Site portfolio moderno, animado e responsivo para apresentar apps Android/iOS, habilidades tecnicas e experiencia profissional.

Projeto 100% estatico (HTML + CSS + JavaScript), sem build step e pronto para publicar em qualquer hosting.

## Visao Geral

Este site foi desenhado para causar impacto visual logo na entrada, com foco em:

- Presenca visual premium (glassmorphism, aurora, gradientes, glow e animacoes suaves)
- Destaque dos apps com icones e screenshots oficiais das lojas
- Prova social com comentarios positivos reais
- Performance e simplicidade operacional

## Funcionalidades Principais

- Hero com typing effect dinamico
- Particulas animadas em canvas no background
- Glow que segue o cursor (desktop)
- Barra de progresso de scroll
- Navbar fixa com estado ativo por secao
- Carrossel infinito de tecnologias
- Cards com efeito 3D tilt e spotlight
- Showcase de 3 apps (2 Android + 1 iOS)
- Carrossel continuo de avaliacoes
- Contadores animados no topo
- Layout responsivo para mobile/tablet/desktop
- Suporte a `prefers-reduced-motion` para acessibilidade

## Estrutura do Projeto

```text
web-page/
├── index.html                         # Estrutura da pagina e conteudo
├── styles.css                         # Tema, layout, animacoes e responsividade
├── script.js                          # Interacoes e efeitos dinamicos
├── app-ads.txt                        # Verificacao AdMob (raiz do dominio)
├── googlea372c14b8981afe2.html        # Verificacao Google Search Console
├── README.md                          # Documentacao
├── .gitignore
└── assets/
    ├── foto.jpg                       # Foto de perfil usada no hero
    ├── pagina1.png                    # Asset legado (nao usado na versao atual)
    ├── pagina2.png                    # Asset legado (nao usado na versao atual)
    └── pagina3.png                    # Asset legado (nao usado na versao atual)
```

## Como Rodar Localmente

Como o projeto e estatico, voce pode abrir direto no navegador.

Opcao 1 (simples):

1. Abra `index.html` no navegador.

Opcao 2 (recomendado para desenvolvimento):

1. Rode um servidor local (exemplo com Python):

```bash
cd web-page
python3 -m http.server 8080
```

2. Acesse:

```text
http://localhost:8080
```

## Como Publicar

Observacao importante: este repositorio nao possui configuracao dedicada de plataforma (`vercel.json`, `netlify.toml` ou pipeline). As opcoes abaixo sao apenas alternativas de hospedagem para um site estatico.

### GitHub Pages

1. Suba o projeto para um repositorio.
2. Em Settings > Pages, selecione a branch principal e a raiz (`/`).
3. Aguarde a publicacao e acesse a URL gerada.

### Vercel

```bash
npm i -g vercel
vercel
```

Se voce nao usa Vercel, pode ignorar esta secao sem impacto no projeto.

### Netlify

1. New site from Git
2. Selecione o repositorio
3. Deploy

Se voce nao usa Netlify, pode ignorar esta secao sem impacto no projeto.

## App-ads.txt (AdMob)

Arquivo atual:

```text
google.com, pub-9322219809481726, DIRECT, f08c47fec0942fa0
```

Regra critica: o arquivo precisa estar exatamente na raiz do dominio.

- Correto: `https://seu-dominio.com/app-ads.txt`
- Incorreto: `https://seu-dominio.com/pasta/app-ads.txt`

## Mapeamento Tecnico dos Arquivos

### `index.html`

Contem:

- Estrutura de secoes (`home`, `about`, `apps`, `reviews`, `experience`, `contact`)
- Cards dos 3 apps com links para Play Store e App Store
- Comentarios positivos destacados
- Blocos semanticos para animacoes (`reveal`, `tilt`, `stat-number`, etc.)

### `styles.css`

Contem:

- Variaveis de tema em `:root`
- Sistema visual completo (background FX, glow, gradientes, glass)
- Animacoes (`drift`, `shine`, `pulse`, `floaty`, etc.)
- Layout responsivo com breakpoints para mobile e tablet
- Ajustes de acessibilidade para reduzir movimento

### `script.js`

Contem:

- Particulas em canvas
- Typing effect do subtitulo do hero
- Scroll progress + comportamento da navbar
- Menu hamburger mobile
- Intersection Observer para reveal
- Contadores animados das estatisticas
- Cursor glow (apenas pointer fino)
- Efeito 3D tilt nos cards de skills
- Duplicacao dos cards de review para loop infinito
- Highlight automatico do link ativo no menu

## Fontes de Dados dos Apps

- Os icones e screenshots dos apps Android sao carregados por URLs oficiais da Play Store.
- O icone do app iOS e carregado por URL oficial da App Store.
- As frases de avaliacoes destacadas foram baseadas em comentarios positivos publicos nas lojas.

## Personalizacao Rapida

### 1) Alterar paleta e identidade visual

Edite as variaveis em `styles.css`:

```css
:root {
    --primary: #6366f1;
    --secondary: #a855f7;
    --accent: #22d3ee;
    --pink: #ec4899;
}
```

### 2) Alterar textos e secoes

Edite `index.html` (titulos, descricoes, links e CTAs).

### 3) Alterar comportamento dos efeitos

Edite `script.js`:

- quantidade de particulas (`COUNT`)
- velocidade/intervalo do typing effect
- thresholds de animacao por scroll

## Manutencao Recomendada

- Revisar periodicamente notas e contagem de avaliacoes dos apps
- Verificar se URLs remotas de imagens continuam validas
- Atualizar links sociais e de lojas quando necessario
- Testar em mobile apos qualquer ajuste de layout

## Troubleshooting

### Imagens de loja nao carregam

- Verifique conexao com internet
- Confirme se as URLs externas ainda estao ativas
- Se quiser estabilidade total, baixe os assets e hospede localmente em `assets/`

### Animacoes pesadas em dispositivo antigo

- Reduza `COUNT` de particulas em `script.js`
- Simplifique sombras e blur no `styles.css`
- Mantenha `prefers-reduced-motion` habilitado

### app-ads.txt nao reconhecido no AdMob

- Confirme que o arquivo esta na raiz publica
- Acesse a URL diretamente no navegador e valide retorno 200
- Aguarde o tempo de propagacao do AdMob

## Roadmap Sugerido

- Adicionar analytics (GA4 ou Plausible)
- Adicionar selecao de idioma (PT/EN)
- Migrar screenshots remotos para assets locais otimizados
- Incluir secao de cases tecnicos (Cloud/FinOps)

## Licenca

Uso livre para fins pessoais e comerciais.

Se for redistribuir, mantenha os creditos autorais e ajuste os dados pessoais/links para o seu contexto.
