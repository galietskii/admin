function t1() {
   let a = document.querySelector('.text-edit');
    a.setAttribute('contentEditable', 'true');
}
    
document.querySelector('.square').onclick = t1;
function t2() {
    let a = document.querySelector('.text-edit');
     a.setAttribute('contentEditable', 'false');
 }
     
 document.querySelector('.circle').onclick = t2;