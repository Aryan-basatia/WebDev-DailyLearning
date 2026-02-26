const figlet = require('figlet');

figlet('Aryan Basatia', function (err,data){
    if (err){
        console.log('Something went wrong');
        console.dir(err);
        return;
    }
    console.log(data);
});