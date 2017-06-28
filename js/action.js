/**
 * Created by Jimmy on 2017/6/2.
 */
var content = "You can talk to me.\n\n";
var user = "JimmyU1";
var robot = "小螃蟹";
var msg = "11";
$(function () {
    $(document).keydown(function(event){
        if(event.keyCode == 13){
            $("#btn").click();
        }
    });

    function setEmpty(id) {
        $("#"+id).textbox('setValue','');
    }

    $("#btn").bind('click',function () {
        var message = $("#msg").val();
        addInfo();
        sendMessage(message);
        setEmpty("msg");
    });

    function addInfo(){
        msg = $("#msg").val();
        var info = "<p class='info-title'>" + user + "\t"+ new Date() +  "</p>" + "<p class='info'>" + msg + "</p> ";
        $("#content").append(info);

    }

    function addText(text) {
        var content = "<p class='text-title'>" + robot + "\t"+ new Date() + "</p>" + "<p class='text'>" + text + "</p> ";
        $("#content").append(content);
    }


    function sendMessage(message) {
        $.ajax({
            url: "http://www.tuling123.com/openapi/api?key=bbde1f790ee24aed8875a0b83b527668",
            type: "get",
            data: {info:message},
            dataType:"json",
            async: false,
            success: function (data) {
                var text = data.text;
                addText(text);
            },
            error: function () {
                $.messager.alert("Error",'There is a problem about sending message.');
            }
        });
    }
});





