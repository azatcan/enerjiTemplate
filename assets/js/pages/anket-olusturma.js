// global varible
var sectionCounter = 1;
var pageCounter = 1;


$('#newSectionButton').on('click', function () {

    sectionCounter++;
    let activePage = $('*#pageButton.btn-success').attr('data-pagecontrolnumber');

    $('#selectSection').append('<option value="' + sectionCounter + '">' + sectionCounter + '</option>');

    // $('#questionSectionForm')
    $('[data-pagenumber="' + activePage + '"]')
        .find('#questionSectionForm')
        .append('<section id="section' + sectionCounter + '" class="section">' +
            '<div class="section-header">' +
            '<h3 class="mr-auto my-2">Bölüm ' + sectionCounter + '</h3>' +
            '<div class="dropdown">\n' +
            '<button class="btn waves-effect btn-sm" type="button" id="dropdownSectionHeader" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
            '<i class="fa fa-ellipsis-h"></i>\n' +
            '</button>\n' +
            '<div class="dropdown-menu dropdown-primary">\n' +
            '<a id="removeSectionButton" class="dropdown-item" href="javascript:void(0)">Sil</a>\n' +
            '</div>\n' +
            '</div>' +
            '</section>');

    // $('.section-control-area')
    $('[data-pagenumber="' + activePage + '"]')
        .find('.section-control-area')
        .append('<hr class="section-hr">' +
            '<div class="section-control">' +
            '<a href="#section' + sectionCounter + '" class="btn btn-light btn-sm">' + sectionCounter + '</a>' +
            '</div>');
});

// section seçme metodu
// $(document).on("click", ".section", function () {
//
//     $('.section').removeClass('border-primary shadow');
//     $(this).addClass('border-primary shadow');
//
// });

$(document).on('click', '#appendAnswerInput', function () {

    $(this)
        .parent()
        .prev()
        .append('<div class="input-group mb-4"><div class="input-group-prepend"><span class="input-group-text" id="basic-addon1">Yanıt Giriniz</span></div><input type="text" class="form-control"><div class="input-group-append"><button id="removeAnswerInput" class="btn btn-md btn-outline-danger m-0 px-3 py-2 z-depth-0 waves-effect" type="button" id="button-addon2"><i class="fa fa-minus"></i></button></div></div>');

});

$(document).on("click", '*#removeAnswerInput', function () {
    $(this)
        .parent()
        .parent()
        .remove();
});

