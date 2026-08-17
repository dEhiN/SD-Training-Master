// user_list.jsx

import './user_list.css'
import { useState, useEffect } from 'react'

function Show_users_list() {

    let [users_list, set_users_list] = useState([])

    // use effect hook to make sure api call is the first thing that happens in the component
    useEffect(function () {
        async function call_api() {
            let api_response = await fetch("http://localhost:8000/get_react_data");
            let user_data = await api_response.json();
            set_users_list(user_data);
        }
        call_api();
    }
    )

    // a function that runs on onMouseEnter event of the para and displays content in the console
    function para_mouse_enter(event) {
        console.log(event.target.innerHTML);
        console.log("Mouse Entered over the para");
    }

    // return html while iterating over users_list using map
    return (
        <>
            <h1>Users List Below</h1>
            <ol>
                {users_list.map((user) => (

                    <li>Users Name is - {user.name}, Users age is - {user.age},
                        Users hobby is - {user.hobby}, users city is - {user.city},
                        user country is - {user.country}</li>

                ))}
            </ol>
            <p onMouseEnter={para_mouse_enter}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem commodi esse, delectus sunt quam magnam aspernatur consequatur eligendi iure nemo labore optio repudiandae debitis molestias voluptas quas error dolorem praesentium?</p>
        </>
    )
}

export default Show_users_list;