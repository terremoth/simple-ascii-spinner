
var SimpleSpinner = function(el, spinnerType, speed) {

    this.spinners = [
        "▖▘▝▗",
        "◢◣◤◥",
        '▙▛▜▟',
        "◴◷◶◵",
        "◐◓◑◒",
        "|/–\\",
        '▤▧▥▨',
        "⣷⣯⣟⡿⢿⣻⣽⣾",
    ];
    
    clearInterval(this.counter);
    this.counter = null;
    
    var container = document.querySelector(el);
    var chosenSpinner = this.spinners[spinnerType];
    var spinnerLen = chosenSpinner.length;
    var i = 0;
    
    this.counter = setInterval(function() {
        container.innerHTML = chosenSpinner[i];
        i++;
        if (i === spinnerLen) i = 0;
    }, speed); 
  
};
