import CustomInput from './components/CustomInput'
import Counter from './components/Counter';

import './App.css';

function App(){
  
  return (
    <div>
      <CustomInput label={'First Name'}/>
      <CustomInput label={'Last Name'}/>
      <CustomInput label={'City'}/>
      <CustomInput label={'State'}/>
      <Counter />
    </div>
  )
}

export default App;