	function mycheck(){
		var search = $("#search").val();	//获取input框内的值
		if(search == null || search == ""){
				alert("请填写关键词");	//如果值为空，提示用户填写
				return false;
		}else{//如果值不为空，提交表单
		var Setting = {}
		Setting.reviewCallback = function(regArray){
			
			var html = "<h2>以下是含有关键字的相关文章</h2>"
			$.each(regArray,function(){
				html =  html +  '<li class="list-group-item title"><div class="date">'+ this.time +'</div><a href="'+ this.url +'" target="_blank">'+ this.title +'</a></li>' + "" 

			})
			html + ""
		   document.getElementById("search1").innerHTML = html;
		}
		$("#search_form").siteSearch(Setting)

			}
	}
