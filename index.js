// when enter press is hit, take ther value in input store it, create a new element in html append it to contain, when the circle is clicked add a class and give it a markup that is finisned

let firsto=document.querySelector('.first');

let secondo=document.querySelector(".second");

let input=document.querySelector("#ipt");

let container=document.querySelector('.contain');

let foto=document.querySelector(".footer")

let all=document.querySelector(".all");

let active=document.querySelector(".active");

let complete=document.querySelector(".complete");

let swittch=document.querySelector('.sun');

let clear=document.querySelector(".clear");

let lefto=document.querySelector(".itemsleft");

let divoContainer=[];// this has all the elemnts

const activo=[];// contans div's without class cross

let compt=[]; // contans div's with class cross

const circle=[];

let dont=false;
i=-1;

let ht=0;
let min=0;

window.addEventListener('keydown',(e)=>{

if(e.code==='Enter'||e.code==='NumpadEnter')
{

    
    let value=input.value;
    
    input.value='';
    
    // container.innerHTML=`<div class="item"> <span class="circle "><img class="check" src="images/icon-check.svg" alt=""></span> ${value}</div>`;
    
    
    let divo=document.createElement('div');
    
    
    divo.innerHTML=`<span class="circle "><img class="check" src="icon-check.svg" alt=""></span> ${value}`;
    divo.classList.add("item");
    divoContainer.push(divo);
    container.appendChild(divo);
    
    i=divoContainer.length-1;
// is the index for the last item in the array,
collect(i);

left();

}




})





function collect(i){

  // i is the index of the last element in the devoContainer array.

// slect the span inside each div and gave him a event listener

    let meto=divoContainer[i].querySelector(".circle");
    
    
    circle.push(meto);
    
    
    let x=circle.length-1;

// x is the index of the last element in the circle array.

circle[x].addEventListener('click',(e)=>{




if(e.target.classList.contains('cross')===true){

e.target.classList.remove("cross");
e.target.parentNode.classList.remove("line");


}

else{

 e.target.classList.add("cross");
 e.target.parentNode.classList.add("line");


}

// to check whether the image inside the span has been clicked instead of the span, we could do this alos by using,  e.current.target.


if(e.target.classList.contains("check")){
e.target.parentNode.classList.remove("cross");
e.target.parentNode.parentNode.classList.remove("line");

}


left();


})





    
}











// first we need to pass the div's according to their state, more specifically whether they have a class of cross or not, all the ele,ments needs to be put in all category, only div's with class of cross will be added to completed, the rest will be added to active category,




active.addEventListener('click',()=>{

container.innerHTML='';
console.log("active clicked")

divoContainer.forEach((dce)=>{


    if(!dce.classList.contains('line')&&!dce.classList.contains('remove'))
    
{
    container.appendChild(dce)

}

});

})






complete.addEventListener('click',()=>{

console.log("complete clicked")


container.innerHTML='';

divoContainer.forEach((dce)=>{


    if(dce.classList.contains("remove")){

        console.log("dsd")

    }



else{
   

 if(dce.classList.contains('line'))
    
{
    container.appendChild(dce)

}

}




    if(dce.classList.contains('line'))
    
{
    container.appendChild(dce)

}




});

})



all.addEventListener('click',()=>{

console.log("all clicked")

container.innerHTML='';

divoContainer.forEach((dce)=>{

    if(dce.classList.contains("remove")){

        console.log("dsd")

    }

else{
    container.appendChild(dce)
}



});

})





clear.addEventListener('click',()=>{

compt=[];

dont=true;



for(let o=0;o<divoContainer.length;o++){


     if(divoContainer[o].classList.contains('line')===true)
 {

//  container.removeChild(divoContainer[o])
//  divoContainer.splice(o,1);

compt.push(o);

 console.log("yes")
}

};



compt.forEach((indx)=>{


container.removeChild(divoContainer[indx]);


divoContainer[indx].classList.remove("line");
divoContainer[indx].classList.add("remove");

// divoContainer.splice(indx,1);

// compt.forEach((sub)=>{

// sub=sub-1;

// })




})





});



function left(){
// some elements has  cross class, these elements is completed, the ones whom doesn't have this class is not completed, so they are left, if there are no ones have this class, then all the items  will be left, any item has class 'remove' won't be considered.

min=0;
ht=0;

console.log("called")



divoContainer.forEach((sem)=>{



if(sem.classList.contains('cross')||sem.classList.contains('line')&&!sem.classList.contains('remove'))
{

min++;

console.log(sem)

console.log('completed')

}

else if( sem.classList.contains('remove') ) {

console.log('fas')

}

else{

ht++;
console.log('not yet')


}





})





lefto.innerHTML=ht;



}


// cross => span & img,   line=> item ,  remove => compeleted items.


swittch.addEventListener('click',()=>{



firsto.classList.toggle("senco");

secondo.classList.toggle("secondo");

container.classList.toggle("conton");

foto.classList.toggle("foto");




if(firsto.classList.contains("senco")){

swittch.innerHTML=`<img src="icon-moon.svg" alt="">`;
}

else{
swittch.innerHTML=`<img src="icon-sun.svg" alt="">`;

}


})