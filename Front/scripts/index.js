async function obtenerPresupuestos() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("http://localhost:3000/presupuestos/select", requestOptions)
        .then(response => response.json())
        .then(result => {
            //console.log(result)
            mostrarPresupuestos(result)
        })
        .catch(error => console.log('error', error));


}

obtenerPresupuestos()

function mostrarPresupuestos(presupuestos) {

    console.log(presupuestos[0].length);
    if (document.getElementById("contenedor-Presupuesto")) {
        presupuestos[0].forEach(presupuesto => {
            console.log(presupuesto)
            let presupuestoHTML = `         
                                <th scope="row">${presupuesto.idPresupuesto}</th>
                                <td>${presupuesto.creacion}</td>
                                <td>${presupuesto.proyecto}</td>
                                <td>${presupuesto.version}</td>
                                <td><button onclick="editarPresupuesto(${presupuesto.idPresupuesto})" type="button" class="btn btn-outline-warning">Editar</button>
                                    <button onclick="eliminarPresupuesto(${presupuesto.idPresupuesto})" type="button" class="btn btn-outline-danger">Eliminar</button>
                                    <button onclick="enviarPresupuesto(${presupuesto.idPresupuesto})" type="button" class="btn btn-outline-primary">Enviar</button>
                                </td>
                            `
            let presupuestolista = document.createElement('tr');
            presupuestolista.innerHTML = presupuestoHTML;
            document.getElementById("contenedor-Presupuesto").appendChild(presupuestolista);
        });
    }
}





