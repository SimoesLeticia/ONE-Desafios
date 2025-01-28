## Desafios

### 1. Construindo a estrutura básica do HTML
Sua primeira tarefa é criar um documento HTML básico para um novo projeto. Construa a estrutura essencial do arquivo, incluindo as tags obrigatórias: `<!DOCTYPE html>`, `<html>`, `<head>` e `<body>`. Na seção `<head>`, insira uma tag `<title>` com um título de sua escolha para a página. Lembre-se de usar a indentação correta para manter o código organizado e fácil de entender.

```html
<!DOCTYPE html>
<!-- Declara o tipo de documento como HTML5 -->
<html lang="pt-br">
    <!-- Abre o elemento HTML que encapsula todo o conteúdo da página
     O atributo 'lang="pt-br"' informa ao navegador que o idioma do conteúdo é português do Brasil -->
    <head>
        <!-- Abre a seção do cabeçalho do documento, que inclui metadados como título,
         links para arquivos CSS, scripts, e outros dados não exibidos diretamente na página -->
        <title>Documento</title>
        <!-- Define o título da página -->
    </head>
    <body>
        <!-- Abre o corpo do documento, onde o conteúdo visível da página é colocado -->
    </body>
</html>
<!-- Fecha o elemento HTML -->
```

### 2. Adicionando Conteúdo ao HTML
Com a estrutura básica pronta, adicione um cabeçalho e um parágrafo ao corpo do documento. Use a tag `<h1>` para o cabeçalho e a tag `<p>` para o parágrafo. Escolha um tema para o cabeçalho e escreva um breve texto relacionado a esse tema no parágrafo.

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Documento</title>
    </head>
    <body>
        <h1>Tecnologia e Inovação</h1>
        <!-- Título da página -->
        <p>A tecnologia e a inovação são pilares essenciais no avanço da sociedade contemporânea, moldando uma era marcada pela constante transformação e adaptação. Através do desenvolvimento de novas ferramentas e soluções, a tecnologia tem o poder de reinventar setores inteiros, desde a saúde até a educação, passando pelo entretenimento e o transporte. A inovação, por sua vez, atua como motor desse processo, impulsionando o pensamento criativo e a quebra de paradigmas estabelecidos. Juntas, tecnologia e inovação não apenas facilitam o cotidiano, mas também abrem caminhos para um futuro mais sustentável, eficiente e conectado.</p>
        <!-- Parágrafo explicativo -->
    </body>
</html>
```

### 3. Trabalhando com Meta Tags e Título
Otimize a seção `<head>` da página HTML. Adicione uma meta tag para definir a codificação de caracteres como UTF-8 e atualize o título da página para algo mais descritivo e alinhado ao conteúdo do site.

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <!-- Especifica a codificação de caracteres como UTF-8 -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <!-- Informa ao IE para usar o modo de renderização mais recente -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Configura a viewport para a largura do dispositivo, melhorando a experiência móvel -->
        <title>Tecnologia e Inovação</title>
    </head>
    <body>
        <h1>Tecnologia e Inovação</h1>
        <p>A tecnologia e a inovação são pilares essenciais no avanço da sociedade contemporânea, moldando uma era marcada pela constante transformação e adaptação. Através do desenvolvimento de novas ferramentas e soluções, a tecnologia tem o poder de reinventar setores inteiros, desde a saúde até a educação, passando pelo entretenimento e o transporte. A inovação, por sua vez, atua como motor desse processo, impulsionando o pensamento criativo e a quebra de paradigmas estabelecidos. Juntas, tecnologia e inovação não apenas facilitam o cotidiano, mas também abrem caminhos para um futuro mais sustentável, eficiente e conectado.</p>
    </body>
</html>
```

### 4. Organizando Conteúdo com Tags HTML
Você está criando a página inicial de um site para um projeto pessoal. Adicione um título principal, um subtítulo e um parágrafo explicativo, utilizando as tags HTML apropriadas. Use textos de sua escolha para cada um. Lembre-se de manter a hierarquia correta das tags e verificar o resultado no navegador.

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Estudando Front-End - Página Inicial</title>
    </head>
    <body>
        <h1>Bem-vindo ao Guia de Front-End</h1>
        <!-- Título principal da página -->
        <h2>Introdução ao Desenvolvimento Front-End</h2>
        <!-- Subtítulo da página -->
        <p>Este guia aborda o estudo e desenvolvimento de tecnologias front-end, com tutoriais, exemplos práticos e dicas sobre HTML, CSS e JavaScript para aprimorar a criação de sites e aplicativos.</p>
        <!-- Parágrafo explicativo -->
    </body>
