$(document).ready(function(){
    password = "芝麻不开门";
    $("button").click(function(){
        if($("input").val()==password){
            alert("开门成功！");
        }else{
            alert("密码错误");
        }
    });
});