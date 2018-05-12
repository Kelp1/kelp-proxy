module.exports = (summary, mapbox, photos, reviews, details) => `
<div class = "container">
<div id="Summary">${summary}</div>
<div class="block1">
  <div id="MapBox" class="mapAndPhotos">${mapbox}</div>
  <div id="PhotoGallery">${photos}</div>
</div>
<div class="block2">
  <div id="Reviews">${reviews}</div>
  <div id="App">${details}</div>
</div>
</div>
`;