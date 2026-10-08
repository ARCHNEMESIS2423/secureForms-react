import { useState,createContext} from 'react'
import './App.css'
import Header from './components/Header.jsx';
import IntroForm from './components/IntroForm.jsx';
import  GuestInfo  from "./components/GuestInfo";

export const AppContext = createContext(null)
function App() {
let [intro_formData,set_intro_formData] = useState({})
let [is_formDataSet,set_isFormDataSet] = useState(false)


  return (
    <AppContext.Provider value={{intro_formData:intro_formData,set_intro_formData:set_intro_formData,set_isFormDataSet:set_isFormDataSet}}>
      <Header />
      <div className='AppContent'>
        <IntroForm/>
        {is_formDataSet&&<GuestInfo/>}
      </div>          
    </AppContext.Provider>
  )
}

export default App
