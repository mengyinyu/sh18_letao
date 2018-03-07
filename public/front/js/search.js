/**
 * Created by Administrator on 2018/3/7.
 */

$(function () {
    function getHistory() {
        var history = localStorage.getItem("search_list") || '[]';
        var arr = JSON.parse(history);
        return arr;
    }

    function render() {
        var arr = getHistory();
        //console.log(arr);

        $(".lt_history").html(template("tpl", {arr: arr}));
    }

    render();
    //清空
    $(".lt_history").on("click", ".btn_empty", function () {
        mui.confirm("你确定要清空所有的历史记录吗？", "温馨提示", ["是", "否"], function (e) {
            //通过e.index就可以知道点击了那个按钮
            if (e.index === 0) {
                //删除缓存
                localStorage.removeItem('search_list');

                //重新渲染
                render();
            }

        });
    })

    //删除
    $(".lt_history").on("click", ".btn_delete", function () {

        var that = this;
        mui.confirm("你确定要删除这条历史记录吗?", "温馨提示", ["删了吧", "还是别"], function (e) {
            if (e.index === 0) {
                //下标
                var index = $(that).data("index");

                //数组
                var arr = getHistory();

                //删除数组的对应下标项
                arr.splice(index, 1);

                //重新设置
                //stringify  ify:化
                localStorage.setItem("search_list", JSON.stringify(arr));

                //重新渲染
                render();
            }
        })
    });

    //增加
    $(".lt_search button").on("click",function () {

        var value = $(".lt_search input").val().trim();
        $(".lt_search input").val('');
        if(value == "") {
            mui.toast("请输入搜索关键字");
            return;
        }

        var arr = getHistory();

        var index = arr.indexOf(value);
        if(index != -1) {
            arr.splice(index,1);
        }

        if(arr.length >= 10) {
            arr.pop();
        }

        arr.unshift(value);

        localStorage.setItem("search_list", JSON.stringify(arr));

        //重新渲染, 需要跳转到searList页面
        //render();
        location.href = "searchList.html?key="+value;
    });

});