export default class Utils {
    public static getElem<T extends HTMLElement = HTMLElement>(id: string): T {
        const elem = document.getElementById(id);
        if(!elem) return document.body as T;
        return elem as T;
    }
}
