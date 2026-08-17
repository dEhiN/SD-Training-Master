$("#the_button").click(function () {

    // load the content of a text file into a html element
    $("#content_para").load("test.txt", function (responseTxt, statusTxt, xhr) {
        if (statusTxt == "success") {
            console.log(responseTxt);
        }
        else {
            console.log(xhr.status);
        }

    });

});