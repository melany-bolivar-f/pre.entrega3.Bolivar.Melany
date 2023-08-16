const Alumnos =function(nombre, nota1, nota2, nota3,promedio){
    this.nombre= nombre,
    this.nota1= nota1,
    this.nota2= nota2,
    this.nota3= nota3,
    this.promedio=(nota1 + nota2 + nota3)/3
    alert("el promedio de "+ nombre + " es "+ promedio)
}

let lista=[]

function agregaralumno(){
    let nombre= prompt("Nombre: ")
    let nota1= parseInt(prompt("Ingrese la primera nota: "))
    let nota2= parseInt(prompt("Ingrese la primera nota: "))
    let nota3= parseInt(prompt("Ingrese la tercera nota: "))
    let promedio= (nota1 + nota2 + nota3)/3

    if  (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nombre=="" ) {
        alert("porfavor ingrese valoresvalidos")
        return;
    }
    
    (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nombre=="" )&& alert("porfavor ingrese valoresvalidos") 

    let alumnos= new Alumnos(nombre, nota1, nota2, nota3,promedio)
    if (lista.some((x)=>x.nombre===alumnos.nombre)){
        alert("el estudiante ya seencuentra en la lista")
        return;
    }
    
    lista.push(alumnos)
    console.table(lista)
    localStorage.setItem(nombre,promedio)

}

let botonAgregar= document.getElementById("agrega")
botonAgregar.addEventListener("click",agregaralumno)


let json= document.getElementById("json")
json.addEventListener("click",()=>{
    let enjson= JSON.stringify(lista)
    console.log(enjson)
})

