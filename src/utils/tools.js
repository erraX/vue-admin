export function joinUrl(url1, url2) {
    if (url1[url1.length - 1] === '/') {
        return url1.substr(0, url1.length - 2) + url2;
    }

    return url1 + url2;
}
