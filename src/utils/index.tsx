export default class Utils {
    public static getElem<T extends HTMLElement = HTMLElement>(id: string): T {
        const elem = document.getElementById(id);
        if(!elem) return document.body as T;
        return elem as T;
    }

    public static getImageSize(src: string): Promise<number[]> {
        return new Promise((resolve, reject) => {
            var image = new Image();
            image.src = src;
            image.onload = () => resolve([image.width, image.height]);
            image.onerror = (e) => reject(e);
        });
    }

    public static is<T = unknown>(obj1: T, obj2: T): boolean {
        if(!(typeof obj1 === "object" && typeof obj2 === "object")) {
            return obj1 === obj2;
        }
    
        var isEqual = true;
        
        for(const i in obj1) {
            if(typeof obj1[i] === "object" && typeof obj2[i] === "object") {
                if(!Utils.is(obj1[i], obj2[i])) isEqual = false;
                continue;
            }
    
            if(obj1[i] !== obj2[i]) isEqual = false;
        }
    
        return isEqual;
    }

    public static arrayIs<T extends any[]>(arr1: T, arr2: T): boolean {
        if(arr1.length !== arr2.length) return false;

        for(let i = 0; i < arr1.length; i++) {
            if(Utils.is(arr1[i], arr2[i])) {
                return false;
            }
        }

        return true;
    }
}
