/**
 * Created by Valentin on 16.01.14.
 */




window.onload = function () {

    var widgets = new Array();
    //Kalender
    widgets[0] = "<div class='deletewidget panel panel-primary col-md-3 col-md-offset-1' ><div class='panel-heading' > Kalender <i class='remove'>X</i> </div ><div class='panel-body'>";

    //Document
    widgets[1] = "<div class='deletewidget panel panel-primary col-md-3 col-md-offset-1' ><div class='panel-heading' > Document <i class='remove'>X</i> </div ><div class='panel-body'>";

    //MileStone
    widgets[2] = "<div class='deletewidget panel panel-primary col-md-3 col-md-offset-1' ><div class='panel-heading' > Milestone <i class='remove'>X</i> </div ><div class='panel-body'>";




    $("#aufklappen_action").click(function () {
		
		alert($("#widgetmenu").css("left"));
		var top = document.getElementById("#widgetmenu").style.left
		alert(top);
		
		
       	if ($("#widgetmenu").css("left") === "-12.8em" ) {
			
			$("#widgetmenu").animate({
            	left: "0em"
       		}, 300);
		}
		
		else {
			$("#widgetmenu").animate({
            	left: "-12.8em"
        	}, 300);
			
			
		}
			
    });
	
	
	
	/*
    $("#content").click(function () {
        $("#widgetmenu").animate({
            left: "-12.8em"
        }, 300);
    });
	*/

    $(function () {
        $("#todo").click(function () {
            $("#content").append(widgets[0]);
        });
    });
    $(function () {
        $("#document").click(function () {
            $("#content").append(widgets[1]);
        });
    });
    $(function () {
        $("#milestone").click(function () {
            $("#content").append(widgets[2]);
        });
    });

    $(function () {
        $(".remove").click(function () {
            $(this).closest(".panel").remove();
        });
    });

    $(function() {
        $( "#content" ).sortable();
        $( "#content" ).disableSelection();
    });

    $(".panel").click(function(){
        alert("HUI");
    });

}