console.log("Hello");

/* ttt.onblur = function () {
    if (!ttt.value.includes("@")) {
        // not email
        ttt.classList.add("pocus");
        error.innerHTML = "Please enter a correct email.";
    }
};

ttt.onfocus = function () {
    if (this.classList.contains("pocus")) {
        // remove the "error" indication, because the user wants to re-enter something
        this.classList.remove("pocus");
        error.innerHTML = "";
    }
}; */

/* $("#ttt").onblur = function () {
    if (!$("#ttt").val.includes("@")) {
        // not email
        $("#ttt").classList.add("pocus");
        error.innerHTML = "Please enter a correct email.";
    }
};

$("#ttt").onfocus = function () {
    if (this.classList.contains("pocus")) {
        // remove the "error" indication, because the user wants to re-enter something
        this.classList.remove("pocus");
        error.innerHTML = "";
    }
}; */

if (window.location.href == "http://localhost:4200/login")
    //testar com o onload chamando a função no HTML
    window.onload = function () {
        /* $("#input-username").classList.add("pocus"); //Não funciona, não sei porque */
        /* const list = document.getElementById("input-

    username").classList;
    list.add("pocus"); */
        /* document.getElementById("input-username").classList.add("pocus"); */

        //Input animation --------------------------------------------------------

        console.log(window.location.href);
        document.getElementById("input-username").onfocus = function () {
            document.getElementById("div-username").classList.add("filled");
        };

        document.getElementById("input-username").onblur = function () {
            document.getElementById("div-username").classList.remove("filled");
        };

        /* document.getElementById("label-username").onfocus = function () {
        document.getElementById("div-username").classList.add("filled");
    };

    document.getElementById("label-username").onblur = function () {
        document.getElementById("div-username").classList.remove("filled");
    }; */

        document.getElementById("input-password").onfocus = function () {
            document.getElementById("div-password").classList.add("filled");
        };

        document.getElementById("input-password").onblur = function () {
            document.getElementById("div-password").classList.remove("filled");
        };

        //------------------------------------------------------------------------

        /* document.getElementById("input-username").onblur = function () {
        document.getElementById("div-username").classList.add("error");
        document.getElementById("span-error").classList.add("error");
        // $(".feedback").show();
    }; */
    };