</html>
```

### 5. Adicionando Imagens com Acessibilidade
Adicione uma imagem ao seu site pessoal. Escolha uma imagem (como um logo ou foto relacionada ao tema do site) e insira-a no corpo do documento HTML usando a tag `<img>`. Não se esqueça de incluir o atributo `alt` para descrever a imagem e melhorar a acessibilidade.

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Estudando Front-End - Página Inicial</title>
    </head>
    <body>
        <h1>Bem-vindo ao Guia de Front-End</h1>
        <!-- Título principal da página -->
        <h2>Introdução ao Desenvolvimento Front-End</h2>
        <!-- Subtítulo da página -->
        <p>Este guia aborda o estudo e desenvolvimento de tecnologias front-end, com tutoriais, exemplos práticos e dicas sobre HTML, CSS e JavaScript para aprimorar a criação de sites e aplicativos.</p>
        <!-- Parágrafo explicativo -->
        <figure>
            <img src="./assets/web-development.png" alt="Ilustração de uma pessoa programando" />
            <figcaption>
                <small>Illustration by <a href="https://icons8.com/illustrations/author/ARh4OKrFtdfC">Pixeltrue Ouch!</a></small>
            </figcaption>
        </figure>
        <!-- Adiciona uma imagem com acessibilidade -->
    </body>
</html>
```

### 6. Listando Itens em HTML
Adicione uma lista de itens ao seu site, como características do projeto, etapas de desenvolvimento ou qualquer outra informação relevante. Use a tag `<ul>` para uma lista não ordenada ou `<ol>` para uma lista ordenada, e `<li>` para cada item.

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Estudando Front-End - Página Inicial</title>
    </head>
    <body>
        <h1>Bem-vindo ao Guia de Front-End</h1>
        <!-- Título principal da página -->
        <h2>Introdução ao Desenvolvimento Front-End</h2>
        <!-- Subtítulo da página -->
        <p>Este guia aborda o estudo e desenvolvimento de tecnologias front-end, com tutoriais, exemplos práticos e dicas sobre HTML, CSS e JavaScript para aprimorar a criação de sites e aplicativos.</p>
        <!-- Parágrafo explicativo -->
        <ul>
            <li>Fundamentos do HTML</li>
            <li>Estilos com CSS</li>
            <li>Interatividade com JavaScript</li>
            <li>Boas práticas e acessibilidade</li>
        </ul>
        <!-- Lista de tópicos abordados no guia -->
        <figure>
            <img src="./assets/web-development.png" alt="Ilustração de uma pessoa programando" />
            <figcaption>
                <small>Illustration by <a href="https://icons8.com/illustrations/author/ARh4OKrFtdfC">Pixeltrue Ouch!</a></small>
            </figcaption>
        </figure>
        <!-- Adiciona uma imagem com acessibilidade -->
    </body>
</html>
```
#### Observação: Para visualizar a página final, clique [aqui](./assets/pagina-exemplo.png).

### 7. Explorando o Impacto do DOCTYPE no HTML
Crie um arquivo HTML com a estrutura básica, incluindo a declaração `<!DOCTYPE html>`. Visualize a página no navegador e, em seguida, remova a declaração `<!DOCTYPE html>`. Compare o comportamento da página nos dois casos utilizando a ferramenta de inspeção do navegador. Observe as diferenças entre o _Modo Padrão_ e o _Modo Quirks_, e explique como a ausência do DOCTYPE pode afetar o modo de renderização da página.

> Visualmente, ao remover o `<!DOCTYPE html>`, não houveram mudanças na página. No entanto, ao inspecionar o código no navegador, uma mensagem no console indicou que o modo de renderização mudou para _Modo Quirks_. Esse modo é ativado quando o navegador não encontra ou identifica uma declaração de tipo de documento desatualizada, utilizando comportamentos antigos para garantir a exibição correta das páginas. No _Modo Padrão_, ao usar o `<!DOCTYPE html>`, o navegador segue as regras modernas de HTML, CSS e JavaScript, o que garante uma renderização mais consistente e sem surpresas. A diferença está na forma como o navegador interpreta o código e exibe o conteúdo, com o Modo Quirks podendo causar algumas falhas de renderização.