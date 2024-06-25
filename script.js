let display = document.getElementById("display");

function f1() {
    let span10 = document.createElement("span");
    span10.innerHTML = 10;
    display.append(span10);
    display.append(document.createElement("br"));
    f2()
    function f2() {
        let span9 = document.createElement("span");
        span9.innerHTML = 9;
        display.append(span9);
        display.append(document.createElement("br"));
        f3()
        function f3() {
            let span8 = document.createElement("span");
            span8.innerHTML = 8;
            display.append(span8);
            display.append(document.createElement("br"));
            f4()
            function f4() {
                let span7 = document.createElement("span");
                span7.innerHTML = 7;
                display.append(span7);
                display.append(document.createElement("br"));
                f5()
                function f5() {
                    let span6 = document.createElement("span");
                    span6.innerHTML = 6;
                    display.append(span6);
                    display.append(document.createElement("br"));
                    f6()
                    function f6() {
                        let span5 = document.createElement("span");
                        span5.innerHTML = 5;
                        display.append(span5);
                        display.append(document.createElement("br"));
                        f7()
                        function f7() {
                            let span4 = document.createElement("span");
                            span4.innerHTML = 4;
                            display.append(span4);
                            display.append(document.createElement("br"));
                            f8()
                            function f8() {
                                let span3 = document.createElement("span");
                                span3.innerHTML = 3;
                                display.append(span3);
                                display.append(document.createElement("br"));
                                f9()
                                function f9(){
                                    let span2 = document.createElement("span");
                                    span2.innerHTML = 2;
                                    display.append(span2);
                                    display.append(document.createElement("br"));
                                    f10()
                                    function f10() {
                                        let span1 = document.createElement("span");
                                        span1.innerHTML = 1;
                                        display.append(span1);
                                        display.append(document.createElement("br"));
                                        print()
                                        function print() {
                                            let printh = document.createElement("span");
                                            printh.innerHTML = "Happy Independance Day";
                                            display.append(printh);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

f1();