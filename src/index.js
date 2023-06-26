function updateTime() {
  //London
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    londonDateElement.innerHTML = moment().format("MMMM Do YYYY");
    londonTimeElement.innerHTML = moment()
      .tz("Europe/London")
      .format("h:mm:ss:SSS [<small>]A[</small>]");
  }

  //Ho Chi Minh City
  let hochiminhcityElement = document.querySelector("#hochiminh-city");
  if (hochiminhcityElement) {
    let hochiminhcityDateElement = hochiminhcityElement.querySelector(".date");
    let hochiminhcityTimeElement = hochiminhcityElement.querySelector(".time");
    hochiminhcityDateElement.innerHTML = moment().format("MMMM Do YYYY");
    hochiminhcityTimeElement.innerHTML = moment()
      .tz("Asia/Ho_Chi_Minh")
      .format("h:mm:ss:SSS [<small>]A[</small>]");
  }

  //Hawaii
  let hawaiiElement = document.querySelector("#hawaii");
  if (hawaiiElement) {
    let hawaiiDateElement = hawaiiElement.querySelector(".date");
    let hawaiiTimeElement = hawaiiElement.querySelector(".time");
    hawaiiDateElement.innerHTML = moment().format("MMMM Do YYYY");
    hawaiiTimeElement.innerHTML = moment()
      .tz("US/Hawaii")
      .format("h:mm:ss:SSS [<small>]A[</small>]");
  }
}

updateTime();
setInterval(updateTime, 1);

function updateCity(event) {
  setInterval(function () {
    let cityTimezone = event.target.value;
    if (cityTimezone === "local") {
      cityTimezone = moment.tz.guess();
    }
    let cityName = cityTimezone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimezone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
  <div class="city">
    <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format(
      "h:mm:ss:SSS"
    )} <small>${cityTime.format("A")}</small></div>
    </div>
    <a href="/" class="home-page">Back to Home page</a>
    `;
  }, 1);
}

let citiesSelectElement = document.querySelector("#select-city");
citiesSelectElement.addEventListener("change", updateCity);
