 var loader = document.getElementById("preloader");

     window.addEventListener("load", function(){
          loader.style.display = "1sec";

     })

     document.onreadystatechange = function() {
          if (document.readyState !== "complete") {
              document.querySelector(
                "body").style.visibility = "hidden";
              document.querySelector(
                "#spinner").style.visibility = "visible";
          } else {
              document.querySelector(
                "#spinner").style.display = "none";
              document.querySelector(
                "body").style.visibility = "visible";
          }
        };