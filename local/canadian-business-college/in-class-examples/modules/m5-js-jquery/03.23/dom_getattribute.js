// value get set

// storing elements in the variable
let my_result_para = document.getElementById("result_para");
let my_input = document.getElementById("user_value");
let another_input = document.getElementById("user_value_second");
let my_g_anchor = document.getElementById("my_google_anchor");
let my_img_e = document.getElementById("ph_img");

// set content in input value
function button_clicked_func() {
    let anchor_href_atr = my_g_anchor.getAttribute("href");
    my_result_para.textContent = anchor_href_atr;

    let attr_output = my_img_e.getAttribute("src");
    my_result_para.textContent = attr_output;
}
