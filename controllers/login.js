const emailInput = document.getElementById('email').value
const passwordInput = document.getElementById('password').value
const loginForm = document.getElementById('loginForm')
const url = "http://localhost/Trabajo-Victor-Backend/swLogin.php"

loginForm.addEventListener('click', peticionAjax)


function peticionAjax(event) {
    event.preventDefault()

    json = {

        action: "find",
        filter: [
            {
                email: emailInput
            },
            {
                passwd: passwordInput
            }
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
                alert(json.msg)
            }
        })

}