nohay = 0;

// 
function clickvermas(){
    if(nohay > 20){
        document.getElementById('cargando').innerHTML = 'Creando lista, por favor espera...';
        crearlista();
    }else{
        nohay++;
             //selecciona el pager
        a=document.getElementsByClassName('pam uiBoxLightblue uiMorePagerPrimary');
   console.log(a);
   console.log(nohay);


    a[0].click();

        setTimeout(clickvermas, 3000);
    }
}

//clickvermas()

function ocultarcomms(){

    b = document.getElementsByClassName('_4-u2 mbm _5jmm _5pat _5v3q _4-u8'); //div contenedor de compartido
    for(i=0;i<b.length;i++){
        bloquesComentar = b[i].getElementsByClassName('_42nr');
         //console.log(bloquesComentar[0]);
        //console.log(bloquesComentar[0].innerHTML);
        bloquetexto = bloquesComentar[0].innerHTML;
           if (bloquetexto && bloquetexto.indexOf('comment') != -1) {
            //console.log(bloquetexto)
           } else {
            b[i].innerHTML =  '';
//b.removeChild(bloquesComentar[0])
        }

    }
}

clickvermas();

ocultarcomms();
