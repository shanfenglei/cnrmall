

// index中要放banner和header

// 引入banner 因为banner并没有暴露一些东西给index用，所以就用下面的方法引入进来就可以了
require('./modules/banner')
require('./modules/header')

console.log('index')
$(function(){
		$('.nav-right-ul .first-li').mousemove(function(){
			$('.car-in').css('display','block').mouseleave(function(){
			$('.car-in').css('display','none')
		})
		})
		$('.nav-right-ul .two-li').mousemove(function(){
			$('.car-on').css('display','block').mouseleave(function(){
			$('.car-on').css('display','none')
		})
		})
				//为li添加鼠标移入事件
	//选择器.事件( function(){ ... } )
	$(".tab-item").mouseenter( function(){
		//操作当前标题有样式  当前标题的所有兄弟没有样式 siblings
		//console.log( this );		
		$(this).addClass("active")
			   .siblings()
			   .removeClass("active");
	
		//内容  
		//获取当前标题的下标  根据下标找内容
		var index = $(this).index();
		$(".products div").eq(index)
		                  .addClass("selected")
		                  .siblings()
		                  .removeClass("selected");
	} )
})
