

// index中要放banner和header

// 引入banner 因为banner并没有暴露一些东西给index用，所以就用下面的方法引入进来就可以了
require('./modules/banner')
require('./modules/header')

console.log('index')
//
//$(function(){
//		$('.nav-right-ul .first-li').mousemove(function(){
//			$('.car-in').css('display','block').mouseleave(function(){
//			$('.car-in').css('display','none')
//		})
//		})
//		$('.nav-right-ul .two-li').mousemove(function(){
//			$('.car-on').css('display','block').mouseleave(function(){
//			$('.car-on').css('display','none')
//		})
//		})