$('#modalAddButton').click(function () {
    // let pageNumber = $('#selectPage').select2('data')[0].id;
    let sectionNumber = $('#selectSection').select2('data')[0].id;
    let questionType = $('#selectQuestion').select2('data')[0].id;

    if (questionType === "aciklama") {
        $('#section' + sectionNumber)
            .append('<section class="question-area">\n' +
            '<div class="row head">\n' +
            '<div class="col-12 d-flex align-items-center">\n' +
            '<label class="label mr-auto label-success fs-x1-5" for="">Açıklama</label>\n' +
            '<button style="display: none" type="button" class="btn btn-white btn-outline-success btn-sm waves-effect headButton"><i class="fal fa-edit text-success"></i>Düzenle</button>\n' +
            '<button style="display: none" type="button" class="btn btn-white btn-outline-success btn-sm waves-effect headButton"><i class="fal fa-bars text-success"></i>Seçenekler</button>\n' +
            '</div>\n' +
            '</div>\n' +
            '<hr>\n' +
            '<div class="row">\n' +
            '<div id="answerSection" class="col-12">\n' +
            '<div class="input-group mb-4">\n' +
            '<div class="input-group-prepend">\n' +
            '<span class="input-group-text">Açıklama Yazınız</span>\n' +
            '</div>\n' +
            '<input type="text" class="form-control">\n' +
            '</div>\n' +
            '</div>\n' +
            '</div>\n' +
            '</section>')
    } else if (questionType === "coktanSecmeli") {
        $('#section' + sectionNumber)
            .append('<section class="question-area">\n' +
                '<div class="row">\n' +
                '<div class="col-12 d-flex justify-content-center align-items-center">\n' +
                '<label class="label label-success fs-x1-5 mr-auto" for="">Çoktan Seçmeli</label>\n' +
                '<button style="display: none" type="button" class="btn btn-white btn-outline-success waves-effect btn-sm headButton"><i class="fal fa-edit text-success"></i>Düzenle</button>\n' +
                '<button style="display: none" type="button" class="btn btn-white btn-outline-success waves-effect btn-sm headButton"><i class="fal fa-bars text-success"></i>Seçenekler</button>\n' +
                '</div>\n' +
                '</div>\n' +
                '<hr>\n' +
                '<div class="row">\n' +
                '<div id="answerSection" class="col-12">\n' +
                '<div class="input-group mb-4">\n' +
                '<div class="input-group-prepend">\n' +
                '<span class="input-group-text">Soru Yazınız</span>\n' +
                '</div>\n' +
                '<input type="text" class="form-control">\n' +
                '</div>\n' +
                '<div class="input-group mb-4">\n' +
                '<div class="input-group-prepend">\n' +
                '<span class="input-group-text">Yanıt Giriniz</span>\n' +
                '</div>\n' +
                '<input type="text" class="form-control">\n' +
                '<div class="input-group-append">\n' +
                '<button id="removeAnswerInput" class="btn btn-md btn-outline-danger m-0 px-3 py-2 z-depth-0 waves-effect" type="button"><i class="fa fa-minus"></i></button>\n' +
                '</div>\n' +
                '</div>\n' +
                '<div class="input-group mb-4">\n' +
                '<div class="input-group-prepend">\n' +
                '<span class="input-group-text" id="basic-addon1">Yanıt Giriniz</span>\n' +
                '</div>\n' +
                '<input type="text" class="form-control">\n' +
                '<div class="input-group-append">\n' +
                '<button id="removeAnswerInput" class="btn btn-md btn-outline-danger m-0 px-3 py-2 z-depth-0 waves-effect" type="button"><i class="fa fa-minus"></i></button>\n' +
                '</div>\n' +
                '</div>\n' +
                '<div class="input-group mb-4">\n' +
                '<div class="input-group-prepend">\n' +
                '<span class="input-group-text" id="basic-addon1">Yanıt Giriniz</span>\n' +
                '</div>\n' +
                '<input type="text" class="form-control">\n' +
                '<div class="input-group-append">\n' +
                '<button id="removeAnswerInput" class="btn btn-md btn-outline-danger m-0 px-3 py-2 z-depth-0 waves-effect" type="button"><i class="fa fa-minus"></i></button>\n' +
                '</div>\n' +
                '</div>\n' +
                '</div>\n' +
                '<div class="col-12">\n' +
                '<a id="appendAnswerInput" class=""><i class="fal fa-plus-circle mr-2"></i>Başka bir seçenek ekleniyiz</a>\n' +
                '</div>\n' +
                '</div>\n' +
                '</section>')
    } else if (questionType === "cokluSecim") {
        $('#section' + sectionNumber)
            .append('<section class="question-area">\n' +
                '<div class="row">\n' +
                '<div class="col-12 d-flex justify-content-center align-items-center">\n' +
                '<label class="label label-success fs-x1-5 mr-auto" for="">Çoklu Seçim</label>\n' +
                '<button style="display: none;" type="button" class="btn btn-white btn-outline-success waves-effect btn-sm headButton"><i class="fal fa-edit text-success"></i>Düzenle</button>\n' +
                '<button style="display: none;" type="button" class="btn btn-white btn-outline-success waves-effect btn-sm headButton"><i class="fal fa-bars text-success"></i>Seçenekler</button>\n' +
                '</div>\n' +
                '</div>\n' +
                '<hr>\n' +
                '<div class="row">\n' +
                '<div id="answerSection" class="col-12">\n' +
                '<div class="input-group mb-4">\n' +
                '<div class="input-group-prepend">\n' +
                '<span class="input-group-text">Soru Yazınız</span>\n' +
                '</div>\n' +
                '<input type="text" class="form-control">\n' +
                '</div>\n' +
                '<div class="input-group mb-4">\n' +
                '<div class="input-group-prepend">\n' +
                '<span class="input-group-text">Yanıt Giriniz</span>\n' +
                '</div>\n' +
                '<input type="text" class="form-control">\n' +
                '<div class="input-group-append">\n' +
                '<button id="removeAnswerInput" class="btn btn-md btn-outline-danger m-0 px-3 py-2 z-depth-0 waves-effect" type="button"><i class="fa fa-minus"></i></button>\n' +
                '</div>\n' +
                '</div>\n' +
                '<div class="input-group mb-4">\n' +
                '<div class="input-group-prepend">\n' +
                '<span class="input-group-text" id="basic-addon1">Yanıt Giriniz</span>\n' +
                '</div>\n' +
                '<input type="text" class="form-control">\n' +
                '<div class="input-group-append">\n' +
                '<button id="removeAnswerInput" class="btn btn-md btn-outline-danger m-0 px-3 py-2 z-depth-0 waves-effect" type="button"><i class="fa fa-minus"></i></button>\n' +
                '</div>\n' +
                '</div>\n' +
                '<div class="input-group mb-4">\n' +
                '<div class="input-group-prepend">\n' +
                '<span class="input-group-text" id="basic-addon1">Yanıt Giriniz</span>\n' +
                '</div>\n' +
                '<input type="text" class="form-control">\n' +
                '<div class="input-group-append">\n' +
                '<button id="removeAnswerInput" class="btn btn-md btn-outline-danger m-0 px-3 py-2 z-depth-0 waves-effect" type="button"><i class="fa fa-minus"></i></button>\n' +
                '</div>\n' +
                '</div>\n' +
                '</div>\n' +
                '<div class="col-12">\n' +
                '<a id="appendAnswerInput" class=""><i class="fal fa-plus-circle mr-2"></i>Başka bir seçenek ekleniyiz</a>\n' +
                '</div>\n' +
                '</div>\n' +
                '</section>')
    } else if (questionType === "tablo") {
        $('#section' + sectionNumber)
            .append('')
    } else if (questionType === "acikUclu") {
        $('#section' + sectionNumber)
            .append('<section class="question-area">\n' +
                '<div class="row head">\n' +
                '<div class="col-12 d-flex align-items-center">\n' +
                '<label class="label mr-auto label-success fs-x1-5" for="">Açık Uçlu</label>\n' +
                '<button style="display: none" type="button" class="btn btn-white btn-outline-success btn-sm waves-effect headButton"><i class="fal fa-edit text-success"></i>Düzenle</button>\n' +
                '<button style="display: none" type="button" class="btn btn-white btn-outline-success btn-sm waves-effect headButton"><i class="fal fa-bars text-success"></i>Seçenekler</button>\n' +
                '</div>\n' +
                '</div>\n' +
                '<hr>\n' +
                '<div class="row">\n' +
                '<div id="answerSection" class="col-12">\n' +
                '<div class="input-group mb-4">\n' +
                '<div class="input-group-prepend">\n' +
                '<span class="input-group-text">Sorunuzu Yazınız</span>\n' +
                '</div>\n' +
                '<input type="text" class="form-control">\n' +
                '</div>\n' +
                '</div>\n' +
                '</div>\n' +
                '</section>')
    }

});

