// 3.1
const squareOf = (n: number) => {
    return n * n
}
console.log(squareOf(2))
// console.log(squareOf('z')) // TS2345

// 3.2.1 any
let any_a: any = 666
let any_b: any = ['danger']
let any_c = any_a + any_b

// 3.2.2 unknown
let uk_a: unknown = 30
let uk_b = uk_a === 123
// let uk_c = uk_a + 10 // TS2571
if (typeof uk_a === 'number'){
    let ukd = uk_a + 10
}

// 3.2.3 boolean
let bool_a = true
let bool_b = false
const bool_c = true
let bool_d: boolean = true
let bool_e: true = true
// let bool_f: true = false // TS2322

// 3.2.4 number
let num_a = 1234
var num_b = Infinity * .10
const num_c = 5678
let num_d = a < b
let num_e: number = 100
let num_f: 26.218 = 26.218
// let num_g: 26.218 = 10 // TS2322

// 3.2.5 BigInt (From ES2020)
// let bi_a = 1234n
// let bi_b = 5678n
// let bi_c = bi_a + bi_b
// let bi_d = bi_a < 1235
// // let bi_e = 88.5n // TS1353
// let bi_f: bigint = 100n
// let bi_g: 100n = 100n
// // let bi_h: bigint = 100 // TS2322

// 3.2.6 string
let st_a = 'hello'
let st_b = 'billy'
const st_c = '!'
let st_d = st_a + ' ' + st_b + st_c
let st_e: string = 'zoom'
let st_f: 'john' = 'john'
// let st_g: 'john' = 'zoe' // TS2322

// 3.2.7 symbol
let sy_a = Symbol('a')
let sy_b: symbol = Symbol('b')
var sy_c = sy_a === sy_b
// var sy_d = sy_a + 'x' // TS2469
const sy_e = Symbol('e')
const sy_f: unique symbol = Symbol('f')
// let sy_g: unique symbol = Symbol('f') // TS1332
const sy_h = sy_e === sy_e
// const sy_i = sy_e === sy_f // TS2367

// 3.2.8 Object
// let obj_a: object = {
//     b: 'x'
// }
// let val_a = a.b // TS2339
let obj_b = {
    b: 'x'
}
let val_b = obj_b.b
let obj_c = {
    c: {
        d: 'f'
    }
}
let val_c = obj_c.c.d
let obj_d: { b: number } = {
    b: 12
}
let val_d = obj_d.b
