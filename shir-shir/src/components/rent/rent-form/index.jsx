import { useState } from "react"
const RentForm = () => {
    
  const [message, setmessage] = useState()

  
  const handleClick = async () => {
    const data = {message}


    const response = await fetch('http://localhost:5000/rent', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })

    const json = await response.json()

    console.log("this is the rent response data", json)

  }

  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>Rent Car</div>
        
        </div>
       
        <div className='inputs'>
            <label htmlFor="message">Message</label>
            <div>
                 <textarea id='message' value={message}  onChange={(e) => setmessage(e.target.value) } type="text"/>
            </div>
        </div>
        

        <button onClick={handleClick}>
            Submit
        </button>
    
    </div>
  )
}

export default RentForm