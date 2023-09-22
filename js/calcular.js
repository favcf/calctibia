  function calcule() {
    var coin = document.getElementById('coin').value
    var qtdPot = 1000

    mp = (5* coin)/qtdPot
    smp = (9 * coin)/qtdPot
    gmp =( 14* coin)/qtdPot
    ump = (42* coin)/qtdPot

    gsp = (22* coin)/qtdPot
    usp = (42* coin)/qtdPot

    hp = (5* coin)/qtdPot
    shp = (11* coin)/qtdPot
    ghp = (22* coin)/qtdPot
    uhp = (36* coin)/qtdPot
    sshp = (59* coin)/qtdPot

    document.getElementById('hp').innerText = hp
    document.getElementById('shp').innerText = shp
    document.getElementById('ghp').innerText = ghp
    document.getElementById('uhp').innerText = uhp
    document.getElementById('sshp').innerText = sshp
    document.getElementById('mp').innerText = mp
    document.getElementById('smp').innerText = smp
    document.getElementById('gmp').innerText = gmp
    document.getElementById('ump').innerText = ump
    document.getElementById('gsp').innerText = gsp
    document.getElementById('usp').innerText = usp

    //Calculando Waste
    qtdVida = (document.querySelector('#vida').value)
    qtdMana = (document.querySelector('#mana').value)
    qtdSpirit = (document.querySelector('#spirit').value)
    qtdRunas = (document.querySelector('#runas').value)
  
    tipoVida = parseInt(document.querySelector('#tipoVida').value)
    tipoMana = parseInt(document.querySelector('#tipoMana').value)
    tipoSpirit = parseInt(document.querySelector('#tipoSpirit').value)
    tipoRuna = parseInt(document.querySelector('#tipoRuna').value)

    gastoVida = 0
    gastoMana = 0
    gastoSpirit = 0
    gastoRunas = 0

    if( qtdVida != ''){
      if(tipoVida == 1){
        gastoVida = hp * qtdVida
      }
      if(tipoVida == 2){
        gastoVida = shp * qtdVida
      }
      if(tipoVida == 3){
        gastoVida = ghp * qtdVida
      }
      if(tipoVida == 4){
        gastoVida = uhp * qtdVida
      }
      if(tipoVida == 5){
        gastoVida = sshp * qtdVida
      }
    }

    if(qtdMana != ''){
      if(tipoMana == 1){
        gastoMana = mp * qtdMana
      }
      if(tipoMana == 2){
        gastoMana = smp * qtdMana
      }
      if(tipoMana == 3){
        gastoMana = gmp * qtdMana
      }
      if(tipoMana == 4){
        gastoMana = ump * qtdMana
      }
    }

    if(qtdSpirit != ''){
      if(tipoSpirit == 1){
        gastoSpirit = gsp*qtdSpirit
      }
      if(tipoSpirit == 2){
        gastoSpirit = usp * qtdSpirit
      }
    }

    if(qtdRunas != ''){
      if(tipoRuna == 1){
        gastoRunas = qtdRunas * 45
      }
      if(tipoRuna == 2){
        gastoRunas = qtdRunas * 37
      }
    }
   
    document.querySelector('.vida').innerText = gastoVida
    document.querySelector('.mana').innerText = gastoMana
    document.querySelector('.spirit').innerHTML = gastoSpirit
    document.querySelector('.runas').innerHTML = gastoRunas
    document.querySelector('.total').innerHTML = (gastoMana+gastoRunas+gastoSpirit+gastoVida)
}



