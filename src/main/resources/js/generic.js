//$("#footerYear").text(new Date().getFullYear());

$(function () {
    $("#navbarIncluded").load("/navbar.html");
});

function takeSnapshot() {
    html2canvas($('body'), {
        onrendered: function (canvas) {
            var myImage = canvas.toDataURL("image/png");
            window.open(myImage);
        }
    });
    return false;
}
