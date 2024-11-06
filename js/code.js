
const categorias = [
  "Construção civil",
  "Jardinagem"
]

const produtos = {
  "Construção civil" : [
    "Compactador de solo",
    "Serra Clipper",
    "Placa vibratória",
    "Vibrador de Concreto",
    "Betoneira",
    "Geradores",
    "Martelete rompedor",
    "Serra policorte",
    "Compressor de ar",
    "Airless",
    "Serra circular",
    "Serra marmore",
    "Serra tico-tico",
    "Esmerilhadeira",
    "Solda eletrica",
    "Furadeiras",
    "Perfurador de solo",
    "Tupia",
    "Guincho de coluna",
    "Lixadeiras"
  ],
  "Jardinagem" : [
    "Roçadeira",
    "Soprador",
    "Motopoda",
    "Motosserra",
    "Perfurador de solo"
  ]
}

const listaDescProdutos = {

  "Compactador de solo" : [
     "O que é um Compactador de Solo? Máquina que trabalha em movimento constante de impacto e são especialmente projetados para compactar solos soltos e cascalhos, para evitar sedimentação e prover uma base firme e sólida para a colocação de alicerces, funções e outras estruturas.", "compactador.webp"
  ],
  "Serra Clipper" : [
    "A serra Clipper a gasolina é uma ferramenta utilizada para cortar materiais duros e resistentes, como concreto e asfalto, em projetos de construção, manutenção e reforma: É ideal para cortar pisos industriais de concreto ou asfalto", "serraClipper.jpg"
  ],
  "Placa vibratória" : [
    "A placa vibratória a gasolina é um equipamento de construção civil que serve para compactar solos, asfalto, concreto e outros materiais. Ela é utilizada em diversas atividades, como: Recapeamento asfáltico; Assentamento de pisos intertravados", "Placa vibratoria.jpg"
  ],
  "Vibrador de Concreto":[
    "O vibrador de concreto serve para: Adensar o concreto, evitando a formação de bolhas de ar; Melhorar a resistência do concreto; Garantir a impermeabilidade do concreto; Aumentar a durabilidade do concreto; Compactar o concreto de forma mais eficiente do que métodos manuais; Economizar tempo na construção", 'Vibrador.jpg'
  ],
  "Betoneira":[
    "A betoneira é uma máquina essencial na construção civil, utilizada para misturar os materiais que compõem o concreto, como areia, cimento, água e pedra britada", 'Betoneira.webp'
  ],
  "Geradores":[
    "É usado para fornecer energia quando não há uma fonte ou quando é necessária energia extra em um local.", 'gerador.jpg'
  ],
  "Martelete rompedor":[
    "É uma ferramenta de percussão que serve para quebrar e demolir materiais resistentes, como concreto, pedra, alvenaria, cerâmica, reboco, entre outros.", 'rompedor.webp'
  ],
  "Serra policorte":[
    "A serra policorte de bancada é uma ferramenta elétrica que serve para cortar materiais rígidos e resistentes, como aço, alumínio, ferro e perfilados, de forma rápida e precisa. É amplamente utilizada na indústria de construção e metalurgia", 'Policorte.jpg'
  ],
  "Roçadeira":[
    "A roçadeira é uma ferramenta utilizada para a limpeza e manutenção de áreas com grama, ervas daninhas, pequenos arbustos e pastos. É um equipamento versátil, que pode ser usado em diferentes atividades, como: Jardinagem, Paisagismo, Agricultura, Manutenção de rodovias, Limpeza de parques.", 'roçadeira.webp'
  ],
  "Soprador":[
    "O soprador de folhas é uma máquina de jardinagem que serve para remover folhas, grama, aparas de poda e outros resíduos. Ele é muito útil para a limpeza de áreas verdes, como jardins, parques, praças e campos de futebol.", 'soprador.webp'
  ],
  "Motopoda":[
    "A motopoda é utilizada para: Limpar plantas lenhosas e arbustos altos", 'motopoda.jpg'
  ],
  "Motosserra":[
    "A motosserra é uma ferramenta que serve para cortar e podar árvores, transformar toras em lenha, e processar madeira. É utilizada em diversos contextos, como: Jardinagem; Florestal; Agropecuário; Construções rurais; Reformas", 'motoserra.webp'
  ],
  "Compressor de ar": [
    "O equipamento produz ar comprimido, oferecendo uma fonte contínua de ar, que auxilia no funcionamento das ferramentas pneumáticas, como furadeiras, chaves de impacto, retificadeiras, lixadeiras, cortadores, grampeadores, pistolas para pintura, entre outros", 'compressor.jpg'
  ],
  "Airless":[
    "Airless, também conhecida como pistola sem ar, é um equipamento de pintura que pulveriza tinta em alta pressão, sem a necessidade de ar comprimido. É utilizada para aplicar tinta em superfícies internas e externas, como muros, paredes, fachadas, pisos e objetos decorativos.", 'airless.webp'
  ],
  "Serra circular": [
    "É uma ferramenta que serve para cortar materiais de forma precisa e estável, como madeira", 'serra-circular-de-bancada.webp'
  ],
  "Serra marmore": [
    "É uma ferramenta utilizada para cortar materiais resistentes, como mármore, granito, concreto, ferro, quartzito, tijolo, cerâmica, telha e pedras. É muito utilizada em obras, principalmente por profissionais da construção civil.", 'serra marmore.jpg'
  ],
  "Serra tico-tico": [
    "é uma ferramenta elétrica que serve para cortar e fazer curvas em diversos materiais, como madeira, plástico, metais não ferrosos e azulejos. É muito utilizada em trabalhos de marcenaria, carpintaria e construção civil.", 'serra tico tico.webp'
  ],
  "Esmerilhadeira": [
    "Uma ferramenta elétrica que serve para cortar, lixar, polir e fazer acabamentos em peças de aço, estruturas metálicas e outros materiais", 'esmerilhadeira.png'
  ],
  "Solda eletrica": [
    "A solda elétrica é um método de união de peças metálicas que é utilizado em diversos processos industriais de reparo, revestimento e união", 'maquina-de-solda-inversora.webp'
  ],
  "Furadeiras": [
    "A furadeira é responsável por fazer furos em superfícies de metal, madeira, alvenaria e até mesmo concreto", 'furadeira.webp'
  ],
  "Perfurador de solo": [
    "O perfurador de solo é um equipamento que serve para perfurar o solo em diferentes tipos de atividades, como construção civil, agricultura, paisagismo e pecuária", 'perfurador de solo.webp'
  ],
  "Tupia": [
    "A tupia é uma ferramenta elétrica que serve para moldar, fresar, entalhar e dar acabamento a diversos materiais, como madeira, plástico e metal", 'tupia.webp'
  ],
  "Guincho de coluna": [
    "O guincho de coluna é um equipamento usado para transportar e elevar cargas em obras de construção civil.", 'guincho.webp'
  ],
  "Lixadeiras": [
    "A lixadeira é uma ferramenta elétrica que serve para alisar, nivelar e preparar superfícies, removendo camadas de materiais como plástico e áreas pintadas.", 'lixadeira parede.webp'
  ]

}

