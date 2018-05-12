module.exports = (title, body, scripts) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <link rel="stylesheet" href="https://s3-us-west-1.amazonaws.com/kelp-summaries/style.css">
      <link rel="stylesheet" href="http://www.samgetlan.com/kelp-reviews/stylesheet.css">
      <link rel="stylesheet" href="https://s3.amazonaws.com/elasticbeanstalk-us-east-1-993565126814/lightbox.min.css">
      <link rel="stylesheet" href="https://s3.amazonaws.com/elasticbeanstalk-us-east-1-993565126814/style.css">
      <link rel="stylesheet" href="https://s3.amazonaws.com/kelp-apm/styles.css">
      <link rel="stylesheet" href="http://www.samgetlan.com/kelp-reviews/style-proxy.css">
      <title>${title}</title>
    </head>
    <body>
    ${body}
    </body>
    ${scripts}
  </html>
`;