$(function() {
    $(document).on('click', '.select-dropdown dt a', function(){
        $(this).parent().next().find("ul").toggle();
        $(this).parent('dt').toggleClass('choose-options');
    });
    $(document).on('click', '.select-dropdown dd a', function(){
        $(this).parents('dd').siblings('dt').removeClass('choose-options');
    });
    $(document).on('click', '.select-dropdown dd ul li a', function(){
        var text = $(this).html();
        $(this).parent().parent().parent().prev().find('span:eq(0)').html(text);
        $(".select-dropdown dd ul").hide();
        $(".select-dropdown dt a").removeClass('arrow-up');
        $(".select-dropdown dt a").addClass('arrow-down');
    });
    $(document).on('change', '.file-upload-btn input', function(){
        var fileName = $(this).val().replace(/C:\\fakepath\\/i, '');
        $('.selected-file').show();
        $('.selected-file span').html(fileName);
    });
    $(document).on('click', '.selected-file .remove', function(){
        $('.selected-file').hide();
    });
});