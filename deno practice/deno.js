// const food = Deno.args[0]
// if(food === 'hate'){
//     console.log('...... Deno is boarn')
// }else{
//     console.log('..... this egg need some love')
// }

const food = Deno.args[0];
const parent = Deno.args[1];
if (food === "love" && parent === "ryan") {
    console.log("🦕...Deno is born!");
} else {
    console.log("..... this egg need some love");
}

setTimeout(() => {
    console.log("check");
    console.table(Deno.metrics());
}, 1000);


