console.log("Hello from the javascript file");

let user_fetch_button = document.getElementById("fetch_users");
let user_para_div = document.getElementById("div_for_user_para");

async function fetch_users() {
    let api_result = await fetch("http://localhost:8000/get_user_list");

    let the_user_data = await api_result.json();

    for (let user of the_user_data) {
        let my_para = document.createElement("p");
        my_para.innerText = "Users name - " + user.name + "\n User Age - " + user.age + "\n User City - " + user.city;
        user_para_div.appendChild(my_para);
    }
}

user_fetch_button.addEventListener("click", fetch_users);

// using click event
// user_fetch_button.onclick = fetch_users;