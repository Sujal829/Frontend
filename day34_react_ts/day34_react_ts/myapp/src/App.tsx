import './App.css'
import Counter from './components/Counter'
import FCExampe from './components/FCExample'
import List from './components/List'
import MyButton from './components/MyButton'
import User from './components/User'

const App=()=>{

  return(
    <div>
      <h1>Hello</h1>
      <FCExampe label='Label FC Example'>
        <div>
          Children
          <MyButton onClick={()=> alert('Clicked!')}>
            click
          </MyButton>
          <List 
            items={[1,2,3,4]}
            renderItem={(n)=><li>{n*2}</li>}
          />
          <Counter />
        </div>
        <User />
      </FCExampe>
    </div>
  )
}

export default App
