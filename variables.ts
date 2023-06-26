//var scope available to nearest function

//let scope available to nearest block

function doSomething (){
    for (var i = 0; i < 5; i++){
        console.log(i)
    }

    console.log(i) // <--- available outside block
}

function doSomething2 (){
    for (let i = 0; i < 5; i++){
        console.log(i)
    }

    //console.log(i) // <--- not available outside block // typescript catches error before running
}