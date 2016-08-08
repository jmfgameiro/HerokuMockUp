var samples = [ "helloworld" ];

$(window).load(function(){

    $('.row > a').each(function() {
        $(this).att('height', $(this).width() + 'px');
    });

});

$(document).ready(function(){

    // CREATE SAMPLES
    var samplesDiv = $('#samplesDiv');
    $.each( samples, function(index, value){
        var sampleDiv = document.createElement('div');
        sampleDiv.setAttribute('class','row');
        var sampleLink = document.createElement('a');
        sampleLink.setAttribute('href','samples/'+value+'/index.html');
        sampleLink.setAttribute('class','col-xs-12 col-md-4 mockup-container');
        var sampleImg = document.createElement('img');
        sampleImg.setAttribute('id','sample'+value);
        sampleLink.appendChild(sampleImg);
        sampleDiv.appendChild(sampleLink);
        samplesDiv.append(sampleDiv);
    });

});

