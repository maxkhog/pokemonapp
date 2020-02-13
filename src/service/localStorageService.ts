function setItem(
    key: string = '',
    data: any = null,
): void {
    const storage: Storage = window.localStorage;
    const converted = JSON.stringify(data);
    storage.setItem(key, converted);
}

function getItem(key: string = ''): any {

    const storage: Storage = window.localStorage;
    const value: string | null = storage.getItem(key);
    if (!value) return null;
    return JSON.parse(value);
}




export default {setItem , getItem}