// const loadData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data loaded successfully!");
//       // To simulate an error, you could use: reject("Failed to load data.");
//     }, 2000);
//   });
let cnt=0;
function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            cnt++;
        resolve(`dataset ${cnt} loaded!`);
        },1000);
    })
}
  
  // Handle the Promise
 fetchData()
 .then((result)=>{
    console.log(result);
    return fetchData();
 })
 .then((result)=>{
    console.log(result);
    return fetchData();
 })
 .then((result)=>{
    console.log(result);
 })