/* eslint-disable no-unused-vars */
// form.jsx

import './form.css';
import { useState } from "react";

function My_form_component() {
    let [userInfo, setUserInfo] = useState({
        user_name: "",
        user_age: 0,
        user_city: "",
        user_hobby: "",
        user_country: ""
    });

    function updateValue(event) {
        setUserInfo({
            // This brings in the existing value of the userInfo object, so the values don't get reset every time
            ...userInfo,
            // This will set the specific value based on the input field that triggered updateValue
            [event.target.name]: event.target.value
        });

        console.log(userInfo);
    }

    // function that runs on form submit and sends data to node js backend
    async function sendData(event) {
        // stop the form from reloading the whole page
        event.preventDefault();

        // post api request to node js server
        let api_response = await fetch("http://localhost:8000/react_data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        });
    }
    return (
        <>
            {/* <input type="text" name="user_name" placeholder="Users Name" onChange={updateValue}></input>
            <p>{uname}</p> */}
            <h1>User Information Form</h1>
            <form>
                <input type="text" name="user_name" placeholder="Users Name" onChange={updateValue}></input>
                <br />
                <input type="number" name="user_age" placeholder="Users Age" onChange={updateValue}></input>
                <br />
                <input type="text" name="user_city" placeholder="Users City" onChange={updateValue}></input>
                <br />
                <input type="text" name="user_hobby" placeholder="Users Hobby" onChange={updateValue}></input>
                <br />
                <input type='text' name='user_country' placeholder='Users Country' onChange={updateValue}></input>
                <br />
                <input type="submit" value="Send!" onClick={sendData}></input>
            </form>
        </>
    );
}

export default My_form_component;
