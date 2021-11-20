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
};

var women_sizes = {
    "6 5/8":6, "20 7/8":6,
    "6 3/4":6, "21 1/4":6,
    "6 7/8":6, "21 5/8":6,
    "7":6, "22":6,

    "7 1/8":7, "22 1/12":7,
    "7 1/4":7, "22 7/8":7,

    "7 3/8":8, "23 1/4":8,
    "7 1/2":8, "23 5/8":8,

    "7 5/8":9, "24":9,
    "7 3/4":9, "24 1/2":9,
    
    "7 7/8":10, "24 1/8":10,
    "8":10, "25 1/14":10,
    "8 1/8":10, "25 5/8":10,
};

var women_extra_sizes = {
    "6 3/4":11, "21 1/4":11,
    "6 7/8":11, "21 5/8":11,
    "7":11, "22":11,
    "7 1/8":12, "22 1/12":12,
    "7 1/4":12, "22 7/8":12
};

chart.addEventListener("mouseover", event => {
    var t = event.target.textContent;
    if (event.target.className == "block") {
        event.target.style.backgroundColor = primary;
    }
    
    try {
        var charts = [men_sizes[t],women_sizes[t], women_extra_sizes[t]];
        for(c = 0;c < charts.length;++c) {
            i = charts[c];
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
                case 6:
                    var block = document.querySelector("#w-s");
                    block.style.backgroundColor = primary;
                    break;
                case 7:
                    var block = document.querySelector("#w-m");
                    block.style.backgroundColor = primary;
                    break;
                case 8:
                    var block = document.querySelector("#w-l");
                    block.style.backgroundColor = primary;
                    break;
                case 9:
                    var block = document.querySelector("#w-xl");
                    block.style.backgroundColor = primary;
                    break;
                case 10:
                    var block = document.querySelector("#w-xxl");
                    block.style.backgroundColor = primary;
                    break;
                case 11:
                    var block = document.querySelector("#w-sm");
                    block.style.backgroundColor = primary;
                    break;
                case 12:
                    var block =  document.querySelector("#w-ml");
                    block.style.backgroundColor = primary;
                    break;
            }
        }
        
    }
    catch(error) {
        console.error(error);
    }
    
});

chart.addEventListener("mouseout", event => {
    var blocks = document.querySelectorAll(".block");
    for(i = 0; i < blocks.length; ++i) {
        b = blocks[i];
        b.style.backgroundColor = "Transparent";
    }

});