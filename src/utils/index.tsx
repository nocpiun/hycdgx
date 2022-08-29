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

    public static minecraftTextParser(text: string): Parsed[] {
        var splited = text.split("§");
        var parsed: Parsed[] = [];
        
        let tempColor = "";
        for(let i = 0; i < splited.length; i++) {
            if(i === 0) {
                if(text[0] === "§") {
                    parsed.push({
                        colorCode: splited[i][0],
                        text: splited[i].substring(1)
                    });
                } else {
                    parsed.push({
                        text: splited[i]
                    });
                }
                continue;
            }

            if(splited[i].length === 1) {
                tempColor = splited[i];
                continue;
            }
            
            if(tempColor !== "") {
                parsed.push({
                    effectCode: splited[i][0],
                    colorCode: tempColor,
                    text: splited[i].substring(1)
                });
                tempColor = "";
                continue;
            }

            parsed.push({
                colorCode: splited[i][0],
                text: splited[i].substring(1)
            });
        }

        return parsed;
    }

    public static minecraftCodeParser(effectCode: string): string {
        switch(effectCode) {
            case "k":
                return "garbled";
            case "l":
                return "bold";
            case "m":
                return "del";
            case "n":
                return "under";
            case "o":
                return "italic";
            case "r":
                return "reset";
            case "0":
                return "black";
            case "1":
                return "mediumblue";
            case "2":
                return "darkgreen";
            case "3":
                return "darkcyan";
            case "4":
                return "red";
            case "5":
                return "darkviolet";
            case "6":
                return "gold";
            case "7":
                return "lightgray";
            case "8":
                return "gray";
            case "9":
                return "#3F40FD";
            case "a":
                return "green";
            case "b":
                return "#3EFFFE";
            case "c":
                return "crimson";
            case "d":
                return "#FF77FF";
            case "e":
                return "yellow";
            case "f":
                return "white";
            default:
                throw new Error("Unknown effect code.");
        }
    }
}

interface Parsed {
    effectCode?: string
    colorCode?: string
    text: string
}
