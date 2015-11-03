$(document).ready(function(){
	
	var expression = $("#screen").val();

	$("#clear").click(function() {
		$("#screen").val("");
	})
	
	$("#plus").click(function(){
		$("#screen").val($("#screen").val() + "+");
	})

	$("#minus").click(function(){
		$("#screen").val($("#screen").val() + "-");
	})

	$("#multiply").click(function(){
		$("#screen").val($("#screen").val() + "*");
	})

	$("#divide").click(function(){
		$("#screen").val($("#screen").val() + "/");
	})

	$(".number").click(function(){
		$("#screen").val($("#screen").val() + $(this).text())
	})
	
	$("#evaluate").click(function(){
		$("#screen").val(eval($("#screen").val()));
	})
})