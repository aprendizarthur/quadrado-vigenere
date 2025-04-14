function cifrar(mensagem, chave){
        //logs para verificação
        console.log("MENSAGEM ORIGINAL:");
        console.log(mensagem);
        console.log(mensagem.length);

        console.log("CHAVE:");
        console.log(chave);

    //TRATANDO A MENSAGEM----------------------------------------------------------------------------------------------------------------------------------------
        var mensagem = mensagem.toLowerCase().replace(/[áàâãä]/g, "a").replace(/[éèêë]/g, "e").replace(/[íìîï]/g, "i").replace(/[óòôõö]/g, "o").replace(/[úùûü]/g, "u").replace(/[ç]/g, "c").replace(/[\.,;:!?()\[\]{}"']/g, "").replace(/\s+/g, "").replace(/[-]/g, "");
        
        //logs para verificação
        console.log("MENSAGEM TRATADA:");
        console.log(mensagem);
        console.log(mensagem.length);

    //TRANSFORMANDO A MENSAGEM (STRING) NUM ARRAY SEPARANDO LETRA POR LETRA, E ADICIONANDO O VALOR DA CHAVE
        //declaração da variável que vai receber as letras da mensagem original
        var mensagemArray = [];

        //laço para percorrer cada índice da mensagem original
        for(let i = 0; i < mensagem.length; i++){
            //declaração da variável que vai controlar o índice da chave, mantendo o laço sem escapar 
            const indiceChave = i % chave.length;

            //quebrando a mensagem original letra por letra usando push para o novo ARRAY
            mensagemArray.push({
                letra: mensagem[i],                //a letra original            (COLUNA)
                valorChave: chave[indiceChave]     //o valor da chave            (LINHA)
                }
            )
        }

        //logs para verificação
        console.log("MENSAGEM (STRING) CONVERTIDA EM ARRAY:");
        console.log(mensagemArray);
        console.log(mensagemArray.length);
    
    //TRANSFORMANDO A LETRA ORIGINAL NO ÍNDICE DELA NO ALFABETO (COLUNA USADA PARA CIFRAR)
        
    //declaração da variavel que é o alfabeto completo em ordem (referência de índice)
        var alfabeto = "abcdefghijklmnopqrstuvwxyz"

        //laço percorrendo o array das letras
        for(let j = 0; j < mensagemArray.length; j++){
            //laço percorrendo o alfabeto para descobrir o índice da letra
            for(let k = 0; k < alfabeto.length; k++){
                if(mensagemArray[j].letra == alfabeto[k]){
                    mensagemArray[j].letra = k;
                }
            }

        }

    //DECLARANDO "MATRIZ"/QUADRADO DE VIGENÈRE
    var a = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var b = ["b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a"];
    var c = ["c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b"];
    var d = ["d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c"];
    var e = ["e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d"];
    var f = ["f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e"];
    var g = ["g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f"];
    var h = ["h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g"];
    var i = ["i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h"];
    var j = ["j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i"];
    var k = ["k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j"];
    var l = ["l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k"];
    var m = ["m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l"];
    var n = ["n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m"];
    var o = ["o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n"];
    var p = ["p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o"];
    var q = ["q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p"];
    var r = ["r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"];
    var s = ["s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r"];
    var t = ["t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s"];
    var u = ["u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t"];
    var v = ["v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u"];
    var w = ["w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v"];
    var x = ["x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w"];
    var y = ["y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x"];
    var z = ["z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y"];


    //CIFRANDO A MENSAGEM
    
    //declaração da variável que vai receber a mensagem final
    var mensagemFinal = "";
    
    //laço percorrendo a mensagem
    for(let l = 0; l < mensagemArray.length; l++){
        //switch para descobrir que letra é e direcionando para a string(linha) certa da matriz, depois é só adicionar o índice(coluna) para cifrar
        switch (mensagemArray[l].valorChave) {
            case "a":
                mensagemFinal += a[mensagemArray[l].letra];
                break;
            case "b":
                mensagemFinal += b[mensagemArray[l].letra];
                break;
            case "c":
                mensagemFinal += c[mensagemArray[l].letra];
                break;
            case "d":
                mensagemFinal += d[mensagemArray[l].letra];
                break;
            case "e":
                mensagemFinal += e[mensagemArray[l].letra];
                break;
            case "f":
                mensagemFinal += f[mensagemArray[l].letra];
                break;
            case "g":
                mensagemFinal += g[mensagemArray[l].letra];
                break;
            case "h":
                mensagemFinal += h[mensagemArray[l].letra];
                break;
            case "i":
                mensagemFinal += i[mensagemArray[l].letra];
                break;
            case "j":
                mensagemFinal += j[mensagemArray[l].letra];
                break;
            case "k":
                mensagemFinal += k[mensagemArray[l].letra];
                break;
            case "l":
                mensagemFinal += l[mensagemArray[l].letra];
                break;
            case "m":
                mensagemFinal += m[mensagemArray[l].letra];
                break;
            case "n":
                mensagemFinal += n[mensagemArray[l].letra];
                break;
            case "o":
                mensagemFinal += o[mensagemArray[l].letra];
                break;
            case "p":
                mensagemFinal += p[mensagemArray[l].letra];
                break;
            case "q":
                mensagemFinal += q[mensagemArray[l].letra];
                break;
            case "r":
                mensagemFinal += r[mensagemArray[l].letra];
                break;
            case "s":
                mensagemFinal += s[mensagemArray[l].letra];
                break;
            case "t":
                mensagemFinal += t[mensagemArray[l].letra];
                break;
            case "u":
                mensagemFinal += u[mensagemArray[l].letra];
                break;
            case "v":
                mensagemFinal += v[mensagemArray[l].letra];
                break;
            case "w":
                mensagemFinal += w[mensagemArray[l].letra];
                break;
            case "x":
                mensagemFinal += x[mensagemArray[l].letra];
                break;
            case "y":
                mensagemFinal += y[mensagemArray[l].letra];
                break;
            case "z":
                mensagemFinal += z[mensagemArray[l].letra];
                break;
        }
    }

    //logs para verificação
    console.log("MENSAGEM CIFRADA:");
    console.log(mensagemFinal);
    console.log(mensagemFinal.length);
    
    return mensagemFinal
}

//declaração da variavel que recebe a mensagem original
var mensagem = "Nos recantos mais distantes da mente humana, onde os ecos do desconhecido reverberam, repousa a verdade oculta. Somente aqueles que ousam caminhar pela linha tênue entre a razão e a loucura poderão desvelar os segredos guardados nas sombras do tempo. Há um código que liga o passado ao futuro, um elo perdido que aguarda ser encontrado. Quem decifrar o enigma do silêncio, poderá contemplar o abismo da sabedoria sem se perder na vastidão do infinito.";
//declaração da variavel que recebe a CHAVE para o quadrado de vigenère
var chave = "chaveteste";
//declaração da varivael que recebe a mensagem cifrada (função cifrar)
var cifrada = cifrar(mensagem,chave);



