	function mycheck(){
		var search = $("#search").val();	//获取input框内的值
		if(search == null || search == ""){
				alert("请填写关键词");	//如果值为空，提示用户填写
				window.location.reload(true); 
				return false;
		}else{//如果值不为空，提交表单
		var Setting = {}
		Setting.reviewCallback = function(regArray){
			
			var html = '<article><h4>以下是含有关键词"'+ search +'"的相关文章</h4></article><br>'
			$.each(regArray,function(){
				html =  html +  '<section class="post-item md:flex pb-12 animated fadeIn"><div class="content"><a href="'+ this.url +'" target="_blank"><h2 class="post-title text-xl font-extrabold mt-5 md:mt-0">'+ this.title +'</h2></a><div class="post-abstract text-gray-700 font-light my-4"></div><div class="text-gray-400 text-sm font-light">'+ this.time +'</div></div></section>' + "" 

			})
			html + ""
		   document.getElementById("search1").innerHTML = html;
		}
		$("#search_form").siteSearch(Setting)

			}
	}
