$(function(){
		//表单开始
		$("#inputSearch").focus(function(){		//聚焦
			$(this).addClass("focus").val("");
		})	
		$("#inputSearch").blur(function(){		//失焦
			$(this).removeClass("focus");
			if($(this).val()==""){
				$(this).val("输入商品名称");
			}
		})
		
		$("#inputSearch").keydown(function(event){
			if(event.keyCode==13&&$(this).val()!=""){
				alert($(this).val());
			}
		})
		//换肤
		var color=["#4261A4","#BA3AD9","#E44C79","#42C6D4","#FBA70E","#B9D731"];
		$("#skin>li").click(function(){
			$(this).addClass("selected").siblings().removeClass("selected");
			var index=$(this).index()//获取下标
			$("#caption").css("background-color",color[index]);
			$("h2").css("background-color",color[index]);
		})
		//二级导航栏
		$("#caption ul li").mouseover(function(){
			$(this).children("div").show();
		})
		$("#caption ul li").mouseout(function(){
			$(this).children("div").hide();
		})
         //图片切换
         $("#jnBrandTab ul li").each(function(index,item){
         	$(item).click(function(){
         		$(item).addClass("chos").siblings().removeClass("chos");
         		$("#jnBrandList ul li").animate({
         			"left":-index*780+"px"
         		},1000)
         	})
         	}).eq(0).trigger("click");//代码点击
//       	//热点
         	var del=$("<del class='hot'></del>")
         	$(".promoted").append(del);
//       	//鼠标滑过播放
         	var index=0;
         	var time=null;
         	$("#jnImageroll>div a").css("opacity",0.7);
         	$("#jnImageroll>div a").mouseover(function(){
         		$(this).addClass("chos").css("opacity","1").siblings().removeClass("chos").css("opacity","0.7");
         		index=$(this).index();//获取下标
         		$("#jnImageroll>a>img").eq(index).show().siblings().hide();
         	}).eq(0).trigger("mouseover");
//       	//自动播放
         	time=setInterval(function(){
         		index<4?index++:index=0;
         		$("#jnImageroll>div>a").eq(index).trigger("mouseover");//模拟自动轮播
         	},2000)
         	$("#JS_imgWrap").mouseover(function(){
         		clearInterval(time);
         	})
         	$("#JS_imgWrap").mouseout(function(){
         		time=setInterval(function(){
         		index<4?index++:index=0;
         		$("#jnImageroll>div>a").eq(index).trigger("mouseover");//模拟自动轮播
         	},2000)
         	})
//       	//详情页
         	$("#jnDetails .pro_size>ul>li").click(function(){
         		$(this).addClass("cur").siblings().removeClass("cur");
         		var text=$(this).text();//替换
         		$("#jnDetails .pro_size>strong").text(text);
         	})
//       	//计算总价
//       	//计算单价
//       	
//       	//数量
         	$("#num_sort").change(function(){
         		//获取单价
         		var singleprice=$(".tbDetailPrice strong").text();
         		var num=$(this).val();
         		//获取总价
         		var price=singleprice*num;
         		$(".pro_price strong").text(price);//替换
         	})
//       	//三个产品介绍
         	$(".tab_menu>ul>li").each(function(index,item){
         		$(item).click(function(){
         			$(item).addClass("chos").siblings().removeClass("chos");
         			$(".tab_box div").eq($(this).index()).removeClass("hide").siblings().addClass("hide")
         	}).eq(0).trigger("mouseover")
})
	})