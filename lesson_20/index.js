function getInfo(request){

    let promise = new Promise(
        function(resolve, reject){  // function executor (ispolnitel`)
        const ok = Math.random()>0.3;

        if (ok){
            resolve({code: `polucheno${request}`})
        } else{
            reject({msg: `error!!! pri poluchenii ${request}`});
        }
    });


    return promise;
}

getInfo("polzovatel Nick")
    .then(
        response => {console.log(response);
            return getInfo("profile polzovatelya")
        })
    .then ( response => {
        console.log(response);
        return getInfo("photo")
    })
    .then (response => console.log(response))
    .catch (
        err => console.log(err)
    )
