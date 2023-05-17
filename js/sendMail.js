const contactsBtnSendEmeil = document.querySelector('.Contacts-btnSendEmeil')

function emeilTest() {
    let inputEmail = document.querySelector('.Contacts-input')
    let userEmail = document.querySelector('.Contacts-input').value

    Email.send({
        SecureToken : "d6ad7707-3972-43dc-90aa-4cab0fb56796",

        To : 'INFO@GMYCONSULTING.COM, JACOB@GMYCONSULTING.COM',
        From : userEmail,
        Subject : "GMY Website Notification",
        Body : `
            This person wants you to contact them.
            <br><br>
            E-Mail: ${userEmail}
        `
    })
    .then(
        (message) => {
            if (message === 'OK') {
                inputEmail.value = ''

                alert('Succsess')
            } else {
                alert(message)
            }
        }
    )
}

contactsBtnSendEmeil.addEventListener('click', emeilTest)