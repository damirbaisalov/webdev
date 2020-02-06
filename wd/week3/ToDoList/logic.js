var btn = document.querySelector('#add');
var input = document.querySelector('input');
let list = document.querySelector('.list');
var close = document.getElementsByClassName("close");

btn.onclick = function() {
if(input.value!=''){

    let el = document.createElement('li');
    el.innerHTML = input.value;
    el.style.paddingLeft='10px';
    list.appendChild(el);
    input.value='';
    
    //creating element input checkbox
    var checkbox = document.createElement("input");
    checkbox.type='checkbox';
    checkbox.style.float='left';
    checkbox.onclick = function() {
            var div = this.parentElement;

            if(div.style.textDecoration == 'line-through'){
              
                div.style.textDecoration = 'none';
            }
            else {
            div.style.textDecoration = "line-through";
            }
    }
   
 
    el.appendChild(checkbox);

  var span = document.createElement("SPAN");


 //creating element "IMG" for trash logo
 var img = document.createElement("IMG");
 img.src = "trash2.png"; 
 img.style.marginLeft='100px';
 img.style.width='20px';
 img.style.height='20px';
 

 //adding img element and span elemnt to parents
  span.className = "close";
  span.appendChild(img);
  el.appendChild(span);


}
else {
    alert('write some input ');
}
 
for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
  }

}