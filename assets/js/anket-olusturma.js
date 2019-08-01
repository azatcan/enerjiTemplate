$('*#showQuestionPanel').on("click", function () {
    $('.question-type-section').toggleClass("active-question-type-section");
    $(this).toggleClass("text-success");
    $('.question-type > i').toggleClass("border-0");
    $('.question-type').toggleClass("border");
});
var sectionCounter = 1;
$('#newSectionButton').on('click', function () {
    sectionCounter++;
    $('#questionSectionForm').append('<section id="section' + sectionCounter + '" class="section"></section>');
    $('.section-control-area').append('<hr class="section-hr"><div class="section-control"><a href="#section' + sectionCounter + '" class="btn btn-light btn-sm">' + sectionCounter + '</a></div>');
});

$(document).on('click', '.section', function () {
    $('*.section').removeClass('border-primary');
    $(this).addClass('border-primary');
});

$('.question-type').hover(function () {

    if (!$('.question-type-section').hasClass('active-question-type-section'))
        $(this).children('.custom-tooltip').css('display', 'block');

}, function () {

    if (!$('.question-type-section').hasClass('active-question-type-section'))
        $(this).children('.custom-tooltip').css('display', 'none');

});

$(document).on('click', '#appendAnswerInput', function () {
    $('#answerSection').append('<div class="input-group mb-4"><div class="input-group-prepend"><span class="input-group-text" id="basic-addon1">Yanıt Giriniz</span></div><input type="text" class="form-control"><div class="input-group-append"><button id="removeAnswerInput" class="btn btn-md btn-outline-danger m-0 px-3 py-2 z-depth-0 waves-effect" type="button" id="button-addon2"><i class="fa fa-minus"></i></button></div></div>');
});

$(document).on("click", '*#removeAnswerInput', function () {
    $(this).parent().parent().remove();
});

$(document).ready(function () {
    var d = new Date();

    var month = d.getMonth() + 1;
    var day = d.getDate();

    var date = day + '.' + month + '.' + d.getFullYear();
    $('#showDate').text(date);

});

var pageCounter = 1;
$('#newPageButton').on('click', function() {
    if(pageCounter < 5){
        $('#pageControlSection').append('<div id="buttonGroup"><button class="btn btn-success btn-sm mr-4 text-nowrap waves-effect" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sayfa ' + (pageCounter + 1) + '<i class="fa fa-ellipsis-h"></i></button><div class="dropdown-menu"><a id="removePageButton" class="dropdown-item" href="#">Sil</a></div></div>');
        pageCounter ++;
    }
});

$(document).on("click", "#removePageButton", function() {
    $(this).parent().parent().remove();
    pageCounter--;
    let groups = $('*#buttonGroup');

    $('*#buttonGroup').each(function (index) {
        $(this).children("button").text("Sayfa " + (index + 1));
        $(this).children("button").append('<i class="fa fa-ellipsis-h"></i>');
    });
});