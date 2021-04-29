$(document).ready(function(){
    var boton1=$("#boton1");
    var boton2=$("#boton2");
    var boton3=$("#boton3");
    var boton4=$("#boton4");
    var parr=$(".otro");

    boton1.click(function(){
        $("#foto1").hide(2000);
    });
    boton2.click(function(){
        $("#foto1").show(2000);
    });
    boton3.click(function(){
        $("#sub").text("Bienvenido a la comunidad");
    });
    boton4.click(function(){
        $("#sub").text("Sitio amateur")
    });
    parr.mouseenter(function(){
        $(this).css("background-color", "pink");
    });
    parr.mouseleave(function(){
        $(this).css("background-color", "red");
    });
});