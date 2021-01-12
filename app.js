function t1() {
   let a = document.querySelector('.text-edit');
    a.setAttribute('contentEditable', 'true');
    let items = document.getElementsByClassName("text-edit");
    for (let i = 0; i < items.length; i++) {
  items[i].setAttribute("contentEditable", 'true');
}
}

document.querySelector('.square').onclick = t1;
function t2() {
    let a = document.querySelector('.text-edit');
    a.setAttribute('contentEditable', 'false');
    let items = document.getElementsByClassName("text-edit");
    for (let i = 0; i < items.length; i++) {
  items[i].setAttribute("contentEditable", 'false');
 }
 }
 document.querySelector('.circle').onclick = t2;
