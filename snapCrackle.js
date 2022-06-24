/* Escreva uma função chamada snapCrackle que leva um parâmetro denominado: maxValue.
Esta função deve fazer um loop de 1 até maxValue (inclusive) e montar uma string com as seguintes condições para cada número:
1-Se o número for ímpar, no lugar dele, concatenar "Snap" no final da string.
2-Se o número for múltiplo de 5, no lugar dele, concatenar "Crackle" no final da string.
3-Se o número for tanto ímpar quanto múltiplo de 5, no lugar dele, concatenar "SnapCrackle" no final da string.
4-Se número não for nem ímpar e nem múltiplo de 5, concatenar o próprio número no final da string.
5-Seus itens devem ser separados sempre por vírgula e espaço (veja o exemplo).
6-Esta função deve retornar a string obtida
*/

function snapCrackle(maxValue){
    let empty = []
    for( i = 0; i<= maxValue; i++){
        if( i % 2 !== 0){
            empty.push("Snap")}
            else if(i%5 == 0){
                empty.push("Crackle")
            }
            else if(i%5 == 0 && i%2 !== 0){
                empty.push("SnapCrackle")
            }
             else{

            empty.push(i)

             }

}

return empty

}

console.log(snapCrackle(12))


//EXTRA/////////////////////////////////////////////////

function snapCracklePrime (maxValue){
    let empty = []
    let arePrime = (x) => {
        for(let i = 2; i<x; i++){
            if(x%i==0){
                return false
            }
        }

  
        return x>1
    }

    for(let i = 1; i<= maxValue;i++){
        if(i % 2 == 2 && i % 5 == 0 && arePrime(i)){
            empty.push("SnapCracklePrime")
        } else if(i % 2 == 1 && i % 5 == 0){
            empty.push("SnapCrakle")
        }else if(i % 5 == 0){
            empty.push("Crackle")
        }else if( i % 2 == 1 && arePrime(i)){
            empty.push("SnapPrime")
        }else if(i % 2 == 1){
            empty.push("Snap")
        }else if(arePrime(i)){
            empty.push("Prime")
        }else{
            empty.push(i)
        }

    }

    return empty.toString('')

    }

    console.log(snapCracklePrime (15))












