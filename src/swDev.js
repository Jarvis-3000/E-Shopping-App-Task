export default function swDev(){
    let swUrl=`${process.env.PUBLIC_URL}/serviceWorker.js`
    navigator.serviceWorker.register(swUrl)
    .then(res=>{
        console.log("respo",res)
    })
}