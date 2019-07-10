// 电影效果
$(function () {
  $("#allimg").mouseover(function (event) {
    var target = $(event.target);
    $("#bigimg").attr("src", target.attr("name") + "_b" + ".png");
    target.css("border", "solid red 1px");
  });
  $("#allimg").mouseout(function (event) {
    var target = $(event.target);
    target.css("border","none");
  });
});


