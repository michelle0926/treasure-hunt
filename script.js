//Step 1

$(".Step-one").click(function() {
    $(".Step-twoo, .Step-two").fadeIn();
});
$(".Step-one").click(function() {
    $("body").css("background-color", "steelblue");
});

//Step 2

$(".Step-two, .Step-twoo").mouseenter(function() {
    $(".Step-three").show();
});
$(".Step-two, .Step-twoo").mouseenter(function() {
    $("body").css("background-color", "cornflowerblue");
});


//Step 3 

$(".Step-three").dblclick(function() {
    $(".Step-four").slideToggle();
});
$(".Step-three").dblclick(function() {
    $("body").css("background-color", "dodgerblue"); 
});
//Step 4

$(".Step-four").hover(function() {
    $(".Step-five, .Step-fivee").slideDown();
});
$(".Step-four").hover(function() {
    $("body").css("background-color", "lightsteelblue");
});
// Step 5

$(".Step-five, .Step-fivee").dblclick(function() {
    $(".finale, .finalee").show();
});
$(".Step-five, .Step-fivee").dblclick(function() {
    $(".header, .main").css("display", "none");
});
$(".Step-five, .Step-fivee").dblclick(function() {    
    $("body").css("background-color", "royalblue");
});
