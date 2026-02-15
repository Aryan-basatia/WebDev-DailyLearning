setTimeout(()=>{
    document.body.style.backgroundColor = 'red';
    setTimeout(()=>{
        document.body.style.backgroundColor = 'orange';
        setTimeout(()=>{
            document.body.style.backgroundColor = 'green';
            setTimeout(()=>{
                document.body.style.backgroundColor = 'yellow';
                setTimeout(()=>{
                    document.body.style.backgroundColor = 'blue';
                },1000);
            },1000);
        },1000);
    },1000);
},1000);

const delayedColor = (newColor,delay,doNext) =>{
    setTimeout(()=>{
        document.body.backgroundColor = newColor;
        doNext();
    },delay);
}

delayedColor('red',1000,()=>{
    delayedColor('orange',2000,()=>{
        delayedColor('blue',3000,()=>{
            delayedColor('yellow',4000,()=>{
                delayedColor('green',5000,()=>{
                    console.log("done!!");
                });
            });
        });
    });
});
