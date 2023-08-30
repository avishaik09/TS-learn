import {useContext} from 'react'
import { ThemeContext } from './Context';

const Theme = () => {
     const {theme,toggleTheme}=useContext(ThemeContext);

     return (
    <div className='boxContainer' style={{backgroundColor:theme==="dark"?"grey":"yellow"}}>
        <h1>Box</h1>
        <button onClick={toggleTheme}>Change Theme</button>
      
    </div>
  )
}

export default Theme
