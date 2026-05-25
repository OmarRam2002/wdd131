document.getElementById("lastmodified").innerHTML = document.lastModified;
const windchill = document.getElementById("windchill");
const temperature = 82;
const windSpeed = 2;

function callcualteWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3) {
        return (35.74 + 0.625 * temperature - 35.75 * windSpeed ** 0.16 + 0.4275 * temperature + windSpeed ** 0.16)
    }
    else {
        return "N/A"
    }
}
console.log(callcualteWindChill(temperature, windSpeed))
windchill.innerHTML += callcualteWindChill(temperature, windSpeed);