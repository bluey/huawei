$(function () {
  password();
});
function password() {
  $(".submit").blur("click",function () {

    if($(".password").val()!= $(".repass").val()){
      $(".regist_form h4").html("密码两次输入不一致");
      $(".regist_form h4").css("display","block");
    }
  }
  );
}
