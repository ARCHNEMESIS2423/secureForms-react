import { useContext } from "react";
import  {AppContext}  from "../App.jsx";
export default function GuestInfo(){
    let {intro_formData} = useContext(AppContext);

    return (
        <div className={`border-1 border-gray-200 p-3 rounded-lg`} >
            <span className="saira-form_header text-blue-600 block border-b-1 border-yellow-500 text-center">DETAILS PROVIDED BY USER</span>
            <p className="grid grid-cols-2 overflow-x-auto scrollbar-none">
                <span className="guestInfolabel saira-label">NAME:</span>
                <span className="guestInfo saira-text">{intro_formData.name}</span>

                <span className="guestInfolabel saira-label">PHONE:</span>
                <span className="guestInfo saira-text">{intro_formData.phone}</span>

                <span className="guestInfolabel saira-label">EMAIL:</span>
                <span className="guestInfo saira-text">{intro_formData.email??"hello@email.com"}</span>
            </p>
        </div>
    )
}