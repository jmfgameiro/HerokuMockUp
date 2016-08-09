var samples = [ "singlepagevertical" ];

$(document).ready(function(){

    // CREATE SAMPLES
    var samplesDiv = $("#samplesDiv");
    $.each( samples, function(index, value){
        // Create link
        var sampleLink = document.createElement("a");
        sampleLink.setAttribute("href","samples/"+value+"/index.html");
        sampleLink.setAttribute("class","col-xs-12 col-md-4 mockup-container");
        var sampleImg = document.createElement("img");
        sampleImg.setAttribute("id","sample"+value);
        sampleLink.appendChild(sampleImg);
        samplesDiv.append(sampleLink);
    });

});

$(window).load(function(){

    $("#samplesDiv > a").each(function() {
        $(this).height($(this).width());
    });

});


