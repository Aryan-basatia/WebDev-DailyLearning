// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

/*// callback hell
 fakeRequestCallback('Aryan.com/page1',function (response){
    console.log("it worked");
    console.log(response);
        fakeRequestCallback('Aryan.com/page2',function (response){
            console.log('it worked again',response);
                fakeRequestCallback('Aryan.com/page3',function (response){
                    console.log('it is not stoping working');
                    console.log(response);
                },function (err){
                    console.log('error!');
                    console.log(err);
                });
        },function (err){
            console.log('ohh! it show error',err)
        });
},function (err){
    console.log("it does not work",err);
}); */

/*fakeRequestPromise('hello.com/page1')
    .then(() => {
    console.log('it worked (page1)');
        fakeRequestPromise('hello.com/page2')
            .then(() =>{
            console.log('it worked again!!(pag2)');
                fakeRequestPromise('hello.com/page3')
                    .then(() => {
                        console.log("it is working again!!! (page 3)");
                    }).catch(() =>{
                        console.log('error!! (page 3)');
                })
        }).catch(() => {
            console.log('it is a error (page2)');
        });
}).catch(() => {
        console.log('its not working (pag1)');
    });*/

fakeRequestPromise('hello.com/page1')
.then((data) => {
    console.log('it worked (page1)');
    console.log(data);
    return fakeRequestPromise('hello.com/page2');
})
.then((data) => {
    console.log('it worked (page2)');
    console.log(data);
    return fakeRequestPromise('hello.com/page3');
})
.then((data) => {
        console.log('it worked (page3)');
        console.log(data);
})
.catch((err) => {
    console.log('Some request failed');
    console.log(err);
}) //Same catch for all value