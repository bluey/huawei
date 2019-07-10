window.onload=function () {
  topBarDrop();
  buycar();
  topAD();
  scroll();
  adchangeLR_hover();
  ad_span_hover();
  auto_scroll();
}
//导航栏更多精彩下拉效果
function topBarDrop() {
  var li=document.getElementById("dropdown");
  li.onmouseover=function () {
   $(".topBar-dropDown").css("display","block");
   $(".dropdown img").attr("src","img/topdecorationRed.png");
   li.style.color="crimson";
  }
  li.onmouseout=function () {
    $(".topBar-dropDown").css("display","none");
    $(".dropdown img").attr("src","img/bottomdecoration.png");
    li.style.color="#555";
  }
}
//购物车onMouseOver变色

function buycar() {
  var buycarli=document.getElementById("buycarli");
  buycarli.onmouseover=function() {
    $(".buycarimg").attr("src","img/buycarRed.png");
  }
  buycarli.onmouseout=function () {
    $(".buycarimg").attr("src","img/buycar.png");
  }
}
//打开页面的广告
var timer;
var i=4;
var waitTime=2;
function topAD() {
  var topBanner=$(".topBanner");
  var timmerlost=document.getElementById("timmerlost");
if(waitTime<=0){
  if(topBanner.css("display")=="block" && i!=0){
    timmerlost.innerText=i+"s后广告关闭";
    i=i-1;
  }else if (topBanner.css("display")=="none" && i!=0){
    topBanner.css("display","block");
  }else{
    topBanner.css("display","none");
    clearTimeout(timer);
  }
}
  waitTime--;
  timer=setTimeout("topAD()",1000);
}
//bigbanner滚动广告
var big_banner_timer;
var big_banner_imgnum=0;
function scroll() {
if(big_banner_imgnum<6){
  big_banner_imgnum++;

  var addr="url('img/bigBanner%20("+big_banner_imgnum+").jpg')";
  $(".big_ad").css("background-image",addr);
}else{
  big_banner_imgnum=0;
}
big_banner_timer=setTimeout("scroll()",3000);
}


// 左右切换按钮实现
function adchangeLR_hover() {
  $(".big_banner_right_bar table tr td img").hover(function () {
    $(this).css("background-color","rgba(182,176,176,0.8)");
    clearTimeout(big_banner_timer);
  },function () {
    $(this).css("background-color","rgba(182,176,176,0.2)");
    big_banner_timer=setTimeout("scroll()",3000);
  });
}
function adchangeL(){
  if(big_banner_imgnum<=1){
    big_banner_imgnum=6;
    var num=big_banner_imgnum;
    var addr="url('img/bigBanner%20("+num+").jpg')";
    $(".big_ad").css("background-image",addr)
  }else{
    big_banner_imgnum--;
    var num=big_banner_imgnum;
    var addr="url('img/bigBanner%20("+num+").jpg')";
    $(".big_ad").css("background-image",addr);
  }
}
function adchangeR(){
  if(big_banner_imgnum>=6){
    big_banner_imgnum=1;
    var num=big_banner_imgnum;
    var addr="url('img/bigBanner%20("+num+").jpg')";
    $(".big_ad").css("background-image",addr);
  }else{
    big_banner_imgnum++;
    var num=big_banner_imgnum;
    var addr="url('img/bigBanner%20("+num+").jpg')";
    $(".big_ad").css("background-image",addr);
  }
}
/*中部ADspanHover*/
function ad_span_hover() {
  $(".center_scroll_ad div span").hover(function () {
    $(this).css("background","white");
    var ad_id=$(this).attr("id").toString();
    $("#ad_img").attr("src",ad_id);
    clearTimeout(center_ad_timer);
  },function () {
    $(this).css("background","");
    center_ad_timer=setTimeout("auto_scroll()",2000);
  });
}
/*中部广告自动滚动*/
var center_ad_timer;
var center_ad_num=0;
function auto_scroll() {
  if(center_ad_num<7){
    center_ad_num++;
    var str="img/ad%20("+center_ad_num+").jpg";
    $("#ad_img").attr("src",str);
  }else{
    center_ad_num=0;
  }
  center_ad_timer=setTimeout("auto_scroll()",2000);
}

//废弃代码--------------------------------------------------------------------------------------------------------------
/* $("#model_2").hover(function () {
    $("#right_div2").css("display","block");
    $("#model_2 a p").css("color","black");
    $("#model_2 p a span").css("color","black");
  },function () {
    $("#right_div2").css("display","none");
    $("#model_2 a p").css("color","#848484");
    $("#model_2 p a span").css("color","#a6a6a6");
  });
  $("#model_3").hover(function () {
    $("#right_div3").css("display","block");
    $("#model_3 a p").css("color","black");
    $("#model_3 p a span").css("color","black");
  },function () {
    $("#right_div3").css("display","none");
    $("#model_3 a p").css("color","#848484");
    $("#model_3 p a span").css("color","#a6a6a6");
  });
  $("#model_4").hover(function () {
    $("#right_div4").css("display","block");
    $("#model_4 a p").css("color","black");
    $("#model_4 p a span").css("color","black");
  },function () {
    $("#right_div4").css("display","none");
    $("#model_4 a p").css("color","#848484");
    $("#model_4 p a span").css("color","#a6a6a6");
  });
  $("#model_5").hover(function () {
    $("#right_div5").css("display","block");
    $("#model_5 a p").css("color","black");
    $("#model_5 p a span").css("color","black");
  },function () {
    $("#right_div5").css("display","none");
    $("#model_5 a p").css("color","#848484");
    $("#model_5 p a span").css("color","#a6a6a6");
  });
  $("#model_6").hover(function () {
    $("#right_div6").css("display","block");
    $("#model_6 a p").css("color","black");
    $("#model_6 p a span").css("color","black");
  },function () {
    $("#right_div6").css("display","none");
    $("#model_6 a p").css("color","#848484");
    $("#model_6 p a span").css("color","#a6a6a6");
  });*/
