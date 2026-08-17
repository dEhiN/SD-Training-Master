// Jquery event methods

$("#the_button").click(function () {

    // extract text out of elements that contains text example paragraph
    let the_para_text = $("#the_para").text();
    console.log(the_para_text);

    // extract the content between opening and closing html element tag
    let the_anchor_html = $("#anchor_g").html();
    console.log(the_anchor_html);

    //  extract value from Input, select, textarea elements
    let user_input = $("#user_input").val();
    console.log(user_input);
});