
$(".col").click(function(){
    $(this).children(".hide").slideToggle()

});

    
    $(".work").mousemove(function(){
        
        var hover=$(this).attr("hover")
        $(this).css("border","3px solid yellow")
        $("text").css("display" , "show")
        $(".overlay").text(hover).show().offset($(this).offset());


    

}).mouseout (function(){
    $(this).css("border","none")
    $(this).css("text","")
})






