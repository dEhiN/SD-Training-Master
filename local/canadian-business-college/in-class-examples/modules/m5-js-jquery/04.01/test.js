// $("#div-two").append(`<h1>I've been appended!!</h1>`);

let jqTest = $(".jq-test");


$("#append-btn").click(function () {

    $(".jq-test").animate({
        border: "5px solid blanchedalmond"
    }, "slow", "linear");
});

jqTest.click(function () {
    jqTest.append(`<h1>We are all appends!</h1>`);
});

jqTest.dblclick(function () {
    jqTest.prepend(`<h1>We are all prepends!</h1>`);
});

$("p").click(function () {
    $("p").after(`<span><em>This is an em within a span!</em></span>`);
});

$("p").dblclick(function () {
    $("p").before(`<span><strong>This is a strong within a span!</strong></span>`);
})
