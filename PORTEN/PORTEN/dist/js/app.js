const l = document.querySelector('.call-log__log');
const f = document.querySelector('.call-log__log-form');
const e = document.querySelector('.call-log__log-exit');
l.addEventListener('click',function (e) {
   // console.log('yes!');
   f.classList.add('login');
   document.body.classList.add('login');
});
e.addEventListener('click',function (e) {
   // console.log('no');
   f.classList.remove('login');
   document.body.classList.remove('login');
});
// console.log(l)
document.querySelector('#serch').oninput = function(){
   console.log('yes!')
   let val = this.value.trim();
   console.log(val);
   let dataitems = document.querySelectorAll('.clothes__texts');
   console.log(dataitems)
   if (val != ''){
      dataitems.forEach(function(elem){
         // console.log(elem)
         if (elem.innerText.search(val == -1)) {
            elem.classList.add(hide);
         }
         else {
            elem.classList.remove(hide);
         }
      });
   }
}