$(document).on('mouseenter', '.question-area', function () {
    $(this).find('.headButton').fadeIn();
});

$(document).on('mouseleave', '.question-area', function () {
    $(this).find('.headButton').fadeOut();
});

$(document).ready(function () {

    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var date = day + '.' + month + '.' + d.getFullYear();
    $('#showDate').text(date);

});

$(document).on("click", "*#pageButton", function () {

    $('*#pageButton').addClass('btn-light').removeClass('btn-success');
    $('*#btnGroupDrop1').addClass('btn-light').removeClass('btn-success');

    // Dropdown rengini ayaladım
    $(this)
        .next()
        .children('button')
        .removeClass('btn-light');

    // üç noktaya success class ekleme
    $(this)
        .next()
        .children('button')
        .addClass('btn-success');

    // bütün sayfaların isimlerini değiştirme
    $('*#pageButton').each(function (index) {
        let pageName = $(this).text().split(' ');
        $(this).text(pageName[1]);
    });

    // page butonlerın rengini ayarladım
    $(this).removeClass('btn-light');
    $(this).addClass('btn-success');
    $(this).text('Sayfa ' + $(this).text());


    let pageNumber = $(this).attr('data-pagecontrolnumber');

    $('.page').addClass('d-none');

    $("[data-pagenumber='" + pageNumber + "']").removeClass('d-none');

});

