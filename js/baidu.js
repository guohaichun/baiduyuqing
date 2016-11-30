$(function () {
        var num=0;
        var falg=true;
        var h=$(window).height();

        touch.on("body","swipeup",".box",function () {

            if (!falg){
                document.title=num;
                return ;
            }
            num++;
            if (num==$("section").length){
                num=$("section").length-1;
                return ;
            }
            falg=false;
            $(".box").css({
                marginTop:-num*h
            })

        });
        touch.on("body","swipedown",".box",function () {

            if (!falg){
                document.title=num;
                return ;
            }
            num--;
            if (num==-1){
                num=0;
                return ;
            }
            falg=false;
            $(".box").css({
                marginTop:-num*h
            });
        });
        $(".box")[0].addEventListener("webkitTransitionEnd",function () {
            falg=true;
        });
    var falg=true;

    $(".meau").click(function(){
        if(falg==true){
        $(".login_box").css({
            "display":"none"
        });
        $(".ul").css({
            "display":"block",
            "animation-iteration-count":"1"
        });
            falg=false;
       }else{
            $(".meau").click(function() {
                $(".login_box").css({
                    "display": "block"
                });
                $(".ul").css({
                    "display": "none",
                    "animation-iteration-count": "1"
                })
            });
            falg=true;
        }
    })
});
