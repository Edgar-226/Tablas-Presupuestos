function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validateText(valor) {
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        return false;
    }
    else {
        return true
    }
}


async function login() {
    actualPassword = document.getElementById('loginUser').value;
    if (validateText(actualPassword)) {
        userPassword = document.getElementById('loginPassword').value;
        if (validateText(userPassword)) {
            let login = { user: actualPassword, password: userPassword }

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "user": actualPassword,
                "password": userPassword
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'manual'
            };

            fetch("http://localhost:3000/login", requestOptions)
                .then(response => response.text())
                .then(result => {
                    console.log(result)
                    localStorage.setItem("token", result)
                })
                .then(() => {
                    alert('Bienvenido!!')
                    window.location.href = "./presupuestos.html";
                })
                .catch(error => { console.log('error', error) });


        } else {
            alert('Introdusca su Contraseña')
        }
    } else {
        alert('Introdusca su Usuario Correctamente')
    }
}
async function updatePassword() {
    actualPassword = document.getElementById('actualPassword').value;
    if (validateText(actualPassword)) {
        newPassword = document.getElementById('newPassword').value;
        if (validateText(newPassword)) {
            confirmPassword = document.getElementById('confirmPassword').value;
            if (validateText(confirmPassword)) {
                if (newPassword == confirmPassword) {
                    let password = {
                        passwordNuevo: newPassword,
                        passwordActual: actualPassword
                    }

                    var myHeaders = new Headers();
                    myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
                    myHeaders.append("Content-Type", "application/json");

                    var raw = JSON.stringify(password);

                    var requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: raw,
                        redirect: 'manual'
                    };

                    fetch("http://localhost:3000/login/update", requestOptions)
                        .then(response => response.text())
                        .then(result => {
                            console.log(result)
                            localStorage.setItem("token", result)
                        })
                        .then(() => {
                            alert('Password actualizado con exito :)')
                            window.location.href = "./presupuestos.html";
                        })
                        .catch(error => { console.log('error', error) });


                } else {
                    alert('Las contraseñas no son iguales')
                }
            } else {
                alert('Reintrodusca su Nueva Contraseña')
            }
        } else {
            alert('Introdusca su Nueva Contraseña')
        }
    } else {
        alert('Introdusca su Contrasña Actual')
    }
}

console.log("holiwi")
