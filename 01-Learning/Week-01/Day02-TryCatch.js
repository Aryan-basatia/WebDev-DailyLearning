try {
    hello.toUpperCase()
}catch {
    console.log("Error")
}
function yell(msg){
    try {
        console.log(msg.toUpperCase().repeat(5));
    }catch {
        console.log("Please enter a string");
    }
};
yell("hello");
yell(1);