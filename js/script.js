$(document).ready(function() {
    $('.hide').hide();

    $('.hide,#design').on('click',function(){

        $('.hide,#design').toggle()
    });
    

    $('.hide').hide();

    $('.hide,#product').on('click',function(){

        $('.hide,#product').toggle()
    });

   
    $('.hide').hide();

    $('.hide,#development').on('click',function(){

        $('.hide,#development').toggle()
    });
    $(".work").mousemove(function(){
        var hover=$(this).attr("hover")
        $(this).css("border","3px solid red")
        $("#overlay").text(hover).show().offset($(this).offset());
    
    

}).mouseout (function(){
    $(this).css("border","none")
})



})