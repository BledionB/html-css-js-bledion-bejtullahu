 var butoni1 = document.getElementById("btn1");

 butoni1.onclick  = function() {
        alert("Ju keni klikuar butonin");

 }
 var butoni1 = document.querySelector("btn1");
    butoni1.onclick  = function() {
        alert("Ju keni klikuar butonin");
    }
    butoni1.addEventListener("click", function() {
        alert("Hello!");
   
    });
   // ourelemement.addEventListener("click", funksioni1);
    //ourelemement.addEventListener("click", funksioni2);

    var button2 = document.getElementById("btn2");
    var button3 = document.getElementById("btn3");
    var button4 = document.getElementById("btn4");


    button2.onmouseover = function() {
        alert('hello');
    }
    button3.onmouseleave = function() {
        alert('goodbye');
    }
    button4.onmousewheel = function() {
        alert(' rotate');
    }
var v_text = document.getElementById("btn1");


   v_text.onclick = function() {
   v_text.style.color =  "red";
   v_text.style.backgroundColor = "lightblue";
   v_text.style.textAlign = "center";
   v_text.style.fontSize = "100px";
   v_text.style.padding = "10px";
}

v_text.onmouseover = function() {
    v_text.style.cssText = "color: blue; background-color: lightgrey; padding: 20px; font-size: 100px;";
}
 
v_text.onclick = function() {
    v_text.setAttribute("Class", "Test");
}
    