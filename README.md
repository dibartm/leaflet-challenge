# leaflet-challenge
# Earthquake Data Visualization

This project focuses on visualizing earthquake data using Leaflet. The application plots earthquakes from a chosen dataset on an interactive map. The markers on the map reflect the magnitude of the earthquake through their size and the depth of the earthquake through their color.

## Dataset Selection

1. Visit the [USGS GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page.
2. Choose a dataset to visualize, such as "All Earthquakes from the Past 7 Days".
3. Obtain the JSON representation of the chosen dataset by clicking on the respective link.

## Data Visualization

- Map Creation:
  - Use Leaflet to create a map that plots all the earthquakes from the chosen dataset based on their longitude and latitude.

- Marker Customization:
  - The size of the data markers reflects the magnitude of the earthquake. Larger markers represent higher magnitude earthquakes.
  - The color of the data markers reflects the depth of the earthquake. Darker colors indicate greater depths.

- Popups:
  - Include popups that provide additional information about each earthquake when their associated marker is clicked.

- Legend:
  - Create a legend that provides context for the map data. The legend should indicate the relationship between marker size and earthquake magnitude, as well as the color scale corresponding to earthquake depths.

- Additional Features (Optional):
  - It is optional to plot a second dataset on the map to illustrate the relationship between tectonic plates and seismic activity. The dataset for tectonic plates can be found at [fraxen/tectonicplates](https://github.com/fraxen/tectonicplates).
  - Include other base maps to choose from to provide different visual representations.
  - Organize each dataset into separate overlays that can be turned on and off independently.
  - Add layer controls to the map for easy management of overlays.

---
