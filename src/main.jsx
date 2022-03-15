import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import RoutesApp from './Routes'

ReactDOM.render(
  <BrowserRouter>
    <RoutesApp />
  </BrowserRouter>,
  document.getElementById('root')
)
