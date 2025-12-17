var userInp = prompt("enter color among them Red Orange Green")

function sigTab () {
  let head1 = document.getElementById("head1").textContent
  let head2 = document.getElementById("head2").textContent
  let clrR = document.getElementById("clrR").textContent
  let ins1 = document.getElementById("ins1").textContent
  let clrO = document.getElementById("clrO").textContent
  let ins2 = document.getElementById("ins2").textContent
  let clrG = document.getElementById("clrG").textContent
  let ins3 = document.getElementById("ins3").textContent
  
  if (userInp === 'Red') {
    alert(ins1);
  } else if ( userInp === 'Orange') {
    alert(ins2);
  } else if ( userInp === 'Green') {
    alert(ins3); 
  } else {
    
  }
}

sigTab()