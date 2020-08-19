
// 简书的判断
var id, isRun = false;
id = $("._-hCAGG-DBGnLqDZezXfbr_0").text();
if (id === "即将跳转到外部网站") {
    isRun = true;
}
id = $("._3ynK7cIQE6ZYP-OGjNuW5P_0").text();
if (id === "安全性未知，是否继续") {
    isRun = true;
}
if (isRun) {
    chrome.storage.sync.get({jsOpen: true}, function(items) {
        if (items.jsOpen) {
            jsOpen();
        } else {
            var button = $("<button style=\"margin-top: 20px;\">直接跳转</button>").click(jsOpen);
            $("._3zKaPtMyr3HfhDiMWyCbjX_0").append(button);
        }
    });
}
function jsOpen() {
    var url = $("._2VEbEOHfDtVWiQAJxSIrVi_0").val();
    window.location = url;
}

// 知乎的判断
isRun = false;
id = $(".info").text();
if (id === "您即将离开知乎，请注意您的帐号和财产安全。") {
    isRun = true;
}
if (isRun) {
    chrome.storage.sync.get({zhOpen: true}, function(items) {
        if (items.zhOpen) {
            zhOpen();
        }
    });
}
function zhOpen() {
    var url = $(".link").text();
    window.location = url;
}