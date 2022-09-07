import './App.css';
import { useState } from 'react';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [error, setError] = useState(false)
  const [message, setMessage] = useState("")
  const [user, setUser] = useState({ firstName: "", lastName: "", email: "", password: "" })

  let name, value

  const HandleInput = (e) => {
    name = e.target.name
    value = e.target.value
    setUser({ ...user, [name]: value })
  }

  const HandleSubmit = (e) => {
    validate(user)
  }

  function validate(user) {
    const emailRegex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/
    if (!user.firstName && !user.lastName && !user.email && !user.password) {
      setMessage("All fields are required")
      setError(true)
    }
    else if (!user.firstName) {
      setMessage("First Name is required !!")
      setError(true)
    }
    else if (!user.lastName) {
      setError(true)
      setMessage("Last name is required !!")
    }
    else if (!user.email) {
      setError(true)
      setMessage("Email is required")
    }
    else if (!emailRegex.test(user.email)) {
      setError(true)
      setMessage("email format is incorrect")
    }
    else if (!user.password) {
      setError(true)
      setMessage("password is required")
    }
    else {
      setError(false)
      setMessage("")
      alert("Form submitted")
    }
  }

  return (
    <div className="container">
      <div className="para">
        <div className="para_container">
          <h1>Learn to paint by watching others</h1>
          <p>see how experiences painters create art in real-time. Watching scripted tutorials is great, but
            understanding how artists think is invaluable</p>
        </div>
      </div>
      <div className="right_container">
        <div className="offer">try it free for 7 days then <span> $20/mo there after</span></div>
        <div className="form_container">
          {error && <ErrorMessage>{message}</ErrorMessage>}
          <div id="error" ></div>
          <form name="myForm"  >
            <input name="firstName" onChange={HandleInput} value={user.firstName} type="text" placeholder="Enter first name" />
            <input name="lastName" onChange={HandleInput} value={user.lastName} type="text" placeholder="Enter second name" />
            <input name="email" onChange={HandleInput} value={user.email} type="email" placeholder="Enter email" />
            <input name="password" onChange={HandleInput} value={user.password} type="password" placeholder="Enter password" />
          </form>
          <div className="btn_container">
            <button onClick={() => HandleSubmit()}>Claim your free trail</button>
            <p>by clicking the button you are accepting the <a href="/">terms and conditions</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
