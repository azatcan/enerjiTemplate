$('*#showQuestionPanel').on("click", function () {
    $('.question-type-section').toggleClass("active-question-type-section");
    $(this).toggleClass("text-success");
    $('.question-type > i').toggleClass("border-0");
    $('.question-type').toggleClass("border");
});

$('#newSectionButton').on('click', function () {
    $('#questionSectionForm').append('<section class="section"></section>');
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