const listaCategorias = document.getElementById("categoriasLista")

const produtosContainer = document.getElementById("produtosContainer")

categorias.forEach(categoria => {
  let categoriaId = categoria.replace(' ', '')
  let a = document.createElement('a')
  a.target = "_self"
  a.href = `#${categoriaId}`
  a.classList.add('categoria')
  a.innerText = categoria
  listaCategorias.appendChild(a)

  
  let containerProdutos = criarCategoria(categoria)
  

  produtos[categoria].forEach(produto => {
    containerProdutos.appendChild(criarProduto(produto))
  });

});


function criarCategoria(categoria){


  let idCategoria = categoria.replace(' ', '')


  let produtoDivisoria = document.createElement('div')
  produtoDivisoria.classList.add('produtoDivisoria')


  let h3 = document.createElement('h3')
  h3.classList.add('categoriaNome')
  h3.id = idCategoria
  h3.innerText = categoria

  produtoDivisoria.appendChild(h3)

  
  let listagemProdutos = document.createElement('div')
  listagemProdutos.classList.add('listagemProdutos')

  produtoDivisoria.appendChild(listagemProdutos)

  produtosContainer.appendChild(produtoDivisoria)

  return listagemProdutos

}

function criarProduto(produto){

  let produtoContainer = document.createElement('div')

  produtoContainer.classList.add('produto')


  let produtoImagem = document.createElement('img')
  produtoImagem.classList.add('produtoImagem')

  if(listaDescProdutos[produto][1] != null){
    produtoImagem.src = `../img/produtos/${listaDescProdutos[produto][1]}`;
    // produtoImagem.style.backgroundImage = `url('../img/produtos/${listaDescProdutos[produto][1]}')`;
  }

  produtoContainer.appendChild(produtoImagem)

  let produtoConteudo = document.createElement('div')
  produtoConteudo.classList.add('produtoConteudo')


  let h4 = document.createElement('h4')
  h4.innerText = produto

  produtoConteudo.appendChild(h4)
  
  let descProduto = document.createElement('p')
  descProduto.classList.add('descricaoProduto')
  
  descProduto.innerText = listaDescProdutos[produto][0]


  produtoConteudo.appendChild(descProduto)

  let descCompleta = document.createElement('p')

  descCompleta.classList.add('descricaoCompleta')

  descCompleta.innerText = 'BBBBBBBBBBBBBBBBBBBBBBBBBBB'

  produtoConteudo.appendChild(descCompleta)



  produtoContainer.appendChild(produtoConteudo)

  return produtoContainer

  

}