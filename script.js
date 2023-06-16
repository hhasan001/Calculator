let input = document.getElementById('input-box');
let buttons = document.querySelectorAll('button');

let str="";
 let arr= Array.from(buttons);
 arr.forEach(num =>{
    num.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            str = eval(str);
            input.value = str;
        }
        else if(e.target.innerHTML == 'AC'){
            str="";
            input.value=str;
        }
        else if(e.target.innerHTML == 'DEL'){
            let size=str.length;
            str=str.substring(0,size-1);
            input.value=str;
        }
        else{
        str+= e.target.innerHTML;
        input.value=str;
        }
    })
 })
