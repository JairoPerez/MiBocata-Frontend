const loginForm = document.getElementById('loginForm')
const url = "http://localhost/MiBocata-Backend/swLogin.php"

loginForm.addEventListener('submit', peticionAjax)

function peticionAjax(event) {
    event.preventDefault()

    const emailInput = document.getElementById('email').value
    const passwordInput = document.getElementById('password').value

    json = {
        action: "find",
        filter: [
            { email: emailInput },
            { passwd: passwordInput }
        ]
    }

    fetch(url, {
        method: "POST",
        body: JSON.stringify(json),
        headers: { "Content-type": "application/json" }

    })
        .then((respuesta) => respuesta.json())
        .then((json) => {
            if (json.success) {
                console.log(json.success)
                location.href = "./seleccionBocadillos.html"
            } else {
                alert(json.msg)
            }
        })
        .catch((error) => {
            console.error(error)
        })

}