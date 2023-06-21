# Trivia (Quiz game)

Projeto de quiz simples, desenvolvido do zero em HTML5, CSS3 e Javascript. 

## Protótipo

No primeiro dia, desenhamos um [protótipo de baixa fidelidade no Excalidraw](https://excalidraw.com/#room=4fc4be9dae96bca52fa8,1XD_s--8ZEVYqWIdQJ_-Pg), a partir de um esboço rascunhado em papel. A ideia foi idealizar uma aplicação simples e intuitiva, seguindo as orientações propostas na [documentação do projeto](https://github.com/Laboratoria/bootcamp/blob/v6.3.0/projects/00-trivia/README.pt.md).

### Esboço
<img src="/assets/imagens_prototipo/prototipo_esboco.jpeg" width="300" height="300"/>

### Protótipo
<img src="/assets/imagens_prototipo/quizGame.png" width="500" height="500" />


Imaginamos duas versões: com uma e com duas opções de tema, a serem selecionadas pela usuária. Inicialmente, pensamos em informar via [```alert()```]( https://www.devmedia.com.br/alert-em-javascript/37208) quando a opção selecionada estivesse certa ou quando estivesse errada. Porém, acabamos optando por uma solução mais amigável para a experiência.

## Desenvolvimento

Inicialmente, houve a ideia de começarmos pela tela de boas-vindas. Porém, percebemos que este caminho não seria o ideal e entendemos que haveria mais valor na entrega do quiz funcionando em primeiro lugar. 

Implementamos o código adicionando para que fosse informado na tela quando as opções estivessem corretas e quando estivessem erradas.

### Segunda tela

Com o quiz pronto, passamos para a tela de boas-vindas. Desenvolvemos uma tela simples, com input que solicita o nome da usuária e a cumprimenta depois que esta clica no botão ```Enviar```.

Também foi criado o botão ```Jogar```, que navega para a tela do quiz. 

Em seguida, implementamos o botão ```Jogar novamente``` na tela do quiz, que retorna para a página de boas-vindas.

Para fazer a navegação entre telas, utilizamos o [```window.location.href```](https://www.devmedia.com.br/javascript-redirect-redirecionando-o-usuario-com-window-location/39809), do Javascript.

Por fim, estilizamos os botões com as cores presente no logo. Para isso, utilizamos a extensão [Picker de Cores](https://chrome.google.com/webstore/detail/color-picker-for-chrome/clldacgmdnnanihiibdgemajcfkmfhia?hl=pt-PT), para o Chrome. Também modificamos o cursor do mouse, para que se transformasse em uma mão quando passasse por ele.

### Nova tela

Com o projeto quase pronto, modificamos a tela de boas-vindas. Agora, ela inclui dois botões, para que a usuária possa escolher a opção de quiz desejada.

Após explorarmos algumas opções de implementação, e recebermos orientações da mentora, optamos por manter a mesma lógica do código anterior, apenas criando uma página de ```categoria2.html``` para incluir o novo quiz.

Utilizamos as dicas [deste artigo](https://raullesteves.medium.com/github-como-fazer-um-readme-md-bonit%C3%A3o-c85c8f154f8) para a edição da documentação.