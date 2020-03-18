/**
 * 简单js分页 https://github.com/52fhy/loadmore
 *
 * @name 静态分页
 *
 * Copyright (c) 夏目贵志 2020 修改
 */
 
 	/*去除链接以外的参数，防止被带参数恶心刷新*/
	
if (window.performance.navigation.type == 1) {
    if (top != self) {

        top.location = self.location;

    } else {

        var url = location.search;

        if (url) {

            var old_url = window.location.href;

            var new_url = old_url.substring(0, old_url.indexOf('?'));

            self.location = new_url;

        }

    }
} else {
    if (top != self) {

        top.location = self.location;

    } else {

        var url = location.search;

        if (url) {

            var old_url = window.location.href;

            var new_url = old_url.substring(0, old_url.indexOf('?'));

            self.location = new_url;

        }

    }
}
 
$(function(){

	/*初始化*/
	var counter = 0; /*计数器*/
	var pageStart = 0; /*offset*/
	var pageSize = 5; /*size*/
	
	/*首次加载*/
	getData(pageStart, pageSize);
	
	/*监听加载更多*/
	$(document).on('click', '.js-load-more', function(){
		counter ++;
		document.getElementsByTagName("title")[0].innerText = '夏目友人帐 - 第' + counter+'页';	
		let stateObj = {
			foo: "bar",
		};
		history.pushState(stateObj, "page 2", '?page/'+counter+'.html');		
		pageStart = counter * pageSize;
		
		getData(pageStart, pageSize);
	});
    
	
	function getData(offset,size){
		$.ajax({
			type: 'GET',
			url: 'blog.json?timestamp='+ new Date().getTime(), //这里offset,size无作用，仅方便调试
			dataType: 'json',
			success: function(reponse){

				var data = reponse.list;
				var sum = reponse.list.length;

				var result = '';
				
				/************业务逻辑块：实现拼接html内容并append到页面*****************/
				
				//console.log(offset , size, sum);
				
				/*如果剩下的记录数不够分页，就让分页数取剩下的记录数
				* 例如分页数是5，只剩2条，则只取2条
				*
				* 实际MySQL查询时不写这个不会有问题
				*/
				if(sum - offset < size ){
					size = sum - offset;
				}
				
				/*使用for循环模拟SQL里的limit(offset,size)*/
				for(var i=offset; i< (offset+size); i++){
					result +='<article>'+
							'<h2><a href="'+ data[i].url +'" >'+ data[i].title +'</a></h2>'+
							'<div class="meta">'+
							'<span class="item">'+
							'<i class="iconfont icon-calendar"></i>'+
							'<time datetime="'+ data[i].time1 +'">'+ data[i].time +'</time>'+
							'</span>'+
							'<span class="item"><i class="iconfont icon-tag"></i>'+ data[i].shuliang +'</span>'+
							'</div>'+
							'</article>';
				}

				$('.js-blog-list').append(result);
				
				/*******************************************/
	
				/*隐藏more*/
				if ( (offset + size) >= sum){
					$(".js-load-more").hide();
				}else{
					$(".js-load-more").show();
				}
			},
			error: function(xhr, type){
				alert('Ajax error!');
			}
		});
	}
});