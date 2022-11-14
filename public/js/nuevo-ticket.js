// Referencias HTML
const lblNuevoTicket = document.querySelector('#lblNuevoTicket');
const btnCrear = document.querySelector('button');


const socket = io();


socket.on('connect', () => {
    //si el servidor del socket no esta conectado se deshabilita
    btnCrear.disabled = false;
});

socket.on('disconnect', () => {
    btnCrear.disabled = true;
});

socket.on('ultimo-ticket', (ultimo) => {
    lblNuevoTicket.innerText = 'Ticket ' + ultimo;
})


btnCrear.addEventListener( 'click', () => {
   
    socket.emit( 'siguiente-ticket', null, ( ticket ) => {
        lblNuevoTicket.innerText = ticket;
    });

});