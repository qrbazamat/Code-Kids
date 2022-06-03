import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Auth from './Components/Auth';
import Signin from './Components/Auth/Signin';
import Signup from './Components/Auth/Signup';
import Header from './Components/Header';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='auth' element={<Auth />}>
            <Route path='sign-in' element={<Signin />} />
            <Route path='sign-up' element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App