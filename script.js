function mostrarMensaje(){
document.getElementById("mensaje").innerText="Hola mundo desde JavaScript";
}

function sumar(){
let a=Number(document.getElementById("n1").value);
let b=Number(document.getElementById("n2").value);
document.getElementById("resultadoSuma").innerText=a+b;

}

function colorFondo(color){
document.body.style.background=color;

}

let contador=0;
function contadorClicks(){
contador++;
document.getElementById("contador").innerText=contador;

}

function agregarTarea(){
let texto=document.getElementById("tarea").value;
let li=document.createElement("li");
li.innerText=texto;
document.getElementById("lista").appendChild(li);

}

function validar(e){
e.preventDefault();

let n=document.getElementById("nombre").value;
let c=document.getElementById("correo").value;
let e2=document.getElementById("edad").value;
if(n==""||c==""||e2==""){
document.getElementById("mensajeForm").innerText="Debe completar todos los campos";

}

}

function calcular(){
let a=Number(document.getElementById("c1").value);
let b=Number(document.getElementById("c2").value);
let op=document.getElementById("operacion").value;
let r;

if(op=="+") r=a+b;
if(op=="-") r=a-b;
if(op=="*") r=a*b;
if(op=="/") r=a/b;
document.getElementById("resultadoCalc").innerText=r;

}

function agregarTareaEliminar(){
let texto=document.getElementById("tarea2").value;
let li=document.createElement("li");
li.innerText=texto;
let btn=document.createElement("button");
btn.innerText="Eliminar";
btn.onclick=function(){
li.remove();

}
li.appendChild(btn);
document.getElementById("lista2").appendChild(li);

}

let tiempo=0;
let intervalo;
function iniciar(){
intervalo=setInterval(function(){
tiempo++;
document.getElementById("tiempo").innerText=tiempo;
},1000)

}
function detener(){
clearInterval(intervalo);

}
function reiniciar(){
tiempo=0;
document.getElementById("tiempo").innerText=0;
}

let cuentas=[];
function crearCuenta(){
let nombre=document.getElementById("saldoInicial").value;
let saldo=Number(nombre);
cuentas.push({saldo});
document.getElementById("saldo").innerText="Cuenta creada con saldo: "+saldo;

}

function depositar(){
if(cuentas.length==0) return;
cuentas[0].saldo+=100;
document.getElementById("saldo").innerText="Saldo: "+cuentas[0].saldo;

}

function retirar(){
if(cuentas.length==0) return;
if(cuentas[0].saldo>=50){
cuentas[0].saldo-=50;
}else{
alert("No puede retirar más dinero del disponible");

}
document.getElementById("saldo").innerText="Saldo: "+cuentas[0].saldo;
}

let inventario=[];

function agregarProducto(){
let nombre=document.getElementById("producto").value;
let precio=Number(document.getElementById("precio").value);
let cantidad=Number(document.getElementById("cantidad").value);
inventario.push({nombre,precio,cantidad});

let lista=document.getElementById("inventario");
lista.innerHTML="";
let total=0;
inventario.forEach(p=>{
let li=document.createElement("li");
li.innerText=p.nombre+" - $"+p.precio+" x "+p.cantidad;
lista.appendChild(li);
total+=p.precio*p.cantidad;
});
document.getElementById("totalInventario").innerText="Total inventario: "+total;

}

let estudiantes=[];
function agregarEstudiante(){
let nombre=document.getElementById("estudiante").value;
let nota=Number(document.getElementById("nota").value);
let estado=nota>=3?"Aprobó":"Reprobó";
estudiantes.push({nombre,nota,estado});
let lista=document.getElementById("listaEstudiantes");
lista.innerHTML="";
estudiantes.forEach(e=>{
let li=document.createElement("li");
li.innerText=e.nombre+" - "+e.nota+" - "+e.estado;
lista.appendChild(li);
});

}

let carrito=[];
function agregarCarrito(){
let nombre=document.getElementById("productoCarrito").value;
let precio=Number(document.getElementById("precioCarrito").value);
carrito.push({nombre,precio});
renderCarrito();

}
function eliminarProducto(index){
carrito.splice(index,1);
renderCarrito();

}

function renderCarrito(){
let lista=document.getElementById("carrito");
lista.innerHTML="";
let total=0;
carrito.forEach((p,i)=>{
let li=document.createElement("li");
li.innerHTML=p.nombre+" - $"+p.precio+
` <button onclick="eliminarProducto(${i})">Eliminar</button>`;
lista.appendChild(li);
total+=p.precio;

});
document.getElementById("totalCarrito").innerText="Total: "+total;
}
// CONTROL DE VEHICULOS

let vehiculos=[];

function agregarVehiculo(){

let nombre=document.getElementById("vehiculoNombre").value;

if(nombre=="") return;

vehiculos.push({
nombre:nombre,
velocidad:0
});

document.getElementById("vehiculoNombre").value="";

renderVehiculos();

}

function acelerar(i){

vehiculos[i].velocidad+=10;

renderVehiculos();

}

function frenar(i){

vehiculos[i].velocidad-=10;

if(vehiculos[i].velocidad<0){
vehiculos[i].velocidad=0;
}

renderVehiculos();

}

function renderVehiculos(){
let tabla=document.getElementById("tablaVehiculos");
tabla.innerHTML="";
vehiculos.forEach((v,i)=>{
let tr=document.createElement("tr");
tr.innerHTML=
"<td>"+v.nombre+"</td>"+
"<td>"+v.velocidad+" km/h</td>"+
`<td><button onclick="acelerar(${i})">Acelerar</button></td>`+
`<td><button onclick="frenar(${i})">Frenar</button></td>`;
tabla.appendChild(tr);

});

}

let libros=[];
function agregarLibro(){
let titulo=document.getElementById("libro").value;
libros.push({titulo,estado:"Disponible"});
renderLibros();

}

function cambiarEstado(i){
libros[i].estado=
libros[i].estado==="Disponible"?"Prestado":"Disponible";
renderLibros();
}

function renderLibros(){
let lista=document.getElementById("biblioteca");
lista.innerHTML="";
libros.forEach((l,i)=>{
let li=document.createElement("li");
li.innerHTML=l.titulo+" - "+l.estado+
` <button onclick="cambiarEstado(${i})">Cambiar estado</button>`;
lista.appendChild(li);
});

}
function mostrarTab(id){

document.querySelectorAll(".tab").forEach(tab=>{
tab.style.display="none";
});

document.getElementById(id).style.display="block";

}

mostrarTab("inicio");