import {renderToString} from 'react-dom/server'

export default function renderComponent(component) {
  return renderFullPage(renderToString(component))
}

function renderFullPage(c) {
  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <div id="app">${c}</div>
    <script src="bundle.js"></script>
  </body>
</html>
`
}
