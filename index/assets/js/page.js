/**
 * 简单js分页
 *
 * @name 静态分页
 *
 * Copyright (c) 夏目贵志 2020 修改
 */
var obj,j;
        var page = 0;
        var currentPage = 0;//当前页
        var listNum = 10;//每页显示<ul>数
        var PagesLen;//总页数
        var PageNum = 3;//分页链接接数(5个)
        window.onload = function(){
            obj = document.getElementById("paging").getElementsByTagName("li");
            j = obj.length//li的个数
            PagesLen = Math.ceil(j / listNum);//总页数
            upPage(0)
        }
        function upPage(p){
            currentPage = p
            //内容变换
            for (var i = 0; i < j; i++){
                obj[i].style.display="none"
            }
            for (var i = p * listNum; i < (p+1) * listNum; i++){
                if(obj[i])obj[i].style.display = "block";
                console.log(i);
            }
            //分页链接变换
            var strS = '<li><a href="#" onclick="upPage(0)">首页</a></li> ';//首页
            var PageNum_2 = PageNum % 2 == 0 ? Math.ceil(PageNum / 2)+1 : Math.ceil(PageNum / 2);
            var PageNum_3 = PageNum % 2 == 0 ? Math.ceil(PageNum / 2) : Math.ceil(PageNum / 2) + 1;
            console.log(PageNum_2,PageNum_3);
            var strC = "",startPage,endPage;
            if (PageNum >= PagesLen) {
                startPage = 0; 
                endPage = PagesLen - 1;
            }else if (currentPage < PageNum_2){ 
                startPage = 0; 
                endPage = PagesLen - 1 > PageNum ? PageNum : PagesLen - 1;
            }else {
                startPage=(currentPage+PageNum_3 >= PagesLen) ? PagesLen-PageNum - 1 : currentPage-PageNum_2 + 1;
                var t = startPage + PageNum;
                endPage =(t > PagesLen) ? PagesLen - 1 : t;
            }
            console.log(startPage,endPage);
            for (var i = startPage;i <= endPage; i++){
                 if (i == currentPage)strC += '<li class="active"><a href="#!/page/'+(i+1)+'" onclick="upPage('+i+')">'+(i+1)+'</a></li> '
                 else strC += '<li><a href="#!/page/'+(i+1)+'" onclick="upPage('+i+')">'+(i+1)+'</a></li> '

            }
            var strE = ' <li><a href="#!/page/'+(PagesLen-1+1)+'" onclick="upPage('+(PagesLen-1)+')">尾页</a></li> ';//尾页
            var strE2 = currentPage + 1 + "/" + PagesLen + "页" + "  共" + j + "条" ;//共*条 暂时不需要显示
			var strE3 = currentPage + 1 + "页";//共*条
            document.getElementById("page").innerHTML = strS + strC + strE;
			if(currentPage > 0){  
				document.getElementsByTagName("title")[0].innerText = '夏目友人帐 - 第' + strE3;
			}else{
				document.getElementsByTagName("title")[0].innerText = '夏目友人帐 - 记录友人与你';
            }			
        }
		
