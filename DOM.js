// // EXAMINE THE DOCUMENT OBJECT 

// // console.dir(document);
// // console.log(document.domain);
// // console.log(document.URL);
// // console.log(document.title);
// // document.title =  123;
// // console.log(document.doctype);
// // console.log(document.head);
// // console.log(document.body);
// // console.log(document.all);
// // console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// // console.log(document.forms[0]);
// // console.log(document.links);
// // console.log(document.images);

// // GETELEMENTBYID 
// // console.log(document.getElementById('header-title'));
// // var headerTitle = document.getElementById('header-title');
// // var header = document.getElementById('main-header');
// // console.log(headerTitle);
// // headerTitle.textContent = 'Hello';
// // headerTitle.innerText = 'Goodbye';
// // console.log(headerTitle.innerText);
// // headerTitle.innerHTML = '<h3>Hello</h3>';
// // header.style.borderBottom = 'solid 3px #000000';
// // var divTitle = document.getElementsByClassName('title');
// // divTitle[0].style.fontWeight = 'bold';
// // divTitle[0].style.color = 'green';
// // Get Elements by class Name
// // var items = document.getElementsByClassName('list-group-item');
// // console.log(items);
// // console.log(items[1]);
// // items[2].textContent = 'Hello';
// // items[2].style.fontWeight = 'bold';
// // items[2].style.backgroundColor = 'green';
// // for(var i = 0; i < items.length; i++){
// //     items[i].style.fontWeight = 'bold';
    
// //    }
// //  items[0].style.color = '#0000FF';
// //  items[1].style.color = '#0000FF';
// //  items[3].style.color = '#0000FF';

// // var li = document.getElementsByClassName('li');
// // console.log(li);
// // console.log(li[1]);
// // li[1].textContent = 'Hello 2';
// // li[1].style.fontWeight = 'bold';
// // li[1].style.backgroundColor = 'yellow';
// // for(var i = 0; i < li.length; i++){
// //     li[i].style.fontWeight = 'bold';
    
// //    }
// // var li = document.getElementsByTagName('li');
// // console.log(li);
// // console.log(li[1]);
// // li[1].textContent = 'Hello 2';
// // li[1].style.fontWeight = 'bold';
// // li[1].style.backgroundColor = 'yellow';

// // for(var i = 0; i < li.length; i++){
// //  li[i].style.backgroundColor = '#f4f4f4';
// //  }

// // // QUERYSELECTOR //
// // var header = document.querySelector('#main-header');
// // header.style.borderBottom = 'solid 4px #ccc';

// // var input = document.querySelector('input');
// // input.value = 'Hello World'

// // var submit = document.querySelector('input[type="submit"]');
// // submit.value="SEND"

// // var item = document.querySelector('.list-group-item');
// // item.style.color = 'red';

// // var lastItem = document.querySelector('.list-group-item:last-child');
// // lastItem.style.display = 'none';

// // var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// // secondItem.style.color = 'coral';

// // let thirdItem  = document.querySelector(".list-group-item:nth-child(3)");
// // thirdItem.style.backgroundColor = "green";
// // Query Selector ALL
// // var titles = document.querySelectorAll('.title');

// // console.log(titles);
// // titles[0].textContent = 'Hello';

// // var odd = document.querySelectorAll('li:nth-child(odd)');
// // var even= document.querySelectorAll('li:nth-child(even)');

// // for(var i = 0; i < odd.length; i++){
// //   odd[i].style.backgroundColor = 'green';
// //   even[i].style.backgroundColor = '#ccc';
// // }

// // var itemList = document.querySelector('#items');
// // //parentNode
// // console.log(itemList.parentNode);
// // itemList.parentNode.style.backgroundColor = '#f4f4f4';
// // console.log(itemList.parentNode.parentNode);


// // //parentElement
// // console.log(itemList.parentElement);
// // itemList.parentElement.style.backgroundColor = '#f4f4f4';
// // console.log(itemList.parentElement.parentElement.parentElement);

// // //childNodes
// // console.log(itemList.childNodes);

// // console.log(itemList.children);
// // console.log(itemList.children[1]);
// // itemList.children[1].style.backgroundColor = 'yellow';

// // // FirstChild
// // console.log(itemList.firstChild);
// // // firstElementChild
// // console.log(itemList.firstElementChild);
// // itemList.firstElementChild.textContent = 'Hello 1';

// // //lastChild
// // console.log(itemList.lastChild);
// // lastElementChild
// // console.log(itemList.lastElementChild);
// // itemList.lastElementChild.textContent = 'Hello 4';

// // //nextSibling
// // console.log(itemList.nextSibling);
// // // nextElementSibling
// // console.log(itemList.nextElementSibling);

// // //previousSibling
// // console.log(itemList.previousSibling);
// // previousElementSibling
// // console.log(itemList.previousElementSibling);itemList.previousElementSibling.style.color = 'green';

// // // createElement

// // // Create a div
// var newDiv =  document.createElement('div');

// // Add class
// newDiv.className= 'hello';

// // Add id
// newDiv.id = 'hello1';

// // Add attr
// newDiv.setAttribute('title', 'Hello Div');

// // Create text node
// var newDivText = document.createTextNode('HEllo Word');

// // Add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);
// // var newDiv =  document.createElement('div');

// // // Add class
// // newDiv.className= 'HEllo';

// // // Add id
// // newDiv.id = 'HEllo1';

// // // Add attr
// // newDiv.setAttribute('title', 'Hello Div1');

// // // Create text node
// // var newDivText = document.createTextNode('HEllo word');

// // // Add text to div
// // newDiv.appendChild(newDivText);

// // var title = document.querySelector('main .title');
// // var h2 = document.querySelector('main h2');

// // console.log(newDiv);

// // newDiv.style.fontSize = '30px';

// // title.insertBefore(newDiv, h2);
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
form.addEventListener('submit', addDescription);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addDescription(e){
    e.preventDefault();
    var newDescription = document.getElementById('item').value;
    var li = document.createElement('description');
    li.className = 'description';
}
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));     


  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
 

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}
// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  var items = itemList.getElementsByTagName('dd');
 
  
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
