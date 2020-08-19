document.addEventListener('DOMContentLoaded', function()
{   
    chrome.storage.sync.get({jsOpen: true, zhOpen: true}, function(items) {
        $("[name=js-open]:checkbox").prop("checked", items.jsOpen);
        $("[name=zh-open]:checkbox").prop("checked", items.zhOpen);
    });

    $("#js-open").change(function () {
        chrome.storage.sync.set({jsOpen: $('#js-open').is(':checked')}, function() {
        });
    });
    $("#zh-open").change(function () {
        chrome.storage.sync.set({zhOpen: $('#zh-open').is(':checked')}, function() {
        });
    });
});