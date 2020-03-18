	function mycheck(){
		var search = $("#search").val();	//获取input框内的值
		if(search == null || search == ""){
				alert("请填写关键词");	//如果值为空，提示用户填写
				return false;
		}else{//如果值不为空，提交表单
		var Setting = {}
		Setting.reviewCallback = function(regArray){
			
			var html = '<article><h4>以下是含有关键词"'+ search +'"的相关文章</h4></article>'
			$.each(regArray,function(){
				html =  html +  '<article><h2><a href="'+ this.url +'" target="_blank">'+ this.title +'</a></h2><div class="meta"><span class="item"><i class="iconfont icon-calendar"></i><time datetime="'+ this.time +'">'+ this.time +'</time></span></div></article>' + "" 

			})
			html + ""
		   document.getElementById("search1").innerHTML = html;
		}
		$("#search_form").siteSearch(Setting)

			}
	}
