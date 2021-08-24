'use strict'
let form=document.getElementById('form')

function MoveList(name,image,release)
{ this.name=name;
    this.image=image;
     this.release=release;
      MoveList.all.push(this);
}
MoveList.all=[]

let divTable =document.getElementById('tableDiv');
  let table=document.createElement('table');
   divTable.appendChild(table);
  
  
  
  
   MoveList.prototype.render()
{ 
     let index=MoveList.all.length;
    let trE=document.createElement('tr')
    table.appendChild(trE)

    let tdE=document.createElement('td')
    tdE.textContent= 'x'                      
    trE.appendChild(tdE)

    let tdE1=document.createElement('td')
    tdE1.textContent= `img/${MoveList.all[index].image}.png`                      
    trE.appendChild(tdE1)

    
    let tdE2=document.createElement('td')
    tdE2.textContent=MoveList.all[index].name;
    trE.appendChild(tdE2)
    
    let tdE3=document.createElement('td')
    tdE3.textContent=MoveList.all[index].release;
    trE.appendChild(tdE3)
    setDataLocal() 

}


form.addEventListener('submit',EventFunction);
function EventFunction(e)
{  e.preventDefault()
     
    let name=e.target.name.value;
  
    let lower =e.target.image.value;
    let str=JSON.stringify(lower)
    let image=JSON.parse(str.toLowerCase)
    let release=e.target.release.value;
    
    let moveList=new MoveList(name,image,release) 
 
    moveList.render();   
    
}


function setDataLocal()
{
localStorage.setItem('MoveList',JSON.stringify(MoveList.all))
}


function GetDataFromLocal()
{
let data1=localStorage.getItem('MoveList')
let data2=JSON.parse(data1);
if(data2)
{ 
    for(let i=0; data2.length;i++)
    {
       let moveListNew=  new MoveList(data2[i].name,data2[i].image,data2[i].release)
    
       moveListNew.render();
    }    
}
}
GetDataFromLocal()


table.addEventListener('click',remove)
function remove(e)
{
    e.preventDefault();
    let text=e.target.innerText;
    if(text =='x')
    {
        let child=parseInt(e.target.perantElement.rowIndex())
        e.target.perantElement.remove;
        MoveList.all.slice(child,1)
        localStorage.setItem('MoveList2',JSON.stringify(MoveList.all))

    }

}