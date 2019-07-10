window.onload=function () {
  addrow();
}
var tabRowLen = $("#mytable tbody tr").length;
function addrow() {
//获取表格的行数
  $("#add").on("click",function () {
    var id_num=tabRowLen+2;
    $("#mytable tbody").append(
      "<tr>"
      + "<td><input type='text' id='td_1_"+id_num+"' style='width: 500px'></td>"
      + "<td><input type='text' id='td_2_"+id_num+"' style='width: 100px'></td>"
      + "<td><input type='text' id='td_3_"+id_num+"'  style='width: 50px'></td>"
      + "<td></td>"
      + "<td><span onclick='sure(this)' id='"+id_num+"'>确认</span>/<span onclick='deleterow(this)'>删除</span></td>"
      +"</tr>"
    );

  });
}
function sure(r) {
  var num=$(r).attr("id");
  var str1=$("#td_1_"+num).val().toString();
  var str2=$("#td_2_"+num).val().toString();
  var str3=$("#td_3_"+num).val().toString();
  var cal=parseFloat(str2)*parseFloat(str3);
  var str4=cal;
  $("#"+num).html("编辑");
  $("#"+num).attr("onclick","editnum(this)");
  $(r).parent('').parent().children().eq(0).html(str1);
  $(r).parent('').parent().children().eq(1).html(str2);
  $(r).parent('').parent().children().eq(2).html(str3);
  $(r).parent('').parent().children().eq(3).html(str4);
}
var str2_1;
function editnum(r){
  var num=$(r).attr("id");
  str2_1=$(r).parent().parent().children().eq(1).html();
  var str3=$(r).parent().parent().children().eq(2).html();
  $(r).parent().parent().children().eq(2).html("<input type='text' id='td_3_"+num+"' value='"+str3+"'  style='width: 50px'>")
  $("#"+num).html("确认");
  $("#"+num).attr("onclick","surenum(this)");
}
function surenum(r) {
  var num=$(r).attr("id");
  var str2=str2_1;
  var str3=$("#td_3_"+num).val().toString();
  var cal=parseFloat(str2)*parseFloat(str3);
  var str4=cal;
  $(r).parent('').parent().children().eq(2).html(str3);
  $(r).parent('').parent().children().eq(3).html(str4);
  $("#"+num).html("编辑");
  $("#"+num).attr("onclick","editnum(this)");
}
function deleterow(r){
  $(r).parent().parent().remove();
}
