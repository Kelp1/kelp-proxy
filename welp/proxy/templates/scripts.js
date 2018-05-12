

module.exports = (items) => `
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
  ${Object.keys(items).map(item => {
    return `<script src="${item}Client.js"></script>`;
  }).join('\n')}
  <script>
    ${Object.keys(items).map(item => `
    console.log('ITEM :: ', ${item});
      ReactDOM.hydrate(
        React.createElement(${item}),
        document.getElementById('${item}')
      )`).join('\n')}
  </script>
`;
