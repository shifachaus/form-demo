import "./App.css";
import { useState } from "react";
import ProfileImage from "./Post/ProfileImage";

function App() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [designation, setDesignation] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isCode, setIsCode] = useState(0);
  // const [errors, setErrors] = useState({});

  const[profile_image, setProfileImage] = useState(null)


  function handleSubmit() {
    // const formData = new FormData();
    // formData.append('name', name);
    // formData.append('mobile', mobile);
    // formData.append('designation' ,designation);
    // formData.append('email', email);
    // formData.append('profile_image', profile_image);
    const data = { name, mobile, designation, email, profile_image };
    // console.log(profileImage);
  //  console.log(data);
    setLoading(!loading);
    fetch("https://interns-new.herokuapp.com/list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'multipart/form-data'
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(loading);
        setIsCode(data.code);
        console.log(data);
      });
  }



  function handleReset() {
    setName("");
    setEmail("");
    setDesignation("");
    setMobile("");
    setIsCode(0);
  }

  function resetFields() {
    setName("");
    setEmail("");
    setDesignation("");
    setMobile("");
  
  }

  return (
    <div className="App">
      <div className="form">
        <ProfileImage setProfileImage={setProfileImage} />
        
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {name.length < 4 && (
          <p className="error">name must be 4 character long </p>
        )}
        <input
          type="number"
          id="number"
          value={mobile}
          placeholder="Enter your number"
          onChange={(e) => setMobile(e.target.value)}
        />
        {mobile.length !== 10 && (
          <p className="error">Mobile number must be 10 digit long</p>
        )}
        <input
          type="text"
          id="designation"
          value={designation}
          placeholder="Enter your designation"
          onChange={(e) => setDesignation(e.target.value)}
        />
        {!designation && <p className="error">Designation field is required</p>}
        <input
          type="email"
          id="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {!email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) && <p className="error">Invalid email id</p>}
        <button className="btn submit" onClick={handleSubmit}>
          submit
        </button>
        <button className="btn reset" onClick={handleReset}>
          Reset
        </button>
      </div>

      {/* {loading && <p className="waiting">Please wait...</p>}

      {isCode === 1 && <p>you have Successfully registered!</p> && */}
        {/* resetFields()} */}
      {/* {isCode === 1 && resetFields()} */}
    </div>
  );
}

export default App;
