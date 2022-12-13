function remover() {
  const exploreDiv = document.querySelector("a[href='/explore/']")
    ?.parentElement?.parentElement;
  const reelsDiv = document.querySelector("a[href='/reels/videos/']")
    ?.parentElement?.parentElement;
  const allPostSeenDiv = document.querySelector("_ab6k _ab6m")?.nextSibling;

  reelsDiv && reelsDiv.remove();
  exploreDiv && exploreDiv.remove();
  allPostSeenDiv && allPostSeenDiv.remove();

  return true;
}

chrome.runtime.onMessage.addListener(remover);
