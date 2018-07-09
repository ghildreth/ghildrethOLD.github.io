;(function($) {
    "use strict";
    
    var lat=49.2827;
    var long=-123.1207;   

    if ($("#mapBox").length > 0)
    {
        var myCenter = new google.maps.LatLng(
            lat, long 
        );
        function changeMarker(newLogo) {
            "use strict";
            var marker = new google.maps.Marker({
                position: myCenter,
                icon: newLogo
            });
            var map = new google.maps.Map(document.getElementById("mapBox"), {
                center: myCenter,
                zoom: 12,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                rotateControl: false,
                fullscreenControl: false,
                styles: [{
                        "featureType": "all",
                        "stylers": [
                            {"saturation": -100}
                        ]
                    }]
            });
            marker.setMap(map);
        }

        google.maps.event.addDomListener(window, "load", function () {
            changeMarker("");
        });
    }

})(jQuery)

//contact google map

// These are the values for your desired longitude and latitude

