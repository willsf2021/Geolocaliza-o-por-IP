let map = L.map('map').setView([34.08057, -118.07285], 13);
let marker = L.marker([51.5, -0.09]).addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

let topSection_ = document.getElementById("topSection");
const button_ = document.getElementById("button");

const ip_ = document.querySelector(".ipAddress");
const location_ = document.querySelector(".location");
const timezone_ = document.querySelector(".timezone");
const isp_ = document.querySelector(".isp");

ip_.textContent = "192.212.174.101"
location_.textContent = "Brooklyn, NY 10001"
timezone_.textContent = "UTC -05:00";
isp_.textContent = "SpaceX Starlink";


let dataHTML;



const API_KEY = "at_smHGWyQvMRTGmoQKLH1BoYXRSwykI"
const API_URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=`

document.getElementById("ip").addEventListener("input", function (e) {
    let valor = e.target.value;
    valor = valor.replace(/[^0-9.]/g, "");
    let partes = valor.split(".");
    if (partes.length > 4) {
        valor = partes.slice(0, 4).join(".");
    }
    valor = valor
        .split(".")
        .map((parte) => parte.substring(0, 3))
        .join(".");
    e.target.value = valor;
});

async function fetchIp() {
    const valor = document.getElementById("ip").value
    console.log(valor)


    let regex = /^(25[0-5]|2[0-4][0-9]|1?[0-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1?[0-9]?[0-9])){3}$/;
    if (!(regex.test(valor.trim())) || !valor) {
        alert("IP inválido! Digite um endereço de IP válido.");
        return
    }

    try {
        const response = await fetch(`${API_URL}${valor}`);
        const data = await response.json();
        fetchHTML(data);
    } catch (err) {
        // console.log(data.messages)
    }

}


function fetchHTML(data) {

    ip_.textContent = data.ip;
    location_.textContent = `${data.location.city}, ${data.location.region}, ${data.location.country}`
    timezone_.textContent = `UTC ${data.location.timezone}`;
    isp_.textContent = data.isp;

    fetchMap(data)

}

function fetchMap(data) {
    if (map) {
        map.remove();  // Remove o mapa atual
    }
    map = L.map('map').setView([data.location.lat, data.location.lng], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    let marker = L.marker([51.5, -0.09]).addTo(map);

    console.log(`Latidude: ${data.location.lat}, Longitude: ${data.location.lng}`)
}

function changeBg() {
    if (window.innerWidth > 768) {
        topSection_.style.backgroundImage = 'url("./assets/images/pattern-bg-desktop.png")';
    } else {
        topSection_.style.backgroundImage = 'url("./assets/images/pattern-bg-mobile.png")';
    }
}


changeBg();
window.addEventListener("resize", changeBg);
button_.addEventListener("click", fetchIp)




