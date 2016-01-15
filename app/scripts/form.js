function startForm() {

    /* jshint unused: false */

    // Toggle create an account if check box checked
    var createAccount = document.querySelector('.create-account');
    var newAccount = document.querySelector('.new-account');

    //newAccount.classList.toggle('fade-in'); // for development

    createAccount.addEventListener('click', function() {
        newAccount.classList.toggle('fade-in');
    });

    // Toggle create new event if check box checked
    var createEvent = document.querySelector('.create-event');
    var newEvent = document.querySelector('.new-event');

    createEvent.addEventListener('click', function() {
        newEvent.classList.toggle('fade-in');
    });

    // @TODO: Input validation

    // Change progress on progress bar

}