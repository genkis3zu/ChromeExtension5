chrome.runtime.onMessage.addListener((message, sender, sendRes) => {
    if (message.message == 'search_button_clicked') {
        searchOnGoogle(message.value);
    }
    return true;
});

function searchOnGoogle(search_val) {
    document.querySelector('input').value = search_val;
    Array.from(document.querySelectorAll('input')).filter(v=>v.name=='btnK').map(v=>v.click());
}