document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#search_button').addEventListener('click', searchButtonClicked);
});

function searchButtonClicked() {
    const search_val = document.querySelector('#search_input_id').value;
    msg = {message:"search_button_clicked", value:search_val};
    // chrome.runtime.sendMessage(msg);

    chrome.tabs.query({active:true, currentWindow:true}, (tabs) => {
        if (tabs[0].id === undefined) return;
        chrome.tabs.sendMessage(tabs[0].id, msg);
    });
}