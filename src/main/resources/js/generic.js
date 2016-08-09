//$("#footerYear").text(new Date().getFullYear());

$(function () {
    $("#navbarIncluded").load("/navbar.html");
});

$("#navbarSnapshot").on( "click", "submit", function () {
    alert("Button Click");
    html2canvas($('body'), {
        onrendered: function (canvas) {
            var myImage = canvas.toDataURL("image/png");
            window.open(myImage);
        }
    });
});
