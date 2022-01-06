//  const names=document.getElementById("name1").value;
// const email=document.getElementById("email").value;
// const mobile=document.getElementById("mobile").value;
// const submit=document.getElementsByClassName("submit");
// let data=[];
// let list={
//     "name":`${names}`,
//     "email":`${email}`,
//    "submit":`${mobile}`
//    };

// function add(e){
// data.push(list);
// console.log(data);
// }
// add();
// localStorage.clear();
var submit=document.querySelector('button');
ids='';
var arr=[];
localStorage.setItem('curd',JSON.stringify(arr));
selection();
submit.addEventListener('click',(e)=>{
    e.preventDefault();
     if(document.querySelector('input[value="female"]').checked==false&&document.querySelector('input[value="male"]').checked==false){
        return document.getElementById('error4').innerHTML="requier this fild";
     }
    const name=document.getElementById('name1').value;
    const email=document.getElementById('email').value;
    const mobile=document.getElementById('mobile').value;
    const gender=document.querySelector('input[name="gender"]:checked').value;
    const city=document.getElementById('city').value;
    // var ho=document.getElementsByClassName('.checkbox[]:checked');
    var array = []
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    const img=document.getElementById("img").files[0];
    
    for (var i = 0; i < checkboxes.length; i++) {
        array.push(checkboxes[i].value)
    }
    
    if(name===""){
      return  document.getElementById('error1').innerHTML="* requier this fild";
    }else if(email==''){
        return document.getElementById('error2').innerHTML="* requier this fild";
    }else if(mobile==''){
       return document.getElementById('error3').innerHTML="* requier this fild";
    }else if(city==''){
       return document.getElementById('error5').innerHTML="* requier this fild";
    }
    var obj={
        name:`${name}`,
        email:`${email}`,
        mobile:`${mobile}`,
        gender:`${gender}`,
        city:`${city}`,
        hobby:array,
        img:URL.createObjectURL(img)
    }
    if(ids===''){
        const data=JSON.parse(localStorage.getItem('curd'));
        if(data==null){
            arr.push(obj);
            localStorage.setItem('curd',JSON.stringify(arr));
        }
        else{
            data.push(obj);
            localStorage.setItem('curd',JSON.stringify(data));
        }
    }
    else{
        const data=JSON.parse(localStorage.getItem('curd'));
        console.log(data[ids]);
        data[ids].name=name;
        data[ids].email=email;
        data[ids].mobile=mobile;
        data[ids].gender=gender;
        data[ids].city=city;
        data[ids].hobby=array;
      
        localStorage.setItem('curd',JSON.stringify(data));
    }
   
 selection();
 
})

function selection(){
    const data=JSON.parse(localStorage.getItem('curd'));
    var str="";
    no=1;
    data.map((item,ind)=>{
     var a=`<tr><td>${no}</td><td>${item.name}</td>
     <td><img src=${item.img}></td>
     <td>${item.email}</td>
     <td>${item.mobile}</td>
     <td>${item.gender}</td>
     <td>${item.city}</td>
     <td>${item.hobby}</td>
     <td><button onclick="deletes(${ind})">delete</button></td>
     <td><button onclick="update(${ind})">update</button></td></tr>`;
     str+=a;
     no++;
    });
    console.log(str);
    document.querySelector('tbody').innerHTML=str;
    const name=document.getElementById('name1').value="";
 const email=document.getElementById('email').value="";
 const mobile=document.getElementById('mobile').value="";
 const gender=document.querySelector('input[value="male"]').checked=false;
 document.querySelector('input[value="female"]').checked=false;
 document.querySelector('input[value="cricket"]').checked=false;
 document.querySelector('input[value="singing"]').checked=false;
 document.querySelector('input[value="playing"]').checked=false;
 document.querySelector('input[value="swimming"]').checked=false;

 const city=document.getElementById('city').value="";
 document.getElementById("img").value='';
}

function deletes(id){
    const data=JSON.parse(localStorage.getItem('curd'));
   data.splice(id,1);
   localStorage.setItem('curd',JSON.stringify(data));
    selection();
}

function update(id){
    ids=id;
    var bool=true;
    const data=JSON.parse(localStorage.getItem('curd'));
    const names=document.getElementById('name1').value=data[id].name;
    const emails=document.getElementById('email').value=data[id].email;
    const mobiles=document.getElementById('mobile').value=data[id].mobile;
    console.log(data[id].gender)
    if(data[id].gender=='male'){
    const gender=document.querySelector('input[value="male"]').checked=true;
    }else{
    const gender=document.querySelector('input[value="female"]').checked=true;
    }
    const city=document.getElementById('city').value=data[id].city;
    // for(var c=0;c<data[id].hobby.length;c++){
    //     che+=data[id].hobby[c];
    //     console.log(che);
//     // }
// data[id].hobby.forEach(value=>{
//     console.log(value)
//     document.querySelector(value).checked=true;
// })
    var checkboxes = document.querySelector('input[type=checkbox]').value;
    for (var i = 0; i < data[id].hobby.length; i++) {
        console.log(data[id].hobby[i]);
        if(data[id].hobby[i]=='cricket'){
            document.querySelector('input[value="cricket"]').checked=true;
        }    
        else if(data[id].hobby[i]=='singing')    {
            document.querySelector('input[value="singing"]').checked=true;
        }
        else if(data[id].hobby[i]=='playing'){
            document.querySelector('input[value="playing"]').checked=true;
        }
        else if(data[id].hobby[i]=='swimming'){
            document.querySelector('input[value="swimming"]').checked=true;
        }
      }
}
var text=[];
const search=document.getElementById('search_btn');


search.addEventListener('click',()=>{
    const insearch=document.getElementById('search').value;
    const data=JSON.parse(localStorage.getItem('curd'));
         const filter=data.filter((val)=>{
             return val.name.includes(insearch);
         })
         console.log(filter)
         text=filter;
         var str="";
         text.map((item,ind)=>{
            var a=`<tr><td>${ind+1}</td><td>${item.name}</td>
            <td><img src=${item.img}></td>
            <td>${item.email}</td>
            <td>${item.mobile}</td>
            <td>${item.gender}</td>
            <td>${item.city}</td>
            <td>${item.hobby}</td>
            <td><button onclick="deletes(${ind})">delete</button></td>
            <td><button onclick="update(${ind})">update</button></td></tr>`;
            str+=a;
           });
    document.querySelector('tbody').innerHTML=str;

         console.log(text);

})