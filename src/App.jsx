import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import About from './component/About'
import Admissions from './component/Admissions'
import Departments from './component/Departments'
import Contact from './component/Contact'
import image from "./assets/head.jpg"

function Header(){
  return(
  <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/About">About</Link></li>
      <li><Link to="/Contact">Contact</Link></li>
      <li><Link to="/Admissions">Admissions</Link></li>
      <li><Link to="/Departments">Departments</Link></li>
    </ul>
  )
}
function App(){
  return(
    <div>
      <img src="./src/assets/head.jpg"height={200} width={1400}/>
      <marquee>Welcome to MALLAREDDY COLLEGE OF ENGINEERING FOR WOMEN(Autonomous)!!!!!</marquee>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/Admissions" element={<Admissions/>}></Route>
        <Route path="/Departments" element={<Departments/>}></Route>
        </Routes>
        </BrowserRouter>
        </div>
        
  )
}
export default App;