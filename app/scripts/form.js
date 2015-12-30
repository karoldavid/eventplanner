function startForm() {

    // Toggle create an account if check box checked
    var createAccount = document.querySelector('.create-account');
    var newAccount = document.querySelector('.new-account');

    createAccount.addEventListener('change', function() {
        newAccount.classList.toggle('fade-in');
    });

    // Toggle create new event if check box checked
    var createEvent = document.querySelector('.create-event');
    var newEvent = document.querySelector('.new-event');

    createEvent.addEventListener('change', function() {
        newEvent.classList.toggle('fade-in');
    });

}