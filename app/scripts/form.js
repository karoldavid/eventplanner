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
    var progressBar = document.querySelector('paper-progress');

    function ProgressTracker(inputs, progressBar) {
        var self = this;
        this.progressBar = progressBar;
        this.inputs = inputs;

        this.inputs.forEach(function(input) {
            input.element = document.querySelector(input.selector);
            input.added = false;
            input.isValid = null;

            input.element.oninput = function() {
                input.isValid = self.determineStatus(input);
                self.adjustProgressIfNecessary(input);
            };
        });
    }

    ProgressTracker.prototype = {
        determineStatus: function(input) {
            var isValid = false;

            if (input.element.value.length > 0) {
                isValid = true;
            } else {
                isValid = false;
            }

            try {
                isValid = isValid && input.element.validate();
            } catch (e) {
                console.log(e);
            }
            return isValid;
        },
        adjustProgressIfNecessary: function(input) {
            var newAmount = this.progressBar.value;

            if (input.added && !input.isValid) {
                newAmount = newAmount - input.amount;
                input.added = false;
            } else if (!input.added && input.isValid) {
                newAmount = newAmount + input.amount;
                input.added = true;
            }

            this.progressBar.value = newAmount;
        }
    };

    var inputs = [
        {
            selector: '#name',
            amount: 25
        }, {
            selector: '#email',
            amount: 25
        }, {
            selector: '#password',
            amount: 25
        }, {
            selector: '#password-confirmation',
            amount: 25
        }
    ];

    var progressTracker = new ProgressTracker(inputs, progressBar);

}