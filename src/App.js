import './styles/App.css'
import Nav from './components/Nav'
import Input from './components/Input'
import Todos from './components/Todos'

function App() {
  return (
    <div className='App'>
      <div id='todoListPage' className='bg-half'>
        <Nav />
        <div className='conatiner todoListPage vhContainer'>
          <div className='todoList_Content'>
            <Input />
            <div className='todoList_list'>
              <ul className='todoList_tab'>
                <li>
                  <a href='#' className='active'>
                    全部
                  </a>
                </li>
                <li>
                  <a href='#'>待完成</a>
                </li>
                <li>
                  <a href='#'>已完成</a>
                </li>
              </ul>
              <div className='todoList_items'>
                <ul className='todoList_item'>
                  <Todos />
                </ul>
                <div className='todoList_statistics'>
                  <p> 5 個已完成項目</p>
                  <a href='#'>清除已完成項目</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
