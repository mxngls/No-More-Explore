function remover() {
    var _a, _b, _c, _d;
    const exploreDiv = (_b = (_a = document.querySelector("a[href='/explore/']")) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement;
    const reelsDiv = (_d = (_c = document.querySelector("a[href='/reels/videos/']")) === null || _c === void 0 ? void 0 : _c.parentElement) === null || _d === void 0 ? void 0 : _d.parentElement;
    if (!!exploreDiv && !!reelsDiv) {
        reelsDiv.remove();
        exploreDiv.remove();
    }
    return true;
}
chrome.runtime.onMessage.addListener(remover);
//# sourceMappingURL=remover.js.map