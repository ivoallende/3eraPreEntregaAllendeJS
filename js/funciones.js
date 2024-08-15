

class QuienReservaElTurno{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}



// function crearQuienReservaElTurno(){
//     const nombre = prompt("Ingresa tu nombre");
//     const apellido = prompt("Ingresa tu apellido");
//     const telefono = parseInt(prompt("Ingresa tu numero de telefono"));
//     const quienReserva = new QuienReservaElTurno(nombre, apellido);
//     const nombreCompleto = nombre.concat(" " + apellido);
//     const mensaje = "Bienvenido a tercer tiempo ; Muchas gracias " + nombreCompleto + " ahora te molesto con las preguntas para reservar su turno  y te mandaremos un mensaje al celular "+ telefono + " cuando terminemos de confirmar el turno"
//     alert(mensaje);
// }

const secionDeHorarios = document.createElement("section");
secionDeHorarios.className = "secionDeHorarios";
document.body.append(secionDeHorarios)

function diasDeLaSemanaDisponibles(semanaDeTurnos){
    
    const horarios = document.createElement("div");
    horarios.className = "horarios";

    const dia = document.createElement("p");
    dia.innerText = `El ${semanaDeTurnos.id} `
    dia.className = "dia";

    const hora = document.createElement("p");
    hora.innerText = ` ${semanaDeTurnos.horario}Hs`
    hora.className = "dia";

    const botonDeTurno = document.createElement("button");
    botonDeTurno.innerText = "Quiero este turno";

    function mensajeTurno(){
        const mensaje = document.createElement("p")
        mensaje.innerText = `Tu turno de ${semanaDeTurnos.id} a las ${semanaDeTurnos.horario}Hs fue reservado con exito`
        secionDeHorarios.append(mensaje);
    }
    botonDeTurno.onclick = () => mensajeTurno();

    horarios.append(dia);
    horarios.append(hora);
    horarios.append(botonDeTurno);
    secionDeHorarios.append(horarios);
}
//semanaDeTurnos.forEach(el => diasDeLaSemanaDisponibles(el));

function turnosParaReservarLunes(){

    const turnosDisponibles = semanaDeTurnos.filter(el => el.id === "lunes" && el.reservado === false) ;
    function diasDisponibles(){
        turnosDisponibles.forEach(el => {
            diasDeLaSemanaDisponibles(el);
        });
    }
    diasDisponibles();
    
    /*function comparacionDisponibles(){
        //const horarioDePregunta = prompt("Que horario disponible de los que aparece queres reservar");
        //const comparacion = turnosDisponibles.find(el => el.horario == horarioDePregunta);
        
        comparacion.forEach(el =>{
            diasDeLaSemanaDisponibles(el);
        });
        
        /*if(comparacion != undefined){
            const mensaje = document.createElement("p");
            mensaje.innerText =`El turno ${comparacion.horario} Hs lo reservaste con exito`
            document.body.append(mensaje)
            
        }else{
            const mensaje = document.createElement("p");
            mensaje.innerText = "El turno seleccionado no esta disponible";
            let vuelta = confirm("Queres seguir reservando el turno?");
            document.body.appendChild(mensaje);
            if(vuelta){
                comparacionDisponibles();
            }
        
    }
    comparacionDisponibles();
     */
}

function turnosParaReservarMartes(){

    const turnosDisponibles = semanaDeTurnos.filter(el => el.id === "martes" && el.reservado === false) ;
    function diasDisponibles(){
        turnosDisponibles.forEach(el => {
            diasDeLaSemanaDisponibles(el);
        });
    }
    diasDisponibles();
    
    /*function comparacionDisponibles(){
        //const horarioDePregunta = prompt("Que horario disponible de los que aparece queres reservar");
        //const comparacion = turnosDisponibles.find(el => el.horario == horarioDePregunta);
        
        comparacion.forEach(el =>{
            diasDeLaSemanaDisponibles(el);
        });
    }
    comparacionDisponibles();
    */
}

function turnosParaReservarMiercoles(){

    const turnosDisponibles = semanaDeTurnos.filter(el => el.id === "miercoles" && el.reservado === false) ;
    function diasDisponibles(){
        turnosDisponibles.forEach(el => {
            diasDeLaSemanaDisponibles(el);
        });
    }
    diasDisponibles();
    
    /*function comparacionDisponibles(){
        //const horarioDePregunta = prompt("Que horario disponible de los que aparece queres reservar");
        //const comparacion = turnosDisponibles.find(el => el.horario == horarioDePregunta);
        
        comparacion.forEach(el =>{
            diasDeLaSemanaDisponibles(el);
        });
    }
    comparacionDisponibles();
    */
}

function turnosParaReservarJueves(){

    const turnosDisponibles = semanaDeTurnos.filter(el => el.id === "jueves" && el.reservado === false) ;
    function diasDisponibles(){
        turnosDisponibles.forEach(el => {
            diasDeLaSemanaDisponibles(el);
        });
    }
    diasDisponibles();
    
    /*function comparacionDisponibles(){
        //const horarioDePregunta = prompt("Que horario disponible de los que aparece queres reservar");
        //const comparacion = turnosDisponibles.find(el => el.horario == horarioDePregunta);
        
        comparacion.forEach(el =>{
            diasDeLaSemanaDisponibles(el);
        });
    }
    comparacionDisponibles();
    */
}
function turnosParaReservarViernes(){

    const turnosDisponibles = semanaDeTurnos.filter(el => el.id === "viernes" && el.reservado === false) ;
    function diasDisponibles(){
        turnosDisponibles.forEach(el => {
            diasDeLaSemanaDisponibles(el);
        });
    }
    diasDisponibles();
    
    /*function comparacionDisponibles(){
        //const horarioDePregunta = prompt("Que horario disponible de los que aparece queres reservar");
        //const comparacion = turnosDisponibles.find(el => el.horario == horarioDePregunta);
        
        comparacion.forEach(el =>{
            diasDeLaSemanaDisponibles(el);
        });
    }
    comparacionDisponibles();
    */
}

function turnosParaReservarSabados(){

    const turnosDisponibles = semanaDeTurnos.filter(el => el.id === "sabado" && el.reservado === false) ;
    function diasDisponibles(){
        turnosDisponibles.forEach(el => {
            diasDeLaSemanaDisponibles(el);
        });
    }
    diasDisponibles();
    
    /*function comparacionDisponibles(){
        //const horarioDePregunta = prompt("Que horario disponible de los que aparece queres reservar");
        //const comparacion = turnosDisponibles.find(el => el.horario == horarioDePregunta);
        
        comparacion.forEach(el =>{
            diasDeLaSemanaDisponibles(el);
        });
    }
    comparacionDisponibles();
    */
}

function turnosParaReservarDomingos(){


    const turnosDisponibles = semanaDeTurnos.filter(el => el.id === "domingo" && el.reservado === false) ;
    function diasDisponibles(){
        turnosDisponibles.forEach(el => {
            diasDeLaSemanaDisponibles(el);
        });
    }
    diasDisponibles();
    
    /*function comparacionDisponibles(){
        //const horarioDePregunta = prompt("Que horario disponible de los que aparece queres reservar");
        //const comparacion = turnosDisponibles.find(el => el.horario == horarioDePregunta);
        
        comparacion.forEach(el =>{
            diasDeLaSemanaDisponibles(el);
        });
    }
    comparacionDisponibles();
    */
}