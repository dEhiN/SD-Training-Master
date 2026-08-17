// value get set

// storing elements in the variable
let my_result_para = document.getElementById("result_para");
let my_input = document.getElementById("user_value");
let another_input = document.getElementById("user_value_second");
let my_g_anchor = document.getElementById("my_google_anchor");
let my_img_e = document.getElementById("ph_img");

// setting the content of the attribute
function button_clicked_func() {
    my_img_e.setAttribute("src", "media/images/cl.jpeg");
    my_result_para.textContent = attr_output;
}
