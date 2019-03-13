
# Data Lovers

## Preâmbulo

Segundo um [estudo da IBM](https://www-01.ibm.com/common/ssi/cgi-bin/ssialias?htmlfid=WRL12345USEN),
90% dos dados que existem hoje foram criados durante os últimos dois anos.
A cada dia geramos 2,5 trilhões de bytes de dados, uma cifra sem precedentes.
Apesar disso, os dados por sozinhos são de pouca utilidade. Para que essas
grandes quantidades de dados se convertam em **informação** fácil de ler para
os usuários, temos que entendê-los e processá-los. Uma maneira simples
de se fazer isso seria criando _interfaces_ e _visualizações_.
Na seguinte imagem, você pode ver de que forma, com os dados que vemos na parte
esquerda, é possível construir uma interface amigável e legível para o usuário.

![json-interface](https://lh4.googleusercontent.com/Tn-RPXS26pVvOTdUzRT1KVaJ-_QbFs9SpcGLxSPE43fgbHaXtFgMUInuDt7kV41DkT1j8Tt29V0LxQW7SMtC6digOIhfTXSBKdwI08wUwhD3RAqlwy0hjfmhZ2BFe91mtmCSEqysfgk)

Você pode ver os detalhes dos dados neste [link](https://gist.github.com/lalogf/dd4aa3017a9f8aa8f90dfbca382c4dc9#file-student-json)
e a interface construída neste [link](https://app.talento.laboratoria.la/profile/HFOoMpOreBU2psCcjjLg5O2EWEv2).

## Resumo do projeto

Neste projeto **você desenvolverá uma _página web_ para visualizar um
_conjunto (set) de dados_** que se adeque ao que seu usuário necessita.
Fornecemos a vocês uma série de dados de diferentes _temáticas_
para que explore e decida com o que gostaria de trabalhar. Nós elegemos
especificamente estes sets de dados porque acreditamos que se adequem bem a esta
etapa de sua aprendizagem.
Uma vez definida sua área de interesse, entenda quem é seu usuario e o que ele
necessita saber ou ver exatamente; assim já poderá criar uma interface que o
ajude a interagir e entender melhor os dados.
Estes são os dados que propomos:

* [Indicadores de desenvolvimento](src/data/worldbank/worldbank.json):
  Indicadores de desenvolvimento do Banco Mundial de alguns países (Brasil, Chile, México e Peru). Estes dados incluim indicadores
  demográficos, econômicos e comerciais.


### Definição do produto

Documente brevemente seu trabalho no arquivo `README.md` de seu repositório,
nos contando como foi seu processo de desenvolvimento do projeto e como
acredita que seu produto resolve o problema (os problemas) do seu usuário.

##### Processo de definição
Escolhemos como tema o "worldbank" e pensamos em quem seria nossos potenciais usuários,chegamos a conclusão de que seriam professores e estudantes de geografia afim de buscar dados para suas aulas e estudos.


#####Desenvolvimento

Após desenharmos a interface no papel, partimos para colocar a estrutura básica da pagina no html
Com essa estrutura básica, pudemos começar a desenvolver o js de acordo com o fluxo que o usuário deveria seguir para que as informações fossem aparecendo na tela, em um primeiro momento, o usuário acessava a página, encontrava o título, 4 botões com os países disponíveis em nosso banco de dados (Brasil, Chile, México e Peru), ao clicar em um deles, conseguia visualizar os indicadores disponível para a pesquisa.

A seguir, trabalhamos com a exibição dos anos disponóveis para pesquisa após o click no indicador
O desenvolvimento foi feito de forma a disponibilizar apenas as datas que possuíssem valores para consulta, eliminando assim os anos que retornariam vazio

No passo seguinte, trabalhamos com a forma que achamos ser mais fácil e didática de visualizar os dados, um gráfico. Através de um modelo do googlecharts desenvolvemos o nosso gráfico passando as informações requeridas pelo usuario.

Por fim, trabalhamos com os ultimos ajustes no CSS para que a pagina ficasse o mais próxima possivel ao que esperavamos ao desenha-la

A interface de usuário visualizações gráficas foi realizada com  [Google Charts](https://developers.google.com/chart/).


## Considerações técnicas

A lógica do projeto deve estar implementada completamente em JavaScript
(ES6), HTML e CSS. Neste projeto NÃO está permitido usar bibliotecas ou
frameworks, somente [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e), com exceção das
bibliotecas para fazer gráficos (charts).
Você não deve utilizar a _pseudo-variable_ `this`.
O _boilerplate_ contém uma estrutura de arquivos como ponto de partida
assim como toda configuração de dependências:

```text
.
├── README.md
└──src
    ├── data
    │   ├── injuries
    │   │   ├── injuries.js
    │   │   └── injuries.json
    │   ├── lol
    │   │   ├── lol.js
    │   │   └── lol.json
    │   ├── pokemon
    │   │   ├── pokemon.js
    │   │   └── pokemon.json
    │   ├── steam
    │   │   ├── steam.js
    │   │   └── steam.json
    │   └── worldbank
    │       ├── worldbank.js
    │       └── worldbank.json
    ├── index.html
    ├── main.js
    └── style.css

8 directories, 16 files
```

### `src/index.html`

Existe um arquivo `index.html`.  Que agrega o conteúdo a ser aprensentado ao usuário.

### `src/main.js`

Recomendamos usar `src/main.js` para a parte de automação dos dados na tela. 

Dividimos a exibição em gráficos em um arquivo denominado `src/chart.js`

### `src/data`

Nesta pasta estão os dados das diferentes fontes. Você encontrará uma pasta para cada fonte e dentro de cada pasta dois arquivos: um com a extensão `.js` e outro `.json`.


## Checklist

* [ ] Usar VanillaJS.
* [ ] Inclui _Definição de produto_ clara e informativa no `README.md`.
* [ ] Inclui esboço da solução (protótipo de baixa fidelidade e de alta fidelidade, se houver) no
  `README.md`.
* [ ] Inclui a lista de problema detectados através dos testes de usabilidade
  no `README.md`.
* [ ] UI: Mostra lista e/ou tabela com dados e/ou indicadores.
* [ ] UI: Permite ordenar os dados por meio de um ou mais campos
  (asc e desc).
* [ ] UI: Permite filtrar os dados com base em uma condição.