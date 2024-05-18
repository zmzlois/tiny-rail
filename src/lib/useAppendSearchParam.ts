

export default function appendSearchParam({ key, value }: { key: string, value: string }) {

    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(key, value);
    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
    history.pushState({}, '', newUrl);
}
