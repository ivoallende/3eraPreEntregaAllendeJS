/*
let sacarTurno = 0;
const cantidadDeTurnos = 1;


function reservarUnTurnoFinde() {

    const numero = prompt ("Para el horario a reservar elegir el numero que esta al lado izquierdo del horario que quieras hacer tu reserva \n 1- 12:00hs \n 2- 13:00hs \n 3- 14:00hs \n 4- 15:00hs \n 5- 16:00hs \n 6- 17:00hs \n 7- 18:00hs ");
switch (numero) {
    case "1":
        alert("Perfecto tu turno queda reservado a las 12:00hs")
        break;
    case "2":
        alert("Perfecto tu turno queda reservado a las 13:00hs")
        break;
    case "3":
        alert("Perfecto tu turno queda reservado a las 14:00hs")
        break;
    case "4":
        alert("Perfecto tu turno queda reservado a las 15:00hs")
        break;
    case "5":
        alert("Perfecto tu turno queda reservado a las 16:00hs")
        break;
    case "6":
        alert("Perfecto tu turno queda reservado a las 17:00hs")
        break;
    case "7":
        alert("Perfecto tu turno queda reservado a las 18:00hs")
        break;
    default:
        alert("No ingresaste un horario disponible");
        reservarUnTurnoFinde();
        break;
    }

};
function reservarUnTurnoDiaSemana() {

    const numero = prompt ("Para el horario a reservar elegir el numero que esta al lado izquierdo del horario que quieras hacer tu reserva \n 1- 15:00hs \n 2- 16:00hs \n 3- 17:00hs \n 4- 18:00hs \n 5- 19:00hs \n 6- 20:00hs \n 7- 21:00hs \n 8- 22:00hs \n 9- 23:00hs");
switch (numero) {
    case "1":
        alert("Perfecto tu turno queda reservado a las 15:00hs")
        break;
    case "2":
        alert("Perfecto tu turno queda reservado a las 16:00hs")
        break;
    case "3":
        alert("Perfecto tu turno queda reservado a las 17:00hs")
        break;
    case "4":
        alert("Perfecto tu turno queda reservado a las 18:00hs")
        break;
    case "5":
        alert("Perfecto tu turno queda reservado a las 19:00hs")
        break;
    case "6":
        alert("Perfecto tu turno queda reservado a las 20:00hs")
        break;
    case "7":
        alert("Perfecto tu turno queda reservado a las 21:00hs")
        break;
    case "8":
        alert("Perfecto tu turno queda reservado a las 22:00hs")
        break;
    case "9":
        alert("Perfecto tu turno queda reservado a las 23:00hs")
        break;
    default:
        alert("No ingresaste un horario disponible");
        reservarUnTurnoDiaSemana();
        break;
    }
};

while (sacarTurno < cantidadDeTurnos){
    const turno = prompt("Buenas que dia de la semana queres reservar un turno (lunes, martes, miercoles, jueves, viernes, sabado o domingo)").toLocaleLowerCase();

    if (turno === "lunes" || turno === "martes" || turno === "miercoles" || turno === "jueves" || turno === "viernes" ) {
        reservarUnTurnoDiaSemana();
        sacarTurno++;
    }
    else if (turno === "sabado" || turno === "domingo") {

            reservarUnTurnoFinde();
            sacarTurno++;
    }
        else{
        alert(turno + " no es un dia valido");
    }
}
*/
//function para ver los dias disponibles
const formDeInputs = document.createElement("form");
formDeInputs.className = "formDeInputs";

const inputNombre = document.createElement("input");
inputNombre.className = "inputs";
inputNombre.placeholder = "Ingrese su nombre";
inputNombre.type = "text";
//cree el input para ingresar el nombre y la linea de abajo lo agreger dentro del form
localStorage.setItem(`nombre`, inputNombre.value);

const inputApellido = document.createElement("input");
inputApellido.placeholder = "Ingrese su apellido";
inputApellido.className = "inputs";
inputApellido.type = "text";
//cree el input para ingresar el apellido y la linea de abajo lo agreger dentro del form
const inputNumero = document.createElement("input");
inputNumero.className = "inputs";
inputNumero.placeholder = "Ingrese su numero de telefono";
inputNumero.type = "number";
//cree el input para ingresar el numero de telefono y la linea de abajo lo agrege dentro del form

const botonDeFormulario = document.createElement("input");
botonDeFormulario.type = "submit";
botonDeFormulario.className = "botonDeFormulario";
botonDeFormulario.value = "Enviar formulario"
formDeInputs.addEventListener ("submit", (e) => {
    e.preventDefault();
    const texto = document.createElement("p");
    texto.innerText = `Nombre: ${inputNombre.value}, Apellido: ${inputApellido.value}, Telefono: ${inputNumero.value}`;
});
//cree el boton de envio del formulario y en la linea de abajo lo agrege al form

