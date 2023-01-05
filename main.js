
/*1.dom Selection
  2.EventListener;
  3.validation;
  4.element creat;
  5.append


  */

  const title=document.querySelector('#title');
  const Author=document.querySelector('#Author');
  const year=document.querySelector('#year');
  const btn=document.querySelector('.btn');
  const booklist=document.querySelector('#booklist');


  btn.addEventListener('click', function(e){

    e.preventDefault();

    if(title.value=='' &&  Author.value=='' && year.value==''){

       alert('Please fill  Out this field');

    }
    else{
          
      const newrow= document.createElement('tr');

//creatnew title
      const newtitle=document.createElement('th');
      newtitle.innerHTML= title.value;

      newrow.appendChild(newtitle);


      //creatnew author
      
      const newauthor=document.createElement('th');
      newauthor.innerHTML= Author.value;
      newrow.appendChild(newauthor);


      //creatnew year
      
      const newyear=document.createElement('th');
      newyear.innerHTML= year.value;

      newrow.appendChild(newyear);



      booklist.appendChild(newrow);

    }
    




  });













  



