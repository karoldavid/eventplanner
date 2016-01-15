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
