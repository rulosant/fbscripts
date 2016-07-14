

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
tophtml = document.getElementsByClassName('pam uiBoxWhite noborder')[0]; //topborder

clickvermas();

tophtml.innerHTML = '<div id="cargando" style="text-align:center; font-weight:bold; font-size:15px">Cargando lista, por favor espera...</div>';

lista = '<textarea style="width:100%; height:250px" onclick="this.select()">';
    lista +=  'echo "digraph G {';

var agregadopor;
var listanodos;
var listaarcos;
function crearlista(){
   console.log('CrearLista');
   persona = document.getElementsByClassName('_8u _42ef'); //datos persona
   for(i=0;i<persona.length;i++){  // Encuentra: perfilurl + nombre + agregadopor
             perfilurl = persona[i].getElementsByTagName('a')[0].href.replace('?fref=grp_mmbr_list', '');
            nombre = persona[i].getElementsByTagName('a')[0].innerHTML;
            nombre = nombre.replace(" ","_");
            nombre = nombre.replace(" ","_");
            nombre = nombre.replace(" ","_");
            nombre = nombre.replace("'","");
            nombre = nombre.replace(".","");
            console.log(nombre);

             membership = persona[i].getElementsByClassName('fsm fwn fcg'); 
             if (membership.length > 0) {
//                 console.log(membership.length);

                 // Desde acá busca quien lo agregó y limpia el texto
                 texto = membership[0].innerHTML;
                 splitagregado = texto.split("Agregado(a) por ")[1];
                 if (splitagregado) {
                    splitabbr = splitagregado.split(" <abbr");
                    agregadopor = splitabbr[0]; 
                    agregadopor = agregadopor.replace(" ","_");
                    agregadopor = agregadopor.replace(" ","_");
                    agregadopor = agregadopor.replace(" ","_");
                    agregadopor = agregadopor.replace("'","");
                    agregadopor = agregadopor.replace(".","");
                    console.log('Agregado por: '+agregadopor);
                  } else {
                   console.log('Else nadie');
                   agregadopor = 'nadie'; 
                  }
             } 
//            console.log(perfilurl+','+agregadopor+'\n');

     listanodos +='node [color = green] '+ nombre+';\n ';  // Borra los parámetros

     listaarcos += agregadopor+'->'+nombre+';\n ';  // 
    }   
    lista += listanodos;
    lista +='node [color = red] ;\n ';  // Borra los parámetros
    lista += listaarcos;
    lista +=  ' }" | dot -Tpng >hello.png';

    lista += '</textarea>';
    document.getElementsByClassName('profileBrowserGrid fbProfileBrowserListContainer')[0].innerHTML = lista;
    document.getElementById('cargando').innerHTML = 'Lista finalizada, puedes copiarla ahora';
}



