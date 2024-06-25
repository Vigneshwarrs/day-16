let display = document.getElementById("display");
let h1 = document.createElement("h1");
display.append(h1);

setTimeout(()=>{
    h1.innerText = `Counter: ${10}`;
    setTimeout(()={
        h1.innerText = `Counter: ${9}`;
        setTimeout(()={
            h1.innerText = `Counter: ${8}`;
            setTimeout(()={
                h1.innerText = `Counter: ${7}`;
                setTimeout(()={
                    h1.innerText = `Counter: ${6}`;
                    setTimeout(()={
                        h1.innerText = `Counter: ${5}`;
                        setTimeout(()={
                            h1.innerText = `Counter: ${4}`;
                            setTimeout(()={
                                h1.innerText = `Counter: ${3}`;
                                setTimeout(()={
                                    h1.innerText = `Counter: ${2}`;
                                    setTimeout(()={
                                        h1.innerText = `Counter: ${1}`;
                                        setTimeout(()={
                                            h1.innerText = "Happy Independance Day";
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);