formDeInputs.append(inputNombre);
formDeInputs.append(inputApellido);
formDeInputs.append(inputNumero);
formDeInputs.append(botonDeFormulario);
document.body.append(formDeInputs);

// cree el div y lo puse dentro del body


/*
function turnosParaReservarLunes(){

    const turnosDisponibles = semanaDeTurnos.filter(el => el.id === "lunes" && el.reservado === false) ;
    function diasDisponibles(){
        let dias = [];
        turnosDisponibles.forEach(el => {
            dias.push(el.id + " "+ el.horario + "Hs");
        });
        console.log(dias);
    }
    diasDisponibles();
}
*/
let sacarTurno = 0;
const cantidadDeTurnos = 1;
//crearQuienReservaElTurno();
function inputDelTurno(){
    const formDeInput = document.createElement("form");

    const turno = document.createElement("input");
    turno.type = "text";
    turno.placeholder = "Ingrese el dia de la semana";
    const botonEnvio = document.createElement("input");
    botonEnvio.type = "button";
    botonEnvio.value = "Buscar horario disponibles de ese dia";
    // formDeInput.addEventListener("submit", (e) => {
    //     e.preventDefault();
        
    // });
    
    botonEnvio.onclick = () =>{
        sessionStorage.setItem("valor",turno.value.toLocaleLowerCase());
        valor = sessionStorage.getItem("valor")
        while (sacarTurno < cantidadDeTurnos){ 
            
            //let valor = prompt("Ingrese su dia de la semana");
        switch (sessionStorage.getItem("valor")) {
        case "lunes":
            turnosParaReservarLunes();
            sacarTurno++;
            break;
        case "martes":
            turnosParaReservarMartes();
            sacarTurno++;
            break;
        case "miercoles":
            turnosParaReservarMiercoles();
            sacarTurno++;
            break;
        case "jueves":
            turnosParaReservarJueves();
            sacarTurno++;
            break;
        case "viernes":
            turnosParaReservarViernes();
            sacarTurno++;
            break;
        case "sabado":
            turnosParaReservarSabados();
            sacarTurno++;
            break;
        case "domingo":
            turnosParaReservarDomingos();
            sacarTurno++;
            break;     
        default:
            let confirmar = confirm("el dia que elegiste no esta disponible \n Quieres eleguir otro dia de la semana?");
            if(confirmar === true){
                sessionStorage.removeItem("valor");
                inputDelTurno();
            }else{
            sacarTurno++;
            }
            break;
        };
    };
    
} 
document.body.append(formDeInput);
formDeInput.appendChild(turno);
formDeInput.append(botonEnvio);

}
function nacion(){
    
    inputDelTurno();
}
    
botonDeFormulario.addEventListener("click", () => 
{
    const mensajeDeTexto = document.createElement("p");
    mensajeDeTexto.innerText = "Gracias por elegirnos " + inputNombre.value 
    document.body.append(mensajeDeTexto);
    inputDelTurno();
}
);



// agregar el turno que esta disponible


//const titulo = document.getElementById("titulo");

//console.log(titulo.innerText);

//titulo.innerText = "Este es el nuevo titulo madafuckers"


//const lista = document.getElementsByClassName("paises");

//lista[0].innerText = "Argentina"

// let container = document.getElementById("container");

// const parrafo = document.createElement("p");

// parrafo.innerText = "Parrafo de p"

// container.append(parrafo);

// hicimos que la etiqueta div con el id buscado de container le agregemos una etiqueta p con su parrafo
//container.innerHTML = "<h2>Hola mundo</h2><p>Lorem lorem</p>"

//container.className = "container"


// producto.forEach( el => {
//     const parrafo = document.createElement("p");
//     parrafo.innerText ="Producto : " + el.nombre + "($" + el.precio + ")";
//     container.append(parrafo);
// })
/*
<div class="card">
    <h3>Nombre del producto</h3>
    <p>Precio del producto</p>
<div>


function crearProducto(producto){
    
    const dividendo = document.createElement("div");
    dividendo.className = "dividendo";
    //Cree el div, con clase y lo agrege al container
    const tituloH = document.createElement("h3");
    tituloH.innerText = producto.nombre;
    //cree el h3 y lo agrege adentro del div
    const parrafoPrecio = document.createElement("p");
    parrafoPrecio.innerText = "Precio del producto : $" + producto.precio ;
    //cree el p y lo agrege adentro del div
    dividendo.append(tituloH);
    dividendo.append(parrafoPrecio);
    container.append(dividendo);
}

producto.forEach(el => {
    crearProducto(el);
});
*/