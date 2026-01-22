function updateTime() {
  let LosAngelesElement = document.querySelector("#Los_Angeles");
  let LosAngelesDateElement = LosAngelesElement.querySelector(".date");
  let LosAngelesTimeElement = LosAngelesElement.querySelector(".time");
  let LosAngelesTime = moment().tz("America/Los_Angeles");

  LosAngelesDateElement.innerHTML = LosAngelesTime.format("MMMM Do YYYY");
  LosAngelesTimeElement.innerHTML = `${LosAngelesTime.format("h:mm:ss")} <small> ${LosAngelesTime.format("A")} </small>`;

  let LondonElement = document.querySelector("#london");
  let LondonDateElement = LondonElement.querySelector(".date");
  let LondonTimeElement = LondonElement.querySelector(".time");
  let LondonTime = moment().tz("Europe/London");

  LondonDateElement.innerHTML = LondonTime.format("MMMM Do YYYY");
  LondonTimeElement.innerHTML = `${LondonTime.format("h:mm:ss")} <small> ${LondonTime.format("A")} </small>`;

  let AucklandElement = document.querySelector("#auckland");
  let AucklandDateElement = AucklandElement.querySelector(".date");
  let AucklandTimeElement = AucklandElement.querySelector(".time");
  let AucklandTime = moment().tz("Pacific/Auckland");

  AucklandDateElement.innerHTML = AucklandTime.format("MMMM Do YYYY");
  AucklandTimeElement.innerHTML = `${AucklandTime.format("h:mm:ss")} <small> ${AucklandTime.format("A")} </small>`;
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city" >
    <div>
      <h2>${cityName}</h2>

      <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
  </div>
  
   <a href="#" class="home-link" id="home">← Back to homepage</a>
`;

  document.querySelector("#home").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.reload();
  });
}

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
