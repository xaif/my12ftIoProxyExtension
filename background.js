chrome.action.onClicked.addListener((tab) => {
    var url = 'https://12ft.io/proxy?q=' + encodeURIComponent(tab.url);
    chrome.tabs.create({ url: url });
  });
  