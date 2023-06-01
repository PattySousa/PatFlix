var listaFilmes = [ 
   'https://upload.wikimedia.org/wikipedia/pt/b/bb/Supernatural_temporada_15_poster.jpg',
'https://tecmasters.com.br/wp-content/uploads/2022/09/pt-BR_wed1_main_rain_vertical_27x40_rgb_pre_1-691x1024.jpg', 
'https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Lockwood_and_Co_poster.jpg/250px-Lockwood_and_Co_poster.jpg',
'https://upload.wikimedia.org/wikipedia/en/7/78/Stranger_Things_season_4.jpg',
'https://m.media-amazon.com/images/I/51yFKz2jWPL._AC_SY445_.jpg',
'https://upload.wikimedia.org/wikipedia/pt/thumb/a/af/Ocean%27s_Eleven_Poster.jpg/200px-Ocean%27s_Eleven_Poster.jpg',
 'https://upload.wikimedia.org/wikipedia/pt/e/e6/Enola_Holmes_poster.jpeg',
'https://upload.wikimedia.org/wikipedia/pt/thumb/b/b7/Fantastic_Beasts_The_Secrets_of_Dumbledore_poster_IMP.jpg/250px-Fantastic_Beasts_The_Secrets_of_Dumbledore_poster_IMP.jpg',
,
]
                  

listaFilmes.push('https://upload.wikimedia.org/wikipedia/pt/e/e6/Enola_Holmes_poster.jpeg');

var nomeFilmes = ['Supernatural', 'Wandinha', 'Lockwood & CO', 'Stranger Things', 'Jack Ryan', 'Onze homens e um segredo', 'Enola Holmes', 'Os segredos de Dumbledore', ];

document.write('<div class="container_todosFilmes">')

var i = 0;
while(i < listaFilmes.length){
    if((listaFilmes[i].endsWith('jpg')) ||(listaFilmes[i].endsWith('jpeg'))){
        document.write('<div class="container_filme">')
        document.write('<img src='+ listaFilmes[i] +'>');
        document.write('<p>'+ nomeFilmes[i] +'</p>'); 
        document.write('</div>')
    }else{
        document.write('<p> A imagem ' + i + ' não é do tipo jpeg ou jpg </p>');
    }
    i++;
}
document.write('</div>')
