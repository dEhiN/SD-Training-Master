// create new element

// storing elements in the variable
// let my_result_para = document.getElementById("result_para");
// let my_input = document.getElementById("user_value");
// let another_input = document.getElementById("user_value_second");
// let my_g_anchor = document.getElementById("my_google_anchor");
// let my_img_e = document.getElementById("ph_img");
let my_div_column = document.getElementsByClassName("column")[0];


// creating new element in html using JS
function button_clicked_func() {
    // create element
    let my_new_para = document.createElement("img");
    // populate element
    my_new_para.setAttribute("src", "media/images/phone.png");
    my_new_para.setAttribute("class", "new_img_class");
    // place element in html as the first item using prepend
    my_div_column.prepend(my_new_para);
}
