const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/templates/services')));


const clientBundles = './public/services';
const serverBundles = './templates/services';
const serviceConfig = require('./service-config.json');
// const services = require('./loader.js')(clientBundles, serverBundles, serviceConfig);


const Summary = require('./templates/services/Summary.js').default;
const MapBox = require('./templates/services/Map.js').default;
const Photos = require('./templates/services/PhotoGallery.js').default;
const Reviews = require('./templates/services/Reviews.js').default;
//const Details = require('./templates/services/App.js').default;
/*
const services = {
  //"Summary": Summary,
  //"MapBox": MapBox,
  //"PhotoGallery": Photos,
  "Reviews": Reviews,
  //"App": Details,
}
*/

const services = {
  "Summary": Summary,
  "MapBox": MapBox,
  "PhotoGallery": Photos,
  "Reviews": Reviews,
}


//console.log('SUMMARY >>> ', services.Summary);
//console.log('MAPBOX >>>', MapBox);
console.log('reviews >>> ', Reviews);
console.log('photogallery >>> ', Photos);

const React = require('react');
const ReactDom = require('react-dom/server');
const Layout = require('./templates/layout');
const App = require('./templates/app');
const Scripts = require('./templates/scripts');

const renderComponents = (components, props = {}) => {
  // console.log('components -->', components);
  return Object.keys(components).map(item => {
    console.log('TYPE OF COMPONENTS:: ', typeof components[item]);
    let component = React.createElement(components[item], props);
    return ReactDom.renderToString(component);
  });
};

app.get('/', (req, res) => {
  let components = renderComponents(services);
  console.log('components', components);
  res.end(Layout(
    'SDC Kelp',
    App(...components),
    Scripts(services)
  ));
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
})