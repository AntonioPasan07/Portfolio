import Navbar from "./components/Navbar/index"
import Header from './components/Header/index'
import Profile from "./components/Profile"
import About from './components/About'
import CardContainer from "./components/CardContainer"
import EmailContact from "./components/Contact"
function App() {
  

  return (<>
    <Header/>
    <Profile/>
    <About/>
    <CardContainer/>
    <Navbar/>
    <EmailContact/>
   
    </>
  )
   
}

export default App
