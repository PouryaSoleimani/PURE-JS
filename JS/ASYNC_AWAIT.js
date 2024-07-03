console.log(`%c ASYNC & AWAIT --------------------------`,`color:yellow`);

const fetchData= (url,callback)=>{
     setTimeout(  () => {
        let data = {name:"pourya"}
         callback(data)
    }, 2000);
}
// fetchData(`roocket.ir`,(data)=>{ console.log(data) })

const saveDataToDB = (data,callback)=>{
    setTimeout(() => {
        callback(true)
    }, 2000);
}

fetchData(`roocket.ir`,(data)=>{ 
   saveDataToDB(data,(status)=>{
    console.log(status);
   })
})