$('#newPageButton').on('click', function () {

    if (pageCounter < 5) {

        pageCounter++;

        $('#selectPage').append('<option value="' + pageCounter + '">' + pageCounter + '</option>');

        $('*#pageButton').each(function (index) {
            let pageName = $(this).text().split(' ');
            $(this).text(pageName[1]);
        });

        $('#pageControlSection')
            .append('<div class="d-flex align-items-center" id="buttonGroup">\n' +
                '<div class="btn-group btn-group-sm mr-4" role="group">\n' +
                '<button type="button" id="pageButton" data-pagecontrolnumber="' + pageCounter + '" class="btn btn-light btn-sm waves-effect main-button">Sayfa ' + pageCounter + '</button>\n' +
                '<div class="btn-group" role="group">\n' +
                '<button id="btnGroupDrop1" type="button" class="btn btn-light btn-circle btn-sm waves-effect group-drop-button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n' +
                '<i class="fa fa-ellipsis-h"></i>\n' +
                '</button>\n' +
                '<div class="dropdown-menu dropdown-menu-right" aria-labelledby="btnGroupDrop1">\n' +
                '<a id="removePageButton" class="dropdown-item" href="javascript:void(0)"><i class="fal fa-trash"></i> Sil</a>\n' +
                '<a class="dropdown-item" href="javascript:void(0)"><i class="fal fa-copy"></i> Kopyala</a>\n' +
                '<a class="dropdown-item" href="javascript:void(0)"><i class="fal fa-layer-plus"></i> Taşı</a>\n' +
                '</div>\n' +
                '</div>\n' +
                '</div>\n' +
                '</div>');

        $('.page').addClass('d-none');

        $('#pageArea').append('<div data-pagenumber="' + pageCounter + '" class="row page">\n' +
            '<div class="col-1 d-flex flex-column align-items-center">\n' +
            '<div class="section-control-area">\n' +
            '</div>\n' +
            '</div>\n' +
            '<div class="col-11 questions">\n' +
            '<div id="questionSectionForm">\n' +
            '</div>\n' +
            '</div>\n' +
            '</div>');

        $('*#pageButton')
            .not(this)
            .addClass('btn-light')
            .removeClass('btn-success');

        $('*#btnGroupDrop1')
            .not(this)
            .addClass('btn-light')
            .removeClass('btn-success');

        $('*#pageButton')
            .last()
            .removeClass('btn-light')
            .addClass('btn-success');

        $('*#btnGroupDrop1')
            .last()
            .removeClass('btn-light')
            .addClass('btn-success');

    }

});

