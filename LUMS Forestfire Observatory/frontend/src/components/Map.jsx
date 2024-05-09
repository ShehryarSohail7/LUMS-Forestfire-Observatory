import { useEffect, useRef } from "react";

const GoogleMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    let map;
    let marker = null;
    let searchBox;
    function getWeatherAPI(lat, lng) {
      // Example of using OpenWeatherMap API to get elevation data
      var apiKey = `bbb3159788f1fc3f1a33340159b846f7`;
      var url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${apiKey}&units=imperial`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          // Log the response data for debugging
          console.log("Response data:", data);

          // Extract temperature from data
          var temperature = data.list[0].main.temp;
          var min_temp = data.list[0].main.temp_min;
          var max_temp = data.list[0].main.temp_max;
          var humidity = data.list[0].main.humidity;
          var pressure = data.list[0].main.pressure;
          var wind_speed = data.list[0].wind.speed;
          var wind_direction = data.list[0].wind.deg;
          var population = data.city.population;
          var elevation = data.list[0].main.sea_level;

          // Update parameters box content with temperature
          var parametersBox = document.getElementById("parameters-box");
          parametersBox.innerHTML = `
                    <p"><span style="font-weight: bold;">Longitude = </span><span style="color: #000000;">${lng}</span></p>
                    <p><span style="font-weight: bold;">Latitude = </span><span style="color: #000000;">${lat}</span></p>
                    <p><a href="https://colab.research.google.com/drive/16k6gSp864u2EdfxiZvMQ_r2zeb26Dt_g" target="_blank" style="text-decoration: underline; color: blue;">Let's predict the fire mask!!</a></p>
                    <!-- <p>Temperature: ${temperature}°F</p>
                    <p>Min Temperature: ${min_temp}°F</p>
                    <p>Max Temperature: ${max_temp}°F</p>
                    <p>Humidity: ${humidity}%</p>
                    <p>Pressure: ${pressure} hPa</p>
                    <p>Wind Speed: ${wind_speed} m/s</p>
                    <p>Wind Direction: ${wind_direction}°</p>
                    <p>Population: ${population}</p>
                    <p>Elevation : ${elevation}</p> -->
                `;
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
    function initMap() {
      map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 0, lng: 0 },
        zoom: 3,
      });

      // Create search bar and button elements
      const searchBar = document.createElement("input");
      searchBar.setAttribute("id", "search-bar");
      searchBar.setAttribute("type", "text");
      searchBar.setAttribute("placeholder", "Search location...");
      searchBar.style.marginTop = "12px";
      searchBar.style.padding = "10px";
      searchBar.style.width = "300px";

      const searchButton = document.createElement("button");
      searchButton.setAttribute("id", "search-button");
      searchButton.textContent = "Search";
      searchButton.style.marginTop = "12px";
      searchButton.style.marginLeft = "10px";
      searchButton.style.padding = "10px";

      // Add search bar functionality
      searchBox = new window.google.maps.places.SearchBox(searchBar);
      map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(searchBar);

      // Bias the SearchBox results towards the current map's viewport
      map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds());
      });

      // Add search button functionality
      searchButton.addEventListener("click", () => {
        const place = searchBox.getPlaces()[0];
        if (place) {
          map.setCenter(place.geometry.location);
          map.setZoom(12); // Adjust zoom level as needed
        }
      });

      // Append search button to the map controls
      map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(
        searchButton
      );

      map.addListener("click", (e) => {
        var lat = e.latLng.lat();
        var lng = e.latLng.lng();

        // Remove previous marker if exists
        if (marker) {
          marker.setMap(null);
        }

        // Add marker at the clicked location
        marker = new window.google.maps.Marker({
          position: { lat: lat, lng: lng },
          map: map,
          icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png", // Red dot icon
        });

        // Call function to get weather data
        // This function needs to be defined somewhere
        getWeatherAPI(lat, lng);
      });
    }

    if (!window.google) {
      // Load the Google Maps API script if not already loaded
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDxwUgU9kfjU_tcist3jDQ3LjSouV5m3h8&libraries=places&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      script.onload = initMap;
    } else {
      initMap();
    }

    return () => {
      // Cleanup code if needed
    };
  }, []);

  return (
    <div>
      <div id="map" ref={mapRef} style={{ height: "400px", width: "100%" }} />
      <div
        id="parameters-box"
        style={{
          marginTop: "10px",
          padding: "10px",
          border: "1px solid #ccc",
          width: "800px",
          borderRadius: "20px",
          backgroundColor: "#f9f9f9",
        }}
      ></div>
    </div>
  );
};

export default GoogleMap;
