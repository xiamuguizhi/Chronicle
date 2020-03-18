/**
 * ViewImage.js
 * https://tokinx.github.io/view-image
 */
!
function(a) {
    a.extend({
        viewImage: function(b) {
            var c = a.extend({
                target: ".view-image img",
                exclude: "",
                delay: 300
            }, b);
            a(c.exclude).attr("view-image", !1), a(c.target).click(function() {
                var b = a(this).attr("src"),
                    d = a(this).attr("href"),
                    e = "",
                    f = "<style class='view-image-css'>.view-img{position:fixed;background:#fff;background:rgba(255,255,255,.92);width:100%;height:100%;top:0;left:0;text-align:center;padding:2%;z-index:999;cursor: zoom-out}.view-img img,.view-img span{max-width:100%;max-height:100%;position:relative;top:50%;transform: translateY(-50%);}.view-img img{animation:view-img-show .8s -0.1s ease-in-out}.view-img span{height:2em;color:#AAB2BD;overflow:hidden;position:absolute;top:50%;left:0;right:0;width:120px;text-align:center;margin:-1em auto;}.view-img span:after{content:'';position:absolute;bottom:0;left:0;transform: translateX(-100%);width:100%;height:2px;background:#3274ff;animation:view-img-load .8s -0.1s ease-in-out infinite;}@keyframes view-img-load{0%{transform: translateX(-100%);}100%{transform: translateX(100%);}}@keyframes view-img-show{0%{opacity:0;}100%{opacity:1;}}</style>";
                return a(this).attr("view-image") || a(this).attr("rel") ? void 0 : (e = b ? b : d, a("body").append(f + "<div class='view-img'><span>loading...</span></div>"), setTimeout(function() {
                    var b = new Image;
                    b.src = e, b.onload = function() {
                        a(".view-img").html("<img src=" + this.src + ">")
                    }, a(".view-img").click(function() {
                        a(".view-image-css").remove(), a(this).remove()
                    })
                }, c.delay), !1)
            })
        }
    })
}(jQuery);


