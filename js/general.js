$(document).ready(function(){
	var modal = $("#modal");

   $("#addVolToggle").click(function (){
   		$("#modalTitle").html("Add Volunteer");
   		$("#submit").html("Add Volunteer");
   		modalToggle();
   });

   $("#addStudentToggle").click(function (){
         $("#modalTitle").html("Add Student");
         $("#submit").html("Add Student");
         modalToggle();
   });

   $("#editStudentToggle").click(function (){
         $("#modalTitle").html("Edit Student");
         $("#submit").html("Edit Student");
         modalToggle();
   });

   $("#addClassToggle").click(function (){
         $("#modalTitle").html("Add Class");
         $("#submit").html("Add Class");
         modalToggle();
   });

   $("#close").click(function (){
   		modalToggle();
   });

   $("#addStop").click(function (){
   		if($("#stop" + $("#stop").val()).length<1){
	   		if($("#no_stop") != null){
	   			$("#no_stop").remove();
	   		}
	   		var row ="<tr id='stop" + $("#stop").val() + "'><td>" + $("#stop").val() + "</td>";
	   			row += "<td>" + $("#stop option:selected").html() + "</td></tr>"; 
	   		$("#quest_stops").append(row);

            var input = "<input type='hidden' name='stops[]' value='" + $("#stop").val() + "'>";
            $("#questForm").append(input);
   		}
   		
   	});

   function modalToggle(){
   		if(modal.is(":visible")){
   			modal.css('display', 'none');
   		}else{
   			modal.css('display', 'flex');
   		}
   }
}); 