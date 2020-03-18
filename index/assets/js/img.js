/**
 * 灯箱 图片延迟加载设置
 *
 * @name img设置
 *
 * Copyright (c) 夏目贵志 2020 修改
 */

		$(".post").scrollLoad()
		$(document).ready(function () {
			$( ".fancybox").fancybox();
		});
		var imgs=$("img[data-src]");
		imgs.each(function(num,e){
			var _this=$(this);
			_this.attr("alt",_this.attr("data-src"));
		});		
		$(function() {
	   $(".post img").each(function(i) {
		  if (!this.parentNode.href) {
			 $(this).wrap("<a class=\"a_css\" href='" + this.alt + "' data-fancybox='fancybox' data-caption='" + this.alt + "'></a>")
		  }
	   });
		  $(".post div img").each(function(i) {
		  if (!this.parentNode.href) {
			 $(this).wrap("<a href='" + this.alt + "' data-fancybox='fancybox' data-caption='" + this.alt + "'></a>")
		  }
	   });
	});