var map = L.map('map').setView([45.066815, 8.495818], 13);

var ColdCarIcon = L.icon({
    iconUrl: '/images/pin.png',
    iconAnchor:   [45.066815, 8.495818],
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([45.066815, 8.495818], {icon: ColdCarIcon}).addTo(map)
    .bindPopup('Cold Car - Окіміано <br> 45.066815, 8.495818 <br> Вулиця Паняте №1 <br> 15040 Окіміано (AL) – ІТАЛІЯ <br> Телефон: +39 0142 400611 <br> Факс: +39 0142 809456')
    .openPopup();