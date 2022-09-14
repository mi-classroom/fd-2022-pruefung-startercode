const header = require('./partials/header.11ty');
const footer = require('./partials/footer.11ty');

exports.render = function (pageData) {

  const data = pageData;

  return `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1.0">
      <title>Cranach Digital Archive | ${data.title}</title>
      <link href="/fd-2022-live-coding/assets/main.css" rel="stylesheet">
      <link rel="icon" type="image/svg+xml" href="/fd-2022-live-coding/assets/images/favicon.svg">
    </head>
    <body data-mode="dark">
      <div class="wrap">
      ${header.html}
      ${data.content}
      ${footer.html}
    <script src="/fd-2022-live-coding/assets/js/main.js"></script>
  </body>
  </html>
  `;
}