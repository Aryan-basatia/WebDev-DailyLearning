function fakeRequest() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Data received")
        },2000)
    })
}

async function call(){
   const result = await fakeRequest();
   console.log(result)
}
call()

fakeRequest().then(data => console.log(data));
