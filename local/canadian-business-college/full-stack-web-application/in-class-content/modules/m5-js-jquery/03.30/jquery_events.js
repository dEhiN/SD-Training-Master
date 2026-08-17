// Jquery event methods

$("#my_button").click(function () {
    $(this).hide();
})


$(".my_para").click(function () {
    // this keyword will pick on the unique one element you click
    $(this).hide();
})


$(".my_para").dblclick(function () {
    // this keyword will pick on the unique one element you click
    $(this).hide();
})


$(".my_para").mouseenter(function () {
    console.log("Mouse pointer is over the element");
    console.log(this);
})


$(".my_para").mouseleave(function () {
    console.log("Mouse pointer is leaving the paragraph");
});


$(".my_para").mousedown(function () {
    console.log("Mouse is pressed");
});


$(".my_para").mouseup(function () {
    console.log("pressed mouse is left");
});

// Jquery event methods

$("#my_button").click(function () {
    $(this).hide();
});


// hover method lets you handle mouse enter and mouse leave in the same element selector
$(".my_para").hover(function () {
    console.log("mouse has come over");
}, function () {
    console.log("mouse has left the element");
});


// on method to apply an event action
$(".my_para").on({
    click: function () {
        console.log("Paragraph was clicked!");
    },
    mouseenter: function () {
        console.log("Paragraph was entered by the cursor");
    },
    mouseleave: function () {
        console.log("Paragraph was left by the cursor");
    }
});