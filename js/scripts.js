jQuery(document).ready(function($) {

	$('.js-bg-slider').slick({
	  arrows: false,
	  dots: true,
	  adaptiveHight: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  speed: 800,
	  easing: 'linear',
	  infinite: true,
	  autoplay: true,
	  autoplaySpeed: 7000,
	  pauseOnFocus: true,
	  fade: true,
	  pauseOnHover: true,
	  pauseOnDotsFocus: true,
	  draggable: true,
	  swipe: true,
	});

});

const navbarElement = document.querySelector(".navbar.fixed-top");

const toggleNavbarClass = (event) => {
  if (event.currentTarget.scrollY > 20) {
    navbarElement.classList.add("navbar-stuck");
  } else {
    navbarElement.classList.remove("navbar-stuck");
  }
};

window.addEventListener("load", toggleNavbarClass);
window.addEventListener("scroll", toggleNavbarClass);


Fancybox.bind("[data-fancybox]", {
	// Your custom options
});



var mapPinsCanvas = document.getElementById('map-pins-canvas');

// Retrieve the data-lat and data-lng attributes
var dataLat = mapPinsCanvas.getAttribute('data-lat');
var dataLng = mapPinsCanvas.getAttribute('data-lng');

let mapPinsLocations = [
  {
    lat: +dataLat,
    lng:  +dataLng
  },
];

const map = new google.maps.Map(mapPinsCanvas, {
  zoom: 7,
  center: mapPinsLocations[0], // Центрируем карту на первой точке
  styles: [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#6195a0"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#e6f3d6"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f4d2c5"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#4e4e4e"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f4f4f4"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#787878"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#eaf6f8"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#eaf6f8"
            }
        ]
    }
  ], // Применяем стили к карте
});
mapPinsLocations.forEach((location) => {
	const marker = new google.maps.Marker({
	  position: { lat: location.lat, lng: location.lng },
	  map: map,
	  title: location.title,
	  icon: {
	    url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAABWCAYAAACTk/VOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTk3RjA3RkVDQkIwMTFFQ0FFQjI4RkM4OTE3QkQ1Q0UiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTk3RjA3RkRDQkIwMTFFQ0FFQjI4RkM4OTE3QkQ1Q0UiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1RjBDQUQzNjhCREMxMUVCOTMzQzg3NDM0MEEzRTlENiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1RjBDQUQzNzhCREMxMUVCOTMzQzg3NDM0MEEzRTlENiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pm5o2BUAAAp0SURBVHja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', // URL иконки
	    scaledSize: new google.maps.Size(30, 43), // Размер иконки
	  }
	});
});