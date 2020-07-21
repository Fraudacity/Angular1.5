// async function fn( ){
//     await setTimeout(() => {console.log("timer over")}, 2000); 
//     console.log("immediately")
//     return 99
// }
// console.log("after async")
// fn().then((res)=>console.log(res))


class Theanable{
    constructor(num){
        this.num=num
    }
    then(resolve,reject){
        console.log(resolve)

        setTimeout(() => resolve(this.num*2),1000);
            
    }
}
async function f(){
    let result =await new Theanable(1);
    console.log(result);

}