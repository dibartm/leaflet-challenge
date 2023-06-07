
fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        for (let loc of data.features) {
            if (loc.geometry.coordinates[1] > 25 && loc.geometry.coordinates[0] < -60 && loc.properties.mag < 10) {
                var color = '';
                var size = 0;
                if (loc.properties.mag > 8) {
                    size = 32;
                } else if (loc.properties.mag > 6) {
                    size = 24;
                } else if (loc.properties.mag > 4) {
                    size = 18;
                } else if (loc.properties.mag > 2) {
                    size = 12;
                } else {
                    size = 8;
                }
                if (loc.geometry.coordinates[2] > 20) {
                    color = 'red';
                } else if (loc.geometry.coordinates[2] > 10) {
                    color = 'yellow';
                } else {
                    color = 'green';
                }
                if (loc.properties.mag) {
                    L.marker([loc.geometry.coordinates[1], loc.geometry.coordinates[0]], {
                        icon: L.icon({ iconUrl: color + 'marker.png', iconSize: [size, size] })
                    }).bindTooltip(loc.properties.place).addTo(eqmap);
                }
            }
        }
    });

var eqmap = L.map('map').setView([39.0119, -98.4842], 4);
console.log(eqmap);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; OpenStreetMap contributors'
}).addTo(eqmap);

// Create the legend control
var legendControl = L.control({ position: 'bottomright' });

// Define the onAdd behavior for the legend control
legendControl.onAdd = function (map) {
    var legendDiv = L.DomUtil.create('div', 'legend');

    // Define the legend labels and corresponding colors
    var legendItems = [
        { label: '<10', color: 'green' },
        { label: '10-20', color: 'yellow' },
        { label: '>20', color: 'red' }
    ];

    // Generate the legend items dynamically
    legendItems.forEach(function (item) {
        var itemDiv = L.DomUtil.create('div', 'legend-item');
        itemDiv.innerHTML = `<span class="legend-label" style="background-color: ${item.color};"></span>${item.label}`;
        legendDiv.appendChild(itemDiv);
    });

    return legendDiv;
};

// Add the legend control to the map
legendControl.addTo(eqmap);

