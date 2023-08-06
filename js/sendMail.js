const contactsBtnSendEmeil = document.querySelector('.Contacts-btnSendEmail')

function emeilTest() {
    let inputEmail = document.querySelector('.Contacts-input')
    let userEmail = document.querySelector('.Contacts-input').value

    Email.send({
        SecureToken : "78f208f3-205e-444b-937a-a0a2125c2225",

        To : 'INFO@GMYCONSULTING.COM, JACOB@GMYCONSULTING.COM',
        From : 'botmailsender@gmyconsulting.com',
        Subject : "GMY Website Notification",
        Body : `
            This person wants you to contact them.
            <br><br>
            E-Mail: ${userEmail}
        `
    })
    .then((message) => {
        if (message === 'OK') {
            inputEmail.value = ''

            alert('Succsess')
        } else {
            alert(message)
        }}
    )
}

contactsBtnSendEmeil.addEventListener('click', emeilTest)

// animation icon
const contactsIconArrowFull = document.querySelector('.Contacts-iconArrowFull')

contactsIconArrowFull.addEventListener('click', () => {
    contactsIconArrowFull.classList.toggle('clickIconAnim')
})

contactsIconArrowFull.addEventListener('animationend', () => {
    contactsIconArrowFull.classList.toggle('clickIconAnim')
})