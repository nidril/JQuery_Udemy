$(document).ready(function(){
    //botao para começar o jogo:
    $("#btn_comecar").click(function(){
        //localizar o jogador:
        var jog1 = $("input[name=jogador1]").val();
        var jog2 = $("input[name=jogador2]").val();

        //verificação se os nomes foram preenchidos:
        if(jog1.trim().length > 0 && jog2.trim().length > 0){
            comecarJogo();
        } else {
            alert("Nome(s) não preenchido(s)");
        }

    });
});

function comecarJogo(){
    var contadorClicks = 0;
    //contar os clicks para definir se X ou O
    //IMPAR=X e PAR=O

    $("table td").click(function(){
        contadorClicks++;

        if(contadorClicks <= 9){
            if(contadorClicks % 2 == 0){
                //se o resto da divisão for 0 o número é PAR
                $(this).text("O");
            } else {
                //se não, ele é IMPAR
                $(this).text("X");
                //a função 'this' retorna o conteúdo da célula clicada
            }

            if(verificarGanhador() == true){
                contadorClicks = 9;
            }
            if(contadorClicks == 9){
                $("#msg").text("Jogo encerrado!");
            }
        }
    });
}

function verificarGanhador(){
    var vencedor = [
        //linhas
        [0,1,2],
        [3,4,5],
        [6,7,8],
        //colunas
        [0,3,6],
        [1,4,7],
        [2,5,8],
        //diagonais
        [0,4,8],
        [6,4,2]
    ];

    var X = new Array(9);
    //X será um novo array de nove posições
    var O = new Array(9);

    //percorrer as tables e verificar o texto:
    $("table td").each(function(key, value){
        //a função 'each' percorre os elementos
        //criamos uma função para verificar quais células tem X ou O
        if($(this).text() == "X"){
            X[key] = key;
        }
        if($(this).text() == "O"){
            O[key] = key;
        }
    });

    //percorrer o array 'vencedor' para ver se ele é igual
    //a algum dos arrays definidos acima
    //esse 'for' irá percorrer as linhas:
    for(var i = 0; i < vencedor.length; i++){
        contadorX = 0;
        contadorO = 0;

        //esse 'for' percorre as colunas das linhas
        for(var y = 0; y < vencedor[i].length; y++){
            if(X[vencedor[i][y]] == vencedor[i][y]){
                contadorX++;
            }
            if(O[vencedor[i][y]] == vencedor[i][y]){
                contadorO++;
            }
            vencedor[i][y]
        }
        if(contadorX == 3){
            alert("X ganhou");
            return true;
        }
        if(contadorO == 3){
            alert("O ganhou");
            return true;
        }
    }
}