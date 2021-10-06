var flujos = {}
var flujoMesAnterior = 0
var mesesAno = {
    1: 'Enero',
    2: 'Febrero',
    3: 'Marzo',
    4: 'Abril',
    5: 'Mayo',
    6: 'Junio',
    7: 'Julio',
    8: 'Agosto',
    9: 'Septiembre',
    10: 'Octubre',
    11: 'Noviembre',
    12: 'Diciembre'
}

function validateDecimal(valor) {
    var RE = /^\d*\.?\d*$/;
    if (RE.test(valor)) {
        return true;
    } else {
        return false;
    }
}

function validateText(valor) {
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        return false;
    }
    else {
        return true
    }
}


function flujoAgregar() {
    if ($.isEmptyObject(flujos)) {
        var flujoMes = document.getElementById("flujoMes").selectedIndex + 1
        flujoMesAnterior = flujoMes
    } else {
        if (flujoMesAnterior == 12) {
            flujoMes = 1
            flujoMesAnterior = 1
        } else {
            flujoMes = flujoMesAnterior + 1
            flujoMesAnterior += 1
        }
    }
    var flujoIngreso = document.getElementById('flujoIngreso').value;
    if (validateDecimal(flujoIngreso)) {
        nuevoFlujo = { mes: flujoMes, ingreso: Number(flujoIngreso) }
        console.log(nuevoFlujo)
        flujos[flujoMes] = nuevoFlujo
        console.log(flujos);


        $('#popup-flujo').fadeOut('slow');
        $('.popup-overlay').fadeOut('slow');
    }
    else {
        alert('No se ingreso ningun valor')
    }
    mostrarFlujos()
}

function flujoEliminar() {
    if ($.isEmptyObject(flujos)) {
        alert('No hay nada para eliminar')
    } else {
        ultimoFlujo = 0
        for (element in flujos) {

            ultimoFlujo = element
        }
        console.log(ultimoFlujo)
        delete flujos[ultimoFlujo];
        flujoMesAnterior = ultimoFlujo - 1;

        $('#popup-eliminar-flujo').fadeOut('slow');
        $('.popup-overlay-eliminar').fadeOut('slow');
    }
    mostrarFlujos()
}


function mostrarFlujos() {
    let saldoFinal = 0;
    $("#contenedor-Flujo").empty()

    if (!$.isEmptyObject(flujos)) {
        console.log('Algo')
        for (element in flujos) {

            console.log(flujos[element]['ingreso'])
            saldoFinal += flujos[element]['ingreso'];
            let flujoHTML = `  
            <th scope="row">${mesesAno[flujos[element]['mes']]}</th>
            <td>$${flujos[element]['ingreso']}</td>
            <td>$0</td>
            <td>$${flujos[element]['ingreso'] - 0}</td>
            <td>$${saldoFinal}</td>`
            let flujolista = document.createElement('tr');
            flujolista.innerHTML = flujoHTML;
            document.getElementById("contenedor-Flujo").appendChild(flujolista);
        }
        let totalHtml = `
        <th scope="row">Total</th>
            <td>$${saldoFinal}</td>`
        let flujolista = document.createElement('tr');
        flujolista.innerHTML = totalHtml;
        document.getElementById("contenedor-Flujo").appendChild(flujolista);

    } else {
        saldoFinal = 0
        let totalHtml = `
        <th scope="row">Total</th>
            <td>$${saldoFinal}</td>`
        let flujolista = document.createElement('tr');
        flujolista.innerHTML = totalHtml;
        document.getElementById("contenedor-Flujo").appendChild(flujolista);
        console.log('Nada')
    }
}



async function guardarPresupuesto() {
    var proyecto = document.getElementById('presupuestoNombre').value
    if (validateText(proyecto)) {

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "date": "2021-03-10",
            "proyecto": proyecto,
            "version": 0
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'manual'
        };

        fetch("http://localhost:3000/presupuestos/insert/", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                insertarFlujos(result[0][0])
            })
            .catch(error => console.log('error', error));
    } else {
        alert('Ingrese un Nombre')
    }


}


async function insertarFlujos(presupuesto) {
    if ($.isEmptyObject(flujos)) {
        console.log('Nada a agregar')
    }
    else {
        for (element in flujos) {
            console.log(presupuesto)
            console.log(flujos[element])
            await insertarFlujo(presupuesto, flujos[element])
        }
    }
}


async function insertarFlujo(presupuesto, flujo) {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "idPresupuesto": presupuesto['idPresupuesto'],
        "mes": flujo['mes'],
        "ingreso": flujo['ingreso']
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'manual'
    };

    fetch("http://localhost:3000/presupuestos/insertFlujo", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));


}


mostrarFlujos()