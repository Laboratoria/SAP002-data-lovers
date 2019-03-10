# Leagle of Legends

## Contexto
   
Este projeto foi desenvolvido no Bootcamp da [Laboratoria](https://www.laboratoria.la/). Desafio Data Lovers.

****Problema/meta geral:**** Construir uma página web para visualizar um conjunto (set) de dados que se adeque ao que o usuário necessita. O set de dados escolhido foi uma lista de jogadores em uma liga do jogo League of Legends (LoL).


  
<p  align="center">

  

<img  src='https://media.lolusercontent.com/api/embedly/1/image/resize?url=http%3A%2F%2Forig09.deviantart.net%2F84ec%2Ff%2F2013%2F179%2F7%2F6%2Fspirit_guard_udyr__animated_gif__by_darkstriiker-d6b1ard.gif&key=f0abbd34f14549f3a15cd94dd9970851&width=425'  />

  

</p>

 
Em League of Legends, os jogadores assumem o papel de "invocadores", controlando campeões com habilidades únicas e que lutam com seu time contra outros invocadores ou campeões controlados pelo computador. No modo mais popular do jogo, o objetivo de cada time é destruir o nexus da equipe adversária, uma construção localizada na base e protegida por outras estruturas. Cada partida de League of Legends é distinta, pois os campeões sempre começam fracos e progridem através da acumulação de ouro e da experiência ao longo do jogo (Fonte: [Wikipedia).](https://pt.wikipedia.org/wiki/League_of_Legends)  

# Critérios Obrigatórios:

#### Breve documentação  no README.md
#### Desenho da interface de usuário
#### Protótipo
#### Testes de usabilidade
#### Implementação de Interface de Usuário (HTML/CSS/JS)

1. Mostrar os dados em uma interface: card, tabela ou lista. 
2. Permitir ao usuário filtrar e ordenar os dados.
3. Calcular estatísticas como média aritmética, máximo e/ou mínimo de algum
   atributo numérico, ou contar quantas vezes aparece um determinado valor,
   por exemplo.

## Parte Opcional (Hacker edition)

Features/características extras sugeridas:
* No lugar de consumir os dados de forma estática, trabalhar com
  eles de forma dinâmica, carregando um arquivo JSON por meio de um `fetch`.
* Agregar visualizações gráficas por meio das blibliotecas de gráficos  [Chart.js](https://www.chartjs.org/) ou [Google Charts](https://developers.google.com/chart/).

   
## Etapa 1 - Planejamento

O planejamento foi realizado com auxílio da ferramenta Trello.



## Etapa 2 - Definição do Usuário

Foi realizada uma pesquisa online para conhecer aplicações com informações sobre o League of Legends e a principal referência utilizada foi o site do próprio jogo. [br.leagueoflegends.com](https://br.leagueoflegends.com/pt/)

Após a busca incial foi realizada uma pesquisa com usuários. Conversamos com algumas pessoas que jogam Lol para verificar como a aplicação poderia ser útil. 
  
  

*****_Definição do usuário_*****

  

> _Um jogador novato que queira conhecer informações dos campeões, como seu tipo e forças_

  

********

  


## Etapa 3 - Protótipo

Protótipo elaborado com a ferramenta Marvel: [protótipo](https://marvelapp.com/6ddi6b7/screen/53819908) 

<img  src="protótipo.PNG">  

  

## Etapa 4 - Teste com usuário  



  

## Etapa 5 - Desenvolvimento

#### Considerações técnicas

A lógica do projeto foi implementada completamente em JavaScript (ES6), HTML e CSS com exceção das bibliotecas para fazer gráficos (charts).

#### Equipe

##### Carla Regina Mendes 
##### Jaqueline 

## Etapa 6 - Produto final

Como produto final foi criada uma página web que permite visualizar os dados de todos os campeões em formato de card, filtrá-los por tipo de campeão e ordenar de A-Z e Z-A. Também é possível verificar por meio de gráficos a média de forças do conjunto de jogadores e quantos pertencem a mais de um tipo de campeão.
