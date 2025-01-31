# Desafio: Estilizando o Portfólio com CSS

Agora que a estrutura HTML do portfólio está pronta, o desafio é aplicar estilos CSS para transformar a página em uma interface visualmente atraente e fiel ao layout do Figma. O foco é na aplicação de cores, tipografia, espaçamentos e efeitos interativos, garantindo um design consistente e responsivo.

Ao concluir o desafio a página deve estar o mais próxima possível do modelo original. Preste atenção aos detalhes visuais e à experiência do usuário.

## Instruções:

### 1. Configuração do Arquivo CSS:
- Crie um arquivo chamado `style.css` na mesma pasta do seu arquivo HTML.
- No HTML, adicione a tag `<link>` no `<head>` para conectar o CSS ao seu documento:
    ```html
    <link rel="stylesheet" href="style.css">
    ```

### 2. Aplicação dos Estilos:

- Cores:
Defina o fundo da página como preto e utilize branco e roxo para os elementos, conforme especificado no Figma.

- Tipografia:
Escolha uma fonte semelhante à usada no design e ajuste tamanhos, pesos e estilos para títulos, parágrafos e botões.

- Espaçamentos:
Aplique margens, paddings e alinhamentos para garantir que os elementos respeitem o layout do Figma.

- Botões:
Estilize os botões com cores, bordas arredondadas e efeitos de transição. Exemplo:
    ```css
    a:hover {
        background-color: #8a2be2;
        transition: background-color 0.3s ease;
    }
    ```

#### Dica Extra:
- Adicione comentários no CSS para organizar e explicar as seções de estilo.

