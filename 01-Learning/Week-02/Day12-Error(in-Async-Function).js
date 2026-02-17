const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 2000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

async function makeTwoRequest() {
    try {
        let data1 = await fakeRequest('/pag1');
        console.log(data1);
        let data2 = await fakeRequest('/pag2');
        console.log(data2);
    }catch (e){
        console.log("It's an Error!!");
        console.log(e);
    }
}