$(document).on("click", "#removePageButton", function () {

    let pageNumber = $(this)
        .parent()
        .parent()
        .prev()
        .data('pagecontrolnumber');

    // sayfa silme işlemi
    $('[data-pagenumber="' + pageNumber + '"]').remove();

    // sayfa butonu silme işlemi
    $(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .remove();

    $('*#pageButton').each(function (index) {
        index++;
        $(this).attr("data-pagecontrolnumber", index);
        $(this).text(index);
    });

    $('*#pageButton').last().text('Sayfa ' + $('*#pageButton').last().text());

    $('.page').each(function (index) {
        index++;
        $(this).attr("data-pagenumber", index);
    });

    pageCounter--;

    // modal page işlemleri
    $('#selectPage').empty();
    $('*#pageButton').each(function (index) {
        index++;
        $('#selectPage').append('<option value="' + index + '">' + index + '</option>');
    });
});

$('#multipleChoiceQuestionAddButton').on("click", function () {

    $('.section.border-primary')
        .append('<section class="question-area">\n' +
            '<input type="text" id="questionType" hidden value="multipleChoiceQuestion">' +
            '<div class="row">\n' +
            '<div class="col-12 d-flex justify-content-center align-items-center">\n' +
            '<label class="label label-success fs-x1-5 mr-auto" for="">Soru</label>\n' +
            '<div class="d-flex">\n' +
            '<button type="button" class="btn btn-white btn-outline-success waves-effect"><i class="fal fa-edit text-success"></i>Düzenle</button>\n' +
            '<button type="button" class="btn btn-white btn-outline-success waves-effect"><i class="fal fa-bars text-success"></i>Seçenekler</button>\n' +
            '</div>\n' +
            '</div>\n' +
            '</div>\n' +
            '<hr>\n' +
            '<div class="row">\n' +
            '<div id="answerSection" class="col-8">\n' +
            '<div class="input-group mb-4">\n' +
            '<div class="input-group-prepend">\n' +
            '<span class="input-group-text">Soru Yazınız</span>\n' +
            '</div>\n' +
            '<input type="text" class="form-control">\n' +
            '</div>\n' +
            '<div class="input-group mb-4">\n' +
            '<div class="input-group-prepend">\n' +
            '<span class="input-group-text">Yanıt Giriniz</span>\n' +
            '</div>\n' +
            '<input type="text" class="form-control">\n' +
            '<div class="input-group-append">\n' +
            '<button id="removeAnswerInput" class="btn btn-md btn-outline-danger m-0 px-3 py-2 z-depth-0 waves-effect" type="button"><i class="fa fa-minus"></i></button>\n' +
            '</div>\n' +
            '</div>\n' +
            '<div class="input-group mb-4">\n' +
            '<div class="input-group-prepend">\n' +
            '<span class="input-group-text" id="basic-addon1">Yanıt Giriniz</span>\n' +
            '</div>\n' +
            '<input type="text" class="form-control">\n' +
            '<div class="input-group-append">\n' +
            '<button id="removeAnswerInput" class="btn btn-md btn-outline-danger m-0 px-3 py-2 z-depth-0 waves-effect" type="button"><i class="fa fa-minus"></i></button>\n' +
            '</div>\n' +
            '</div>\n' +
            '<div class="input-group mb-4">\n' +
            '<div class="input-group-prepend">\n' +
            '<span class="input-group-text" id="basic-addon1">Yanıt Giriniz</span>\n' +
            '</div>\n' +
            '<input type="text" class="form-control">\n' +
            '<div class="input-group-append">\n' +
            '<button id="removeAnswerInput" class="btn btn-md btn-outline-danger m-0 px-3 py-2 z-depth-0 waves-effect" type="button"><i class="fa fa-minus"></i></button>\n' +
            '</div>\n' +
            '</div>\n' +
            '</div>\n' +
            '<div class="col-4">\n' +
            '<select class="form-control" name="" id="">\n' +
            '<option value="1">Soru Tipi</option>\n' +
            '<option value="1">Ahmet</option>\n' +
            '<option value="1">Mehmet</option>\n' +
            '</select>\n' +
            '</div>\n' +
            '<div class="col-12">\n' +
            '<a id="appendAnswerInput" class=""><i class="fal fa-plus-circle mr-2"></i>Başka bir seçenek ekleniyiz</a>\n' +
            '</div>\n' +
            '</div>\n' +
            '</section>');

});

// headera bastığında soruları kapatan metod
// $(document).on('click', '.section-header', function(){
//     $(this).nextAll().slideToggle();
// });

$(document).on('click', '#removeSectionButton', function () {

    // tıklanılan section alanının numarasını bulma
    let number = $(this)
        .parent()
        .parent()
        .prev()
        .text();
    number = number.split(' ');

    // tıklanılan section alanının numarasıyla control butonunu dikey hr silme
    $('[href$="#section' + number[1] + '"]')
        .parent()
        .prev()
        .remove();

    // tıklanılan section alanının numarasıyla control butonunu silme
    $('[href$="#section' + number[1] + '"]')
        .parent()
        .remove();

    // tıklanılan section alanını silme
    $(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .remove();


});

$('#selectPage').on('change', function (e) {
    // alert($(this).text());
    let pageNumber = $('#selectPage').select2('data')[0].id;
    let sections = $('[data-pagenumber="' + pageNumber + '"]').find('.mr-auto.my-2');
    $('#selectSection').empty();
    sections.each(function (index) {
        let secName = $(this).text();
        secName = secName.split(' ');
        $('#selectSection').append('<option value="' + secName[1] + '">' + secName[1] + '</option>')
    });
});

$(document).on('change', '#descTextArea', function () {
    $('#descTextAreacontent').text($(this).val());
});

$('#descSaveButton').click(function () {
    $('#descTextAreacontent').text($('#descTextArea').val());
    $('#descTextArea').addClass('d-none');
    $('#descTextAreacontent').removeClass('d-none');
});

$('#descEditButton').click(function () {
    $('#descTextArea').removeClass('d-none');
    $('#descTextAreacontent').addClass('d-none');
});

$(document).on('click', '#multiselectedQuestion', function () {

    $('.section.border-primary')
        .append('<section class="question-area">\n' +
            '<input type="text" id="questionType" hidden value="multiSelect">' +
            '<div class="row">\n' +
            '<div class="col-12 d-flex justify-content-center align-items-center">\n' +
            '<label class="label label-success fs-x1-5 mr-auto" for="">Soru</label>\n' +
            '<div class="d-flex">\n' +
            '<button type="button" class="btn btn-white btn-outline-success waves-effect"><i class="fal fa-edit text-success"></i>Düzenle</button>\n' +
            '<button type="button" class="btn btn-white btn-outline-success waves-effect"><i class="fal fa-bars text-success"></i>Seçenekler</button>\n' +
            '</div>\n' +
            '</div>\n' +
            '</div>\n' +
            '<hr>\n' +
            '<div class="row">\n' +
            '<div id="answerSection" class="col-8">\n' +
            '<div class="input-group mb-4">\n' +
            '<div class="input-group-prepend">\n' +
            '<span class="input-group-text">Soru Yazınız</span>\n' +
            '</div>\n' +
            '<input type="text" class="form-control">\n' +
            '</div>\n' +
            '<div class="input-group mb-4">\n' +
            '<div class="input-group-prepend">\n' +
            '<span class="input-group-text">Yanıt Giriniz</span>\n' +
            '</div>\n' +
            '<input type="text" class="form-control">\n' +
            '<div class="input-group-append">\n' +
            '<button id="removeAnswerInput" class="btn btn-md btn-outline-danger m-0 px-3 py-2 z-depth-0 waves-effect" type="button"><i class="fa fa-minus"></i></button>\n' +
            '</div>\n' +
            '</div>\n' +
            '<div class="input-group mb-4">\n' +
            '<div class="input-group-prepend">\n' +
            '<span class="input-group-text" id="basic-addon1">Yanıt Giriniz</span>\n' +
            '</div>\n' +
            '<input type="text" class="form-control">\n' +
            '<div class="input-group-append">\n' +
            '<button id="removeAnswerInput" class="btn btn-md btn-outline-danger m-0 px-3 py-2 z-depth-0 waves-effect" type="button"><i class="fa fa-minus"></i></button>\n' +
            '</div>\n' +
            '</div>\n' +
            '<div class="input-group mb-4">\n' +
            '<div class="input-group-prepend">\n' +
            '<span class="input-group-text" id="basic-addon1">Yanıt Giriniz</span>\n' +
            '</div>\n' +
            '<input type="text" class="form-control">\n' +
            '<div class="input-group-append">\n' +
            '<button id="removeAnswerInput" class="btn btn-md btn-outline-danger m-0 px-3 py-2 z-depth-0 waves-effect" type="button"><i class="fa fa-minus"></i></button>\n' +
            '</div>\n' +
            '</div>\n' +
            '</div>\n' +
            '<div class="col-4">\n' +
            '<select class="form-control" name="" id="">\n' +
            '<option value="1">Soru Tipi</option>\n' +
            '<option value="1">Ahmet</option>\n' +
            '<option value="1">Mehmet</option>\n' +
            '</select>\n' +
            '</div>\n' +
            '<div class="col-12">\n' +
            '<a id="appendAnswerInput" class=""><i class="fal fa-plus-circle mr-2"></i>Başka bir seçenek ekleniyiz</a>\n' +
            '</div>\n' +
            '</div>\n' +
            '</section>');
});
