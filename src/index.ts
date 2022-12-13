const notify = () => {
  chrome.tabs.query(
    {
      url: ["*://*.instagram.com/", "*://*.instagram.com/*"],
    },
    (tabs) => {
      const currentTab = tabs[0];
      if (currentTab) {
        chrome.tabs.sendMessage(currentTab.id!, { event: "URL_Change" });
        return;
      }
      return;
    }
  );
};

setTimeout(notify, 500);

// On startup and update
chrome.tabs.onUpdated.addListener(notify);
