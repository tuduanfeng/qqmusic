;(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth < 600){
                docEl.style.fontSize = 100 * document.body.clientWidth / 750 + 'px';
            }else{
                docEl.style.fontSize = 100 * 600 / 750 + 'px';
            }
            
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
/* 公共方法 */
var cssTool = {
    toString:function(style){/* 将css对象转化为字符串形式，{样式名：样式值} ==> "样式名:样式值;" */
        var str = "";
        var getStyleName = function ( name ) {
            return name.replace(/([A-Z])/g, "-$1").toLowerCase(); 
        }
        for(let i in style){
            str += getStyleName(i) +': '+ style[i]+';';
        }
        return str;
    },
    toObject:function(css){/* 将style转化为对象形式，"样式名：样式值;" -> {样式名：样式值} */
        if(!css) return {};
        var o = {};
        var cssOne = css.split(";");
        for(let i in cssOne){
            var cssTwo = cssOne[i].split(":");
            if(cssTwo[0]){
                o[cssTwo[0].replace(/(^\s*)|(\s*$)/g,"")] = cssTwo[1].replace(/(^\s*)|(\s*$)/g,"");/*去掉首尾空格*/
            }
        }
        return o;
    }
};
var urlParams = {
    update:function(key,value){
        var u = this.getParams();
        if(typeof(key)=='string'){
            u[key] = value;
        }else if(typeof(key)=='object'){
            for(var i in key){
                u[i] = key[i];
            }
        }
        
        return this.getUrl(u);
    },
    get:function(key){
        var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return decodeURI(r[2]);
        }
        return "";
    },
    getParams:function(){
        var sear = location.search.replace("?",""),result = {};
        if(sear){
            sear.split("&").forEach(function(item,i){
                var a = item.split("=");
                result[a[0]] = a[1];
            });
        }
        return result;
    },
    getUrl:function(params){
        var result = "";
        for(var i in params){
            if(params[i]){
                result += "&"+i +"=" +params[i];
            }
        }
        return result.substr(1)? "?"+result.substr(1):"";
    }
}
var deepCopy = function(o) {
    if (o instanceof Array) {
        var n = [];
        for (var i = 0; i < o.length; ++i) {
            n[i] = deepCopy(o[i]);
        }
        return n;

    } else if (o instanceof Object) {
        var n = {}
        for (var i in o) {
            n[i] = deepCopy(o[i]);
        }
        return n;
    } else {
        return o;
    }
}

export default{
    cssTool: cssTool,
    deepCopy: deepCopy,
    urlParams: urlParams,
}