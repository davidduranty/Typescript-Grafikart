// Alias et Generics

// type User = { firstname: string | number, lastname: string }
// type DateString = string //alias
// type id = string | number
// type Identity<ArgType> = (arg: ArgType) => ArgType
// type p = keyof User
// type username = User['firstname']

// const users = {
//     firstname: "John",
//     lastname: "John",
//     age: 36
// }

// type Users = typeof users

// function consoleSize<Type extends {length: number}>(arg: Type): Type {
//     console.log(arg.length)
//     return arg
// }

// const aab = consoleSize(['3', 2])

// function identity<ArgType>(arg: ArgType): ArgType {
//     return arg
// }

// function first<Type>(arg: Type[]): Type{
//     return arg[0]
// }
// const bb = first(["aze", "cze", "bze"])
// const aa = identity<number>(3)
// const cc: Array<string | number> = ["aze", "cze", 3]

// const a = "firstname"
// const n = 3
// const b = true
// const dates: DateString = "string"
// const d = null
// const arr = ['aze', 'aze', 'aze']
// const user: User = { firstname: 'John', lastname: 'Doe' }
// const date = new Date()
// const cb: (e: MouseEvent) => void = (e: MouseEvent): number => {
//     return 3
// }

// const compteur = document.querySelector('#compteur') 
// let i = 0;

// const increment = (e: Event) => {
//     e.preventDefault();
//     i++;
//     const span = compteur?.querySelector<HTMLButtonElement>('span')

//     if (span) {
//         span.innerText = i.toString()
//     }
   
// }

// function idea(id: number | string) {
//     if (typeof id !== 'number') {
//         console.log("Not a number" ) ;
        
//     }  else {
//         console.log(id * 3) 
            
//         }   
// }

// idea("bob")

// compteur?.addEventListener('click', increment)

// // Les classes en TS

// function reverse<T>(arr: readonly T[]): T[] {  // readonly pour ne pas modifier une propriété en entrée
//     return [...arr].reverse()
// }

// class A {
//     a = 3

//     log() {
//         console.log(this.a)
//     }
// }

// const aInstance = new A();
// aInstance.log();



// class B extends A {
//     log() {
//         console.log(this.a) // il faudarit mettre protected dans la class A pour y avoir accès
//     }
// }

// 

// class Point {
//     x = 0
//     y = 0
// }

// class Geometry {
//     x = 0
//     y = 0
//     surface = 0
// }

// function getX(p: Point) {
//     return p.x
// }

// getX(new Geometry());
// abstract class Geometry {
//     x = 0
//     y = 0
//     abstract surface () : number
// }

// class Triangle extends Geometry { 
//     x = 2
//     y = 2

//     surface() {
//         return 3
//     }
// }

class Geometrique {
    static #origin: {x: number, y: number}
        
    static {
        Geometrique.#origin = {x: 0, y: 0}
    }

    surface() {
        return 5
    }
}

class Triangle {
    constructor(x: number, y: number) {
        
    }

    surface() {
        return 3
    }
}

type InstantialbleShape = {
    new(x: number, y: number): {
        surface: () => number
    }
}

function shapeGenerator(shapeType: InstantialbleShape, x: number, y: number) {
    return new shapeType(x, y)
}

shapeGenerator(Geometrique, 10, 20)
shapeGenerator(Triangle, 10, 20)