
class Doctor{

    nombre;
    especialidad;
    edad;
    experiencia;
    
    constructor(nombre,especialidad,edad,experiencia){
    this.nombre=nombre;
    this.especialidad=especialidad;
    this.edad=edad;
    this.experiencia=experiencia;
    }
    
    
    
    }

 class Aportantes{
  
        lista=[];
          constructor(){
          }  
        
        agregar(doctor){
        this.lista.push(doctor);
        }

        filtroEdad(num){
        const l=[]; 
        for(let i=0;i<this.lista.length;i++){

        if(this.lista[i].edad<=num){
            l.push(this.lista[i]);
        }

        }

        return l;

        }

        filtroExperiencia(num){
            const l=[]; 
            for(let i=0;i<this.lista.length;i++){
    
            if(this.lista[i].experiencia==num){
                l.push(this.lista[i]);
            }
    
            }
    
            return l;
    
            }

        filtroEspecialidad(esp){
            const l=[]; 
            for(let i=0;i<this.lista.length;i++){
    
            if(this.lista[i].especialidad==esp||this.lista[i].especialidad.toLowerCase()==esp.toLowerCase()){
                l.push(this.lista[i]);
            }
    
            }
    
            return l;
            }

        filtroNombre(nom){
            //esp=nom.replace(/ /g, "");
             const l=[]; 
            for(let i=0;i<this.lista.length;i++){
        
            if(this.lista[i].nombre.includes(nom)){
                    l.push(this.lista[i]);
            }
        
            }
        
             return l;
         }


        }


const nombrei=document.querySelector("#inombre");
const edadi=document.querySelector("#iedad");
const especi=document.querySelector("#iespecialidad");
const expi=document.querySelector("#iexperiencia");
const resgistrar=document.querySelector("#registrar");
const tabla=document.querySelector("#cuerpotabla");
//seccion consultas
const edadcons=document.querySelector("#edadcons");
const btnedadcons=document.querySelector("#btnedadcons");

const expcons=document.querySelector("#expcons");
const btnexpcons=document.querySelector("#btnexpcons");

const espcons=document.querySelector("#espcons");
const btnespcons=document.querySelector("#btnespcons");

const nomcons=document.querySelector("#nomcons");
const btnnomcons=document.querySelector("#btnnomcons");
const cuerpo_respcons=document.querySelector("#cuerpo_respcons");

function agregarEtiquetas(n,e,es,ex){
    const tr=document.createElement("tr");
    const td=document.createElement("td");
    const td2=document.createElement("td");
    const td3=document.createElement("td");
    const td4=document.createElement("td");

    td.innerText=n;
    td2.innerText=e;
    td3.innerText=es;
    td4.innerText=ex;

    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tabla.appendChild(tr);
}


const aportantes=new Aportantes();


function limpiar(){
    nombrei.value="";
    edadi.value="";
    especi.value="";
    expi.value="";
}


resgistrar.addEventListener("click",function(e){

if(nombrei.value==""||especi.value==""||edadi.value==""||expi.value==""||parseInt(edadi.value)<=0||parseInt(expi.value)<=0){

    window.alert("!Ingrese los datos correctamente!");
}else{
e.preventDefault();
aportantes.agregar(new Doctor(nombrei.value,especi.value,parseInt(edadi.value),parseInt(expi.value)));
console.log(aportantes.lista);
agregarEtiquetas(nombrei.value,parseInt(edadi.value),especi.value,parseInt(expi.value));

limpiar();

}
});


function deleteContent(){
var elemento  = document.getElementById("cuerpo_respcons");
while (elemento.firstChild) {
  elemento.removeChild(elemento.firstChild);
}
}

btnedadcons.addEventListener("click",function(){
deleteContent();
const res=aportantes.filtroEdad(parseInt(edadcons.value));
console.log(res)

for(let i=0;i<res.length;i++){
    const li=document.createElement("li");
    li.innerText=res[i].nombre+"  "+res[i].edad+"  "+res[i].especialidad+"  "+res[i].experiencia;
    //console.log(li);
    cuerpo_respcons.appendChild(li);
}

});

btnexpcons.addEventListener("click",function(e){
    deleteContent();
    const res=aportantes.filtroExperiencia(parseInt(expcons.value));

    for(let i=0;i<res.length;i++){
        const li=document.createElement("li");
        li.innerText=res[i].nombre+"  "+res[i].edad+"  "+res[i].especialidad+"  "+res[i].experiencia;
        //console.log(li);
        cuerpo_respcons.appendChild(li);
    }

});

btnespcons.addEventListener("click",function(e){
    deleteContent();
    const res=aportantes.filtroEspecialidad(espcons.value);

    for(let i=0;i<res.length;i++){
        const li=document.createElement("li");
        li.innerText=res[i].nombre+"  "+res[i].edad+"  "+res[i].especialidad+"  "+res[i].experiencia;
        //console.log(li);
        cuerpo_respcons.appendChild(li);
    } 
});
btnnomcons.addEventListener("click",function(e){
    deleteContent();
    const res=aportantes.filtroNombre(nomcons.value);

    for(let i=0;i<res.length;i++){
        const li=document.createElement("li");
        li.innerText=res[i].nombre+"  "+res[i].edad+"  "+res[i].especialidad+"  "+res[i].experiencia;
        //console.log(li);
        cuerpo_respcons.appendChild(li);
    }   
});







//console.log(aportantes.filtroNombre("javier bueno cabos"));


