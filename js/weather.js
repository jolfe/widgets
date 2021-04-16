const apiKey = "a6ab660c023e20774ac1624cac5c3108";
const proxy = "https://thingproxy.freeboard.io/fetch/https://";

let weatherButton = document.querySelector(".weatherCall");
weatherButton.addEventListener("click", () => {
  let long;
  let lat;
  let apiCall;
  let temperatureDegree = document.querySelector(".temperatureDegree");
  let temperatureDescription = document.querySelector(
    ".temperatureDescription"
  );
  let temperatureMax = document.querySelector(".temperatureMax");
  let temperatureMin = document.querySelector(".temperatureMin");
  let cityName = document.querySelector(".cityName");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      apiCall =
        proxy +
        "api.openweathermap.org/data/2.5/weather?lat=" +
        lat +
        "&lon=" +
        long +
        "&appid=" +
        apiKey +
        "";

      console.log(apiCall);

      async fetch(apiCall)
        .then(await response => {
          return response.json();
        })
        .then(data => {
          console.log("test");
          temperatureDegree.textContent =
            (((data["main"]["temp"] - 273.15) * 9) / 5 + 32).toFixed(0) + "°";
          temperatureDescription.textContent =
            data["weather"][0]["description"];
          temperatureMax.innerHTML =
            '<a style="color: #ff9f9f;">' +
            (((data["main"]["temp_max"] - 273.15) * 9) / 5 + 32).toFixed(0) +
            "°&#8593;</a>";
          temperatureMin.innerHTML =
            '<a style="color: #99bdf3;">' +
            (((data["main"]["temp_min"] - 273.15) * 9) / 5 + 32).toFixed(0) +
            "°&#8595;</a>";
          cityName.innerHTML =
            "Local Weather - " + "<b>" + data["name"] + "</b>";
        });
    });
  }
});
