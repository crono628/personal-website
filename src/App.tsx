import './App.css'
import LeftSide from './components/leftside/Leftside'
import Rightside from './components/rightside/Rightside'

const App = () => {
  return (
    <div className="app-wrapper">
      <div className="leftside">
        <LeftSide />
      </div>
      <div className="rightside">
        <Rightside />
      </div>
    </div>
  )
}

export default App
