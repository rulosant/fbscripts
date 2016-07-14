

nohay = 0;

// 
function clickvermas(){
    if(nohay > 4){
        document.getElementById('cargando').innerHTML = 'Creando lista, por favor espera...';
        crearlista();
    }else{
        nohay++;
             //selecciona el pager
        a=document.getElementsByClassName('pam uiBoxLightblue uiMorePagerPrimary');
        for(i=0;i<a.length;i++){
            verurl = a[i].href;
            if(verurl && verurl.indexOf('group_members') != -1){
                nohay = 0;
                a[i].click();
            }
        }
        setTimeout(clickvermas, 1000);
    }
}
// Agarra la barra de arriba de “cantidad de miembros” y “filtro”
tophtml = document.getElementsByClassName('pam filterBox hasSelector uiBoxGray topborder')[0];
   console.log('TopHTML');

clickvermas();

tophtml.innerHTML = '<div id="cargando" style="text-align:center; font-weight:bold; font-size:15px">Cargando lista, por favor espera...</div>';
lista = '';
//lista = '<textarea style="width:100%; height:250px" onclick="this.select()">';
//    lista +=  'echo "digraph G {';

var agregadopor;
function crearlista(){
   console.log('CrearLista');
   persona = document.getElementsByClassName('uiProfileBlockContent'); //datos persona
   for(i=0;i<persona.length;i++){  // Encuentra: perfilurl + nombre + agregadopor
             perfilurl = persona[i].getElementsByTagName('a')[0].href.replace('?fref=grp_mmbr_list', '');
            nombre = persona[i].getElementsByTagName('a')[0].innerHTML;
            nombre = nombre.replace(" ","_");
            nombre = nombre.replace(" ","_");
            nombre = nombre.replace(" ","_");
            nombre = nombre.replace("'","");
            nombre = nombre.replace(".","");
            console.log(nombre);
//            console.log(persona[i].innerHTML);

//             membership = persona[i].getElementsByClassName('fsm fwn fcg'); 
             membership = persona[i].innerHTML.split("Agregado(a) por ");
             if (membership.length > 1) {
                 console.log(membership.length);

                 // Desde acá busca quien lo agregó y limpia el texto
                 texto = membership[0].innerHTML;
                 splitagregado = membership[1];
                 if (splitagregado) {
                    splitabbr = splitagregado.split(" <abbr");
                    agregadopor = splitabbr[0]; 
                    agregadopor = agregadopor.replace(" ","_");
                    agregadopor = agregadopor.replace(" ","_");
                    agregadopor = agregadopor.replace(" ","_");
                    agregadopor = agregadopor.replace("'","");
                    agregadopor = agregadopor.replace(".","");
                    console.log('Agregado por: '+agregadopor);
                  } 
             } else {
                   console.log('Else nadie');
                   agregadopor = 'nadie'; 
                  }
//            console.log(perfilurl+','+agregadopor+'\n');

     lista += agregadopor+'->'+nombre+';\n ';  // Borra los parámetros
    }   
    lista +=  ' }" | dot -Tpng >hello.png';

    lista += '</textarea>';
   console.log('Mostrar lista');
    document.getElementsByClassName('fbProfileBrowserListContainer')[0].innerHTML = lista;
    document.getElementById('cargando').innerHTML = 'Lista finalizada, puedes copiarla ahora';
}



