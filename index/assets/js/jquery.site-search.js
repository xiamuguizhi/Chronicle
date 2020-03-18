(function($){
    $.fn.siteSearch = function(Setting){
        var siteData = []
        var url = $(this).attr("data-url")
        var me = this

        $.ajax({
                url: url,
                dataType: "xml",
                async: false,
                success:callback
            }
        )

        function callback(xml){
            xmlToObjectArray(xml)
            formTableSubmit()
        }

        //    全站搜索
         function fullTextSearch (keyword) {
            var reg = new RegExp(keyword)
            var regArray = []
            $.each(siteData, function (n, v) {
                if (reg.test(this.title) || reg.test(this.content)) {
                    regArray.push(this)
                }
            })
            return regArray
        }

        //    将xml转换为对象的数组
         function xmlToObjectArray (xml) {
            var json = []
            $(xml).find("*:first").children().each(function (i) {
                var obj = {title: $(this).find("title").text(), content: $(this).find("content").text(), url: $(this).find("url").text(),time:$(this).find("time").text()}
                json.push(obj)
            })
             siteData = json
        }

        //    绑定搜索输入框获取输入框内容
        function  formTableSubmit() {
            $(this).submit(function (e) {
                e.preventDefault();
                var regArray = fullTextSearch($(me).find("input").val())
                if (regArray.length === 0) {
                    document.getElementById("search1").innerHTML = "没有搜索相关到文章";
                    return
                }
                review(regArray);
            })
        }
         function review (regArray) {
           if(typeof(Setting.reviewCallback) !== "undefined"){
               Setting.reviewCallback(regArray)
               return
           }
             return regArray
        }


    }
})(jQuery)