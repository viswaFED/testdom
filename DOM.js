// EXAMINE THE DOCUMENT OBJECT 

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID 
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000000';
// var divTitle = document.getElementsByClassName('title');
// divTitle[0].style.fontWeight = 'bold';
// divTitle[0].style.color = 'green';

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[2].textContent = 'Hello';
items[2].style.fontWeight = 'bold';
items[2].style.backgroundColor = 'green';
for(var i = 0; i < items.length; i++){
    items[i].style.fontWeight = 'bold';
    
   }
 items[0].style.color = '#0000FF';
 items[1].style.color = '#0000FF';
 items[3].style.color = '#0000FF';


