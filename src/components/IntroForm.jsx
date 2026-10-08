import { useState, useContext } from "react"
import Small from '../partials/Small'
import { AppContext } from "../App"

export default function IntroForm(){
    let {set_intro_formData,set_isFormDataSet} = useContext(AppContext)
    let [error,setError] = useState(false)
    let [errorInfo,set_errorInfo] = useState("HELLO")
    let [inputErrors,setInputErrors] = useState({})

  function handleIntroForm(e) {
    e.preventDefault();
    
    let name = e.target.name.value
    let phone = e.target.phone.value
    let email = e.target.email.value
    
    if(!(name && phone && email)){
      setError(true)
      set_errorInfo("PLEASE FILL IN ALL THE FIELDS")
      let errors = {
        name_error: <Small ujumbe="your name is required" />,
        phone_error: <Small ujumbe="your phone number is required" />,
        email_error: <Small ujumbe="your email is required" />,
      }
      setInputErrors(errors)
      return
    }
    setError(false)

    let form_inputs = {
      name:name,
      phone:phone,
      email:email
    }
    e.target.name.value = ""
    e.target.phone.value = ""
    e.target.email.value = ""

    set_intro_formData(form_inputs)
    set_isFormDataSet(true)
  }



    return (
        <form onSubmit={(e)=>handleIntroForm(e)}>
        <div className="saira-form_header text-center p-2 border-b-1 border-blue-400 mb-10">
         { error && <p className="warning">WARNING {errorInfo}</p> }
          INTRODUCE YOURSELF
        </div>

        <label>
          <span className="saira-label">NAME<sup>*</sup></span>
          <input type="text" name="name"/>
        </label>
        {error && inputErrors.name_error}

        <label>
          <span className="saira-label">PHONE<sup>*</sup></span>
          <input type="tel" name="phone"/>
        </label>
       {error && inputErrors.phone_error}

        <label>
          <span className="saira-label">EMAIL<sup>*</sup></span>
          <input type="mail" name="email"/>
        </label>
        {error && inputErrors.email_error}

        <small><sup>*</sup> required</small>
        <button className="safe saira-button">TELL US</button>
      </form>
    )
}