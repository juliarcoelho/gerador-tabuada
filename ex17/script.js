
function tabuada()
{
  let num = document.getElementById('txtnumero');
  let tabuada = document.getElementById('stabuada');
  let aviso = document.getElementById('aviso');
  

  if (num.value.length == 0) {
    aviso.innerHTML = 'digite um número por favor';
  }else{
    let numero = Number(num.value);
    tabuada.innerHTML = '';
    aviso.innerHTML = '';
    for(let contador = 1; contador <= 10; contador++){
      let item = document.createElement('option');
      item.text = `${numero} X ${contador} = ${numero * contador}`;
      item.value = `tab${contador}`;
      tabuada.appendChild(item);
    }
  }
}

//alternativa de mostrar tabuada sem ficar aparecendo o botãozinho em baixo
/*function tabuada()
{
  let num = document.getElementById('txtnumero');
  let aviso = document.getElementById('aviso');
  

  if (num.value.length == 0) {
    aviso.innerHTML = 'digite um número por favor';

  }else{
    let numero = Number(num.value);
    resposta.innerHTML = '';
    aviso.innerHTML = '';
    for(let contador = 1; contador <= 10; contador++){
      
      let tabuada = document.createElement('select');
      tabuada.setAttribute('id', 'stabuada')
      let resposta = document.getElementById('resposta');
      let item = document.createElement('option');
      resposta.appendChild(tabuada.appendChild(item));
      item.text = `${numero} X ${contador} = ${numero * contador}`;
      item.value = `tab${contador}`;
      
    }
  }
}*/


/*
//outra alternativa de mostrar tabuada sem ficar aparecendo o botãozinho em baixo
function tabuada()
{
  let num = document.getElementById('txtnumero');
  let aviso = document.getElementById('aviso');
  

  if (num.value.length == 0) {
    aviso.innerHTML = 'digite um número por favor';
  }else{
    let numero = Number(num.value);
    let resposta = document.getElementById('resposta');
    let tabuada = '';
    aviso.innerHTML = '';
    for(let contador = 1; contador <= 10; contador++){
      tabuada += ` ${numero} x ${contador} = ${numero * contador}<br> `;
      resposta.innerHTML = tabuada;
    }
  }
}*/


