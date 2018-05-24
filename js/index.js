

//下载
$('#install').on('click',function () {
    var r = confirm('确定下载？');
    if (r) {
        var isPhone = /iphone/gi.test(navigator.userAgent);
        if (isPhone) {
            installing()
        } else { alert('请在手机上使用浏览器打开本页面，或者扫描下面的二维码，即可安装') }
    }
});

//解决方法
$('#solve').on('click',function () {
    openMask()
});

//关解决方法
$('#close').on('click',function () {
    closeMask()
});

//关解决方法
$('#close_btn').on('click',function () {
    closeMask()
});



function closeMask() {
    $('.mask').css('display','none');
    $('body').css('background','rgba(0,0,0,0)');
}

function openMask() {
    $('.mask').css('display','block');
    $('body').css('background','rgba(0,0,0,0.2927)');
}

function installing() {
    setTimeout(showTips,2000);
    $('.down .img-down').css('display','none');
    $('.down .install').css('display','none');
    $('#refresh').css('display','block')
}

function showTips() {
    $('.download-tips').css('display','block');
    $('#refresh').css('display','none');
    $('.down').css('background','none');
}







