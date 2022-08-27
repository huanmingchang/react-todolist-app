import './styles/App.css'
import Nav from './components/Nav'
import Input from './components/Input'

function App() {
  return (
    <div className='App'>
      <div id='todoListPage' className='bg-half'>
        <Nav />
        <div className='conatiner todoListPage vhContainer'>
          <div className='todoList_Content'>
            <Input />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
