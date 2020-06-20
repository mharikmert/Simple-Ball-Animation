                var gamePlaying = true, clickCounter = 0;

                    var red = document.getElementById('red');
                    var blue = document.getElementById('blue');
                    var green = document.getElementById('green');
                    var black = document.getElementById('black');
              
                    
                    function stopObject(object){
                        var obj = document.getElementById(object);
                        var id = setInterval(frame,5);
                        function frame(){
                            obj.style.top = 0 +"px";
                            obj.style.left = 0 + "px";
                            clearInterval(id);
                        }
                    }
                function moveBlack(color){
                    var box = document.getElementById(color);
                    var pos = 0;
                    var id = setInterval(frame , 5);
                    function frame(){
                        if(pos == 1800){
                            clearInterval(id);
                            pos = 1800;
                            id = setInterval(frame2,5);
                            function frame2(){
                                if(pos == 0){
                                    clearInterval(id);
                                    moveBlack('black');
                                }
                                else{
                                    pos -= 2;
                                    box.style.top = pos + "px";
                                    box.style.left = pos * 1.55556 + "px";
                                }
                            }
                        } else {
                            pos += 2;
                            box.style.top = pos + "px";
                            box.style.left = pos * 1.55556 + "px";
                            
                        }
                    }
                }
                
                function moveRed(color){
                    var box = document.getElementById(color);
                    var pos = 1800;
                    var id = setInterval(frame, 5);
                    function frame(){
                        if(pos == 0){
                            clearInterval(id);
                            id = setInterval(frame2,5);
                            function frame2(){
                                if(pos == 1800){
                                    clearInterval(id);
                                    moveRed('red');
                                }
                                else{
                                    pos+=2;
                                    box.style.top = pos + "px";
                                    box.style.left = pos * 1.55556 + "px";
                                }
                            }
                        } else{
                            pos-=2;
                            box.style.top = pos + "px";
                            box.style.left= pos * 1.55556 + "px";

                        }
                    }
                }
                function movePink(color){
                    var box = document.getElementById(color);
                    var pos = 1800;
                    var id = setInterval(frame, 5);
                    function frame(){
                        if(pos == 0){
                            clearInterval(id);
                            id = setInterval(frame2,5);
                            function frame2(){
                                if(pos == 1800){
                                    clearInterval(id);
                                    movePink('pink');
                                }else{
                                    pos += 2;
                                    box.style.top = pos + "px";
                                    box.style.left = 2800 - pos * 1.55556 + "px";
                                }
                            }
                        } else{
                            pos -= 2;
                            box.style.top = pos + "px";
                            box.style.left = 2800 - pos*1.55556 + "px";
                            
                        }
                    }
                }
                function moveBrown(color){
                    var box = document.getElementById(color);
                    var pos = 0;
                    var id = setInterval(frame, 5);
                    function frame(){
                        if(pos == 1800){
                            clearInterval(id);
                            id = setInterval(frame2,5);
                            function frame2(){
                                if(pos == 0){
                                    clearInterval(id);
                                    moveBrown('brown');
                                } else{
                                    pos -= 2;
                                    box.style.top = pos + "px";
                                    box.style.left = 2800 - pos*1.55556 + "px";  
                                 }
                            }
                        } else{
                            pos+=2;
                           box.style.top = pos + "px";
                            box.style.left = 2800 - pos*1.55556 + "px";
                        }
                     }
                }
                function moveIndigo(color){
                    var box = document.getElementById(color);
                    var pos = 1800;
                    var id = setInterval(frame,5);
                    function frame(){
                        if(pos == 900){
                            clearInterval(id);
                            pos = 0;
                            id = setInterval(newFrame,5);
                            function newFrame(){
                                if(pos == 2800){
                                    clearInterval(id);
                                    pos = 900;
                                    id = setInterval(frame3,5)
                                        function frame3(){
                                            if(pos == 0){
                                                clearInterval(id);
                                                moveCyan('indigo');
                                            }else{
                                                pos -= 5;
                                                box.style.top = pos + "px";
                                            }
                                        }
                                }
                                else{
                                    pos += 5;
                                    box.style.left = pos + "px";
                                }
                            }
                        }
                        else{
                            pos -= 5;
                            box.style.top = pos + "px";
                        }
                    }
                }
                function moveCyan(color){
                    var box = document.getElementById(color);
                    var pos = 0;
                    var id = setInterval(frame,5);
                    function frame(){
                        if(pos == 900){
                            clearInterval(id);
                            pos = 2800;
                            id = setInterval(newFrame,5);
                            function newFrame(){
                                if(pos == 0){
                                    clearInterval(id);
                                    pos = 900;
                                    id = setInterval(frame3,5);
                                    function frame3(){
                                        if(pos == 1800){
                                            clearInterval(id);
                                            moveIndigo('cyan');
                                        }else{
                                            pos += 5;
                                            box.style.top = pos + "px";
                                        }
                                    }
                                  
                                }else{
                                    pos -= 5;
                                    box.style.left = pos + "px";
                                }
                            }
                        }
                        else{
                            pos += 5;
                            box.style.top = pos + "px";
                        }
                    }
                }

                function moveMagenta(color){
                    var box = document.getElementById(color);
                    var pos = 0;
                    var id = setInterval(frame,5);
                    function frame(){
                        if(pos == 1400){
                            clearInterval(id);
                            pos = 0;
                            id = setInterval(newFrame,5);
                            function newFrame(){
                                if(pos == 1800){
                                    clearInterval(id);
                                    pos = 1400;
                                    id = setInterval(frame3,5);
                                    function frame3(){
                                        if(pos == 2800){
                                            clearInterval(id);
                                            moveChocolate('magenta');
                                        }else{
                                            pos += 5;
                                            box.style.left = pos + "px";
                                        }
                                    }
                                }else{
                                    pos += 5;
                                    box.style.top = pos + "px";
                                }  
                            }
                        }else{
                            pos += 5;
                            box.style.left = pos + "px";
                        }
                    }
                }
                function moveChocolate(color){
                    var box = document.getElementById(color);
                    var pos = 2800;
                    var id = setInterval(frame,5);
                    function frame(){
                        if(pos == 1400){
                            clearInterval(id);
                            pos = 1800;
                            id = setInterval(newFrame,5);
                            function newFrame(){
                                if(pos == 0){
                                    clearInterval(id);
                                    pos = 1400;
                                    id = setInterval(frame3,5);
                                    function frame3(){
                                        if(pos == 0){
                                            clearInterval(id);
                                            moveMagenta('chocolate');
                                        }else{
                                            pos -= 5;
                                            box.style.left = pos + "px";
                                        }
                                    }
                                } else{
                                    pos -= 5;
                                    box.style.top = pos + "px";
                                }
                            }
                        }
                        else{
                            pos -= 5;
                            box.style.left = pos + "px";
                        }
                    }

                }

                function indigoUpDown(color){
                    var circle = document.getElementById(color);
                    var pos = 1800,speed = 9;
                    var id = setInterval(frame,5);
                    function frame(){
                        if(pos == 0){
                            clearInterval(id);
                            id = setInterval(frame2,5);
                            function frame2(){
                                if(pos == 1800){
                                    clearInterval(id);
                                    indigoUpDown(color);
                                }else{
                                    pos+=2;
                                    circle.style.top = pos + "px";
                                }
                            }
                        }else{
                            pos-=2;
                            circle.style.top = pos + "px";
                        }
                    }
                }
                function magentaUpDown(color){
                    var circle = document.getElementById(color);
                    var pos = 0,speed = 9;
                    var id = setInterval(frame,5);
                    function frame(){
                        if(pos == 1800){
                            clearInterval(id);
                            id = setInterval(frame2,5);
                            function frame2(){
                                if(pos == 0){
                                    clearInterval(id);
                                    magentaUpDown(color);
                                }else{
                                    pos-=2;
                                    circle.style.top = pos + "px";
                                }
                            }
                        }else{
                            pos+=2;
                            circle.style.top = pos + "px";
                        }
                    }
                }
                function chocolateLeftRight(color){
                    var circle = document.getElementById(color);
                    var pos = 0,speed = 14;
                    var id = setInterval(frame,5);
                    function frame(){
                        if(pos >= 2800){
                            clearInterval(id);
                            pos = 2800;
                            id = setInterval(frame2,5);
                            function frame2(){
                                if(pos < 0){
                                    clearInterval(id);
                                    pos = 0;
                                    chocolateLeftRight(color);
                                }else{
                                    pos -= 3.5;
                                    circle.style.left = pos + "px";
                                }
                            }
                        }else{
                            pos += 3.5;
                            circle.style.left = pos + "px";
                        }
                    }
                }
                function cyanRightLeft(color){
                    var circle = document.getElementById(color);
                    var pos = 2800,speed = 14;
                    var id = setInterval(frame,5);
                    function frame(){
                        if(pos < 0){
                            clearInterval(id);
                            pos = 0;
                            id = setInterval(frame2,5);
                            function frame2(){
                                if(pos >= 2800){
                                    clearInterval(id);
                                    pos = 0;
                                    cyanRightLeft(color);
                                }else{
                                    pos += 3.5;
                                    console.log(pos);
                                    circle.style.left = pos + "px";
                                }
                            }
                        }else{
                            pos -= 3.5;
                            circle.style.left = pos + "px";
                        }
                    }
                }
                // write a initialize function for all reset 
                function start(){
                    moveBlack('black'); 
                    movePink('pink');               
                    moveRed('red');
                    moveBrown('brown');
                    /*moveIndigo('indigo');
                    moveCyan('cyan');
                    moveMagenta('magenta');
                    moveChocolate('chocolate');*/
                    indigoUpDown('indigo');
                    magentaUpDown('magenta');
                    //indigoUpDown('magenta'); 
                    /*chocolateLeftRight('chocolate');
                    cyanRightLeft('cyan');*/
                }
                var colors = {
                    black: document.querySelector('black'),
                    red: document.querySelector('red'),
                    brown: document.querySelector('brown'),
                    pink: document.querySelector('pink'),
                    indigo: document.querySelector('indigo'),
                    cyan:document.querySelector('cyan'),
                    magenta: document.querySelector('magenta'),
                    chocolate: document.querySelector('chocolate')
                }
                 document.querySelector('#stopButton').addEventListener('click',function(){
                    clickCounter++;
                    getLocation('black');
                    getLocation('red');
                    console.log('button was pressed ' + clickCounter + " times");
                    start();
                });

                if(clickCounter == 4){
                    stopObject('black');
                }
               /* var moving = false;
                var element = document.getElementById('black');
                element.addEventListener('transitionend',function(){
                    moving = true;
                });
                function getPosition(){
                    var rect = element.getBoundingClientRect();
                    console.log('top and left ' + rect.top,rect.left);
                    if(rect.top == 1816){
                        moving = false;
                    }
                    if(!moving){
                        window.requestAnimationFrame(getPosition);
                    }
                }
                window.requestAnimationFrame(getPosition);
                */
                var dom = document.querySelector('#bat');
                
                function batMove(e){
                    var x = e.clientX;
                    var y = e.clientY;
                    console.log(x,y);
                    dom.style.left = x - 600 + "px";
                    dom.style.top = y + "px";
                }

               
                document.querySelector('#bigBox').addEventListener('mousedown',function(){
                       mouseClicked(event);
                    });

                document.querySelector('#bigBox').addEventListener('mouseup',function(){
                    mouseReleased(event);
                });

                function mouseClicked(e){
                    dom.style.left = e.clientX + "px";
                    dom.style.top = e.clientY + "px";
                }
                function mouseReleased(e){
                    if(e.clientX > 1500)
                    dom.style.left = e.clientX - 200 + "px";
                    else 
                    dom.style.left = e.clientX + 200 + "px";
                }
         
