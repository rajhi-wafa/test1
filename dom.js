

var input = document.querySelector('input');
input.value ='hello world'

// ?var submit = document.querySelector('input [type ="submit"]');
//submit.value = "SEND"

//var item = document.querySelector('.liste-group-item');
//item.style.color= 'red';

//?var lastItem = document.querySelector('.liste-group-item: last-child');
//lastItem.style.color='blue';

//var secondItem = document.querySelector
//('.liste-group-item :nth-child(2)');
//secondItem.style.color ='coral';

//var titles = document.querySelectorAll('.title');
//console.log(titles);
//titles[0].textContent ="Hello";
/*var add = document.querySelectorAll('li : nth-child(add)');
var even =document.querySelectorAll('li:nth-child(even)');
for(var i =0 ; i < add.length ; i++ ){
    add[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';
}*/

/*var button = document.getElementById('button').addEventListener
('click',buttonClick);
function buttonClick(){*/
   // document.getElementById('header-titel').textContent ='Changed';
    //document.querySelector('#main').style.backgroundColor ='#f4f4f4';

    /*  console.log(e.target);
    console.log(e.target.id);
console.log(e.target.className);
console.log(e.target.classList);
var output = document.getElementById('output');
output.innerHTML = '<h3>' +e.target.id+ '</h3>';
console.log(e.type);
}*/
var button = document.getElementById('button');
//button.addEventListener('click', runEvent);

//button.addEventListener('dblclick', runEvent);
button.addEventListener('mousedown', runEvent);


function runEvent(e){ 
    console.log('EVENT TYPE:'+e.type);
}




