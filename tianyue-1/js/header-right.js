$(function(){
	 $("#zyl").mouseover(function(){
        $("#zhao").css("display","block")
    })
    $(".ya").mouseout(function(){
    	$(".zhao").css("display","none")
    })
	$("#person-info").click(function(){
		$("#zul").toggle();
	})
})
