function updateTime() {
  //London
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  londonDateElement.innerHTML = moment().format("MMMM Do YYYY");
  londonTimeElement.innerHTML = moment()
    .tz("Europe/London")
    .format("h:mm:ss:SSS [<small>]A[</small>]");

  //Ho Chi Minh City
  let hochiminhcityElement = document.querySelector("#hochiminh-city");
  let hochiminhcityDateElement = hochiminhcityElement.querySelector(".date");
  let hochiminhcityTimeElement = hochiminhcityElement.querySelector(".time");
  hochiminhcityDateElement.innerHTML = moment().format("MMMM Do YYYY");
  hochiminhcityTimeElement.innerHTML = moment()
    .tz("Asia/Ho_Chi_Minh")
    .format("h:mm:ss:SSS [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1);
