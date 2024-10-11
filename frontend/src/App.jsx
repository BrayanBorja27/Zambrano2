
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ListarSeguros from './Pages/ListarSeguros'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/listars" element={<ListarSeguros />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
