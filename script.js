let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {    

        let value = e.target.innerHTML;

        
        if (value === '=') {
            try {
                string = eval(string);  
            } catch {
                string = "Error";
            }
            input.value = string;
            return;     
        }

        
        if (value === 'AC') {
            string = "";
            input.value = string;
            return;
        }

        
        if (value === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
            return;
        }

        
        string += value;
        input.value = string;
    });
});
