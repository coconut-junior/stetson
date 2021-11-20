const primary = "#F1EEE9";
const secondary = "#E7DFD2";

var chart = document.querySelector('.chart');
var men_sizes = {
    "6 5/8":1, "20 7/8":1,
    "6 3/4":1, "21 1/4":1,
    "6 7/8":1, "21 5/8":1,
    "7":2, "22":2,
    "7 1/8":2, "22 1/12":2,
    "7 1/4":2, "22 7/8":2,
    "7 3/8":3, "23 1/4":3,
    "7 1/2":3, "23 5/8":3,
    "7 5/8":4, "24":4,
    "7 3/4":4, "24 1/2":4,
    "7 7/8":5, "24 1/8":5,
    "8":5, "25 1/14":5,
    "8 1/8":5, "25 5/8":5,

    "6 3/4":6, "21 1/4":6,
    "6 7/8":6, "21 5/8":6,
    "7":6, "22":6,
    "7 1/8":7, "22 1/12":7,
    "7 1/4":7, "22 7/8":7
};

chart.addEventListener("mouseover", event => {
    var t = event.target.textContent;
    if (event.target.className == "block") {
        event.target.style.backgroundColor = primary;
    }
    var i = men_sizes[t];
    try {
        switch(i) {
            case 1:
                var block = document.querySelector("#m-s");
                block.style.backgroundColor = primary;
                break;
            case 2:
                var block = document.querySelector("#m-m");
                block.style.backgroundColor = primary;
                break;
            case 3:
                var block = document.querySelector("#m-l");
                block.style.backgroundColor = primary;
                break;
            case 4:
                var block = document.querySelector("#m-xl");
                block.style.backgroundColor = primary;
                break;
            case 5:
                var block = document.querySelector("#m-xxl");
                block.style.backgroundColor = primary;
                break;
            default:
                var block = document.querySelector("m-xxl");
                block.style.backgroundColor = "Transparent";
                break;
        }
        
    }
    catch {
        console.log('not in dictionary');
    }
    
});

chart.addEventListener("mouseout", event => {
    var blocks = document.querySelectorAll(".block");
    for(i = 0; i < blocks.length; ++i) {
        b = blocks[i];
        b.style.backgroundColor = "Transparent";
    }

});