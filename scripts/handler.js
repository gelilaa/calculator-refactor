function calculateHandler(event) {
  debugger;
  // read & process user input from event
  var form = event.target.form
  var a=  form.value1.value;
  var b = form.value2.value;
  var op = form.operator.value;

  let x = Number(a);
  let y = Number(b)
  // pass user input through core logic
  const result = doMath(op, x, y); // leave this line!
  
  // render output to DOM for user
 document.getElementById('result').innerHTML= result;

  // log user action for developers
 console.log('\n-- user action --');
 console.log('x:', '(' + typeof x + ')', x);
 console.log('y:', '(' + typeof y + ')', y);
 console.log('op', '(' + typeof op + ')', op);
 console.log('result', '(' + typeof result + ')', result);
  // return true for the browser
  return true;
}
