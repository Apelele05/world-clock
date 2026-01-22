let CapeTownElement = document.querySelector("#cape-town");
let CapeTownDateElement = CapeTownElement.querySelector(".date");
let CapeTownTimeElement = CapeTownElement.querySelector(".time");
let CapeTownTime = moment();

CapeTownDateElement.innerHTML = CapeTownTime.format("MMMM Do YYYY");
CapeTownTimeElement.innerHTML = `${CapeTownTime.format("h:mm:ss")} <small> ${CapeTownTime.format("A")} </small>`;

let LondonElement = document.querySelector("#london");
let LondonDateElement = LondonElement.querySelector(".date");
let LondonTimeElement = LondonElement.querySelector(".time");
let LondonTime = moment();

LondonDateElement.innerHTML = LondonTime.format("MMMM Do YYYY");
LondonTimeElement.innerHTML = `${LondonTime.format("h:mm:ss")} <small> ${LondonTime.format("A")} </small>`;

let AucklandElement = document.querySelector("#auckland");
let AucklandDateElement = AucklandElement.querySelector(".date");
let AucklandTimeElement = AucklandElement.querySelector(".time");
let AucklandTime = moment();

AucklandDateElement.innerHTML = AucklandTime.format("MMMM Do YYYY");
AucklandTimeElement.innerHTML = `${AucklandTime.format("h:mm:ss")} <small> ${AucklandTime.format("A")} </small>`;

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment();
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city" >
    <div>
      <h2>${cityName}</h2>

      <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
  </div>
  `;
}

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
