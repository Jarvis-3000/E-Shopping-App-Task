console.log("I am in sw.js file")

let cacheData="appv1"

this.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(cacheData)
        .then(cache=>{
            cache.addAll([
                '/',
                '/cart'
            ])
        })
    )
})

this.addEventListener("fetch",(event)=>{
    if(!navigator.onLine){
        event.respondWith(
            caches.match(event.request)
            .then(res=>{
                if(res){
                    return res
                }
                // let requestUrl=event.request.clone()
                // fetch(requestUrl)     
            })
        )
        console.log("went offline")
    }

})