import {renderToString} from 'react-dom/server'

export default function renderComponent(component) {
  return renderToString(component)
}
