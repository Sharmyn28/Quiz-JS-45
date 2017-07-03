
var n1 = prompt("Ingrese el primer numero");
var n2 = prompt("Ingrese el segundo numero");
var n3 = prompt("Ingrese el tercer numero");

n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);

  if(n1 > n2){
    if(n1 > n3){
      if(n2 < n3){
        console.log("Maximo = " + n1 + " Minimo = "+ n2);
      }else{
        console.log("Maximo = " + n1 + " Minimo = "+ n3);
      }
    }else if(n3 > n1){
      console.log("Maximo = " + n3 + " Minimo = "+ n2);
    }
  }else if (n2 > n3) {
    if(n1 < n3){
      console.log("Maximo = " + n2 + " Minimo = "+ n1);
    }else{
      console.log("Maximo = " + n2 + " Minimo = "+ n3);
    }
  }else if(n3 > n2){
    if(n2 > n1){
      console.log("Maximo = " + n3 + " Minimo = "+ n1);
    }
  }




//********EJERCICIO 2
  var arr = [0,1,0,1];

  function iPar (array){
    var res1 = [];
    for(var i in array){
      if((i % 2) == 0){
        res1.push(array[i]);
      }
    }
    return res1;
  }

  var iImpar = function (array){
    var res2 = [];
    for(var i in array){
      if((i % 2) != 0){
        res2.push(array[i]);
      }
    }
    return res2;
  }

  function imprimirResultado(array){
    return "indices Par = " + iPar(array) + "\nIndice Impar = " +iImpar(array);
  }
  console.log(imprimirResultado(arr));



//********EJERCICIO 3
var arrayNum = [1,2,3,4,5];

function invertirNum(cadena){
  return cadena.reverse();
}
console.log(invertirNum(arrayNum));
