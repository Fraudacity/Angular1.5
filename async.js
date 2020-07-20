async function fn( ){
    await setTimeout(() => {console.log("timer over")}, 2000); 
    console.log("immediately")
    return 99
}
console.log("after async")
fn().then((res)=>console.log(res))
