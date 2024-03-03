let string = "";
let buttons = document.querySelectorAll('button');
const input = document.querySelector('input');
let count = 0;
Array.from(buttons).forEach((button1) => {
    button1.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = string.slice(0, -1);
            input.value = string;
        }
        else {
            if (
                ("+-*/%.".includes(string[string.length - 1]) &&
                    "+-*/%.".includes(e.target.innerHTML))
            ) {
                alert("Can't put two operators one after the other");

            }
            else {
                console.log(e.target);
                string = string + e.target.innerHTML;
                input.value = string;
                console.log(e.target);
            }
        }

    })
})