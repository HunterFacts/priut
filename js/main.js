$('.login-button-container .btn').click(function(){
    $('.section-login').removeClass('hidden')
});

$('.close-card .material-icons').click(function(){
    $('.section-login').addClass('hidden')
});

$(".dropdown-trigger").dropdown({
    constrainWidth: false,
    coverTrigger: false
});
$('select').formSelect();
$('.nav-block-container .collection-item .btn').click(function(){
    let currentBtn = $(this);
    let collectionObject = currentBtn.parent();
    let collection = collectionObject.parent();


    $(collection).find('.btn').html('Занять до');
})