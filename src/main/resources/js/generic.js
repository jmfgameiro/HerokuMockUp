//$("#footerYear").text(new Date().getFullYear());

$(function () {
    $("#navbarIncluded").load("/navbar.html");
});

function takeSnapshot() {
    html2canvas($('body'), {
        onrendered: function (canvas) {
            return Canvas2Image.saveAsPNG(canvas);
        }
    });
    return false;
}
