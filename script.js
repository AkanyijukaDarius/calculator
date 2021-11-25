// Get the Variable from the input box
function screen(val)
        {
        document.getElementById("box").value=val;
        }

// Concatenating Values
function shownum(val)   {
        document.getElementById("box").value+=val;
        }

// Performing the Calculation
function solve() { 
    try     { 
            screen(eval(document.getElementById("box").value)) 
            } 
    catch(e) {
            screen('unknown error') 
            } 
                 }
// Clear the Input Screen
function clearme() {
                document.getElementById("box").value = "";
                } 
// Backspace Function
function delback() {
                let valueNeeded = document.getElementById("box").value;
                var finalValueNeeded = valueNeeded.substr(0, valueNeeded.length-1); 
                document.getElementById("box").value=finalValueNeeded;
                
                } 