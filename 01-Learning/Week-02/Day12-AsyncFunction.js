/*
async function  hello(){
}

const sing = async () => {

    return 'la la la laa'
}

sing().then((data) => {
    console.log("Promise resolved with",data)
})*/

const login = async (username,password) => {
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'Aryan123') return 'Welcome!'
    throw 'Invalid Password'
}
login('Aryan')
.then(msg => {
    console.log("Logged In!!");
    console.log(msg);
})
.catch(err => {
    console.log('Error!!');
    console.log(err);
})