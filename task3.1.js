let cnt=0;
function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            cnt++;
        resolve(`dataset ${cnt} loaded!`);
        },1000);
    });
}
  
  // Handle the Promise
//  fetchData()
//  .then((result)=>{
//     console.log(result);
//     return fetchData();
//  })
//  .then((result)=>{
//     console.log(result);
//     return fetchData();
//  })
//  .then((result)=>{
//     console.log(result);
//  })
async function helper(){
    const data1=await fetchData();
    console.log(data1);
    const data2=await fetchData();
    console.log(data2);
    const dat3=await fetchData();
    console.log(data3);
}
helper();