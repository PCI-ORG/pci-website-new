export function getSubstackEmbedLink(link: string) {
    const postLinkRegex = new RegExp(/(?<url>.*)\/p\/(?<slug>.*)/g);
    const r = postLinkRegex.exec(link);
    console.log(r !== null ? r.groups !== undefined ? r.groups.url : "" : "")
    if (!r || !r.groups || !r.groups.url || !r.groups.slug) {
        return;
    }
    const url = r.groups.url;
    const slug = r.groups.slug;
    const frameURL = `${url}/embed/p/${slug}`;
    console.log(frameURL)
    const destURL = new URL(frameURL);

    destURL.searchParams.append("origin", window.location.origin);
    destURL.searchParams.append("fullURL", window.location.href);
    const ret = `${destURL.toString()}`;
    console.log(ret);
    return ret;
}
