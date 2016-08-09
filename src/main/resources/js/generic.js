//$("#footerYear").text(new Date().getFullYear());

$(function() {
    $("#navbarIncluded").load("/navbar.html");
});

$(document).ready(function(){

    $("#navbarSnapshot").click(function(){
        alert("Button Click");
        html2canvas(document.body, {
            onrendered: function(canvas) {
                var myImage = canvas.toDataURL("image/png");
                window.open(myImage);
            }
        });
    });

});

