const btn = document.querySelector(".btn");

btn.addEventListener("click", function() {
    Toastify({  
        text: "Well done!",
        duration: 3000,
        close: true,
        gravity: "top",
        position: 'center', 
        stopOnFocus: true, 
        style: {
            background: "linear-gradient(to right,rgb(255, 196, 0), #96c93d)", 
            borderRadius: "10px", 
        },
        onClick: function(){}
    }).showToast();
});




const btn1 = document.querySelector(".btn1");

btn1.addEventListener("click", function() {
    Toastify({  
        text: "Oh snap! Change a few things up submitting again.",
        duration: 3000,
        close: true,
        gravity: "top",
        position: 'center', 
        stopOnFocus: true, 
        style: {
            background: "linear-gradient(to right,rgb(155, 0, 0),rgb(255, 123, 0))", 
            borderRadius: "10px", 
        },
        onClick: function(){}
    }).showToast();
});


const btn2 = document.querySelector(".btn2");

btn2.addEventListener("click", function() {
    Toastify({  
        text: "worning!",
        duration: 3000,
        close: true,
        gravity: "top",
        position: 'center', 
        stopOnFocus: true, 
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)", 
            borderRadius: "10px", 
        },
        onClick: function(){}
    }).showToast();
});




function button1() {
    document.body.style.background = "linear-gradient(to right,rgb(255, 196, 0), #96c93d)";
}

function button2() {
    document.body.style.background = "linear-gradient(to right,rgb(155, 0, 0),rgb(255, 123, 0))";
}

function button3() {
    document.body.style.background = "linear-gradient(to right, #00b09b, #96c93d)";
}