import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function List(){
    const [timer,settimer] = useState([]);

    useEffect(() => {
        fetchData();
        let r = addtimer();     
        
         return () => {
            console.log('returncalled');
             clearTimeout(r);
         }
      },[timer]);
    
    async function fetchData(){
        let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    res = await res.json();
    console.log(res);
    settimer(res);
    }
    const addtimer = () => {
        let p = setTimeout(() => {
            alert('Timer');
        }, 2000);
        return p;
    }

    return(
        <div>
            {timer.map(p => (
            <div key={p.id}>{p.title}</div>
          ))}
        </div>
    )
}



// function List() {
//     const [list,setState] = useState([]);
//     const [counter,incCount] = useState(0);

//     const addList=()=>{
//         let data = document.getElementById('list').value;
//         let lists = [...list];
//         let i = counter;
//         incCount(counter+1);
//         let a = {
//             'id': i,
//             'text':data,
//             'isEditing' :false
//         };
//         lists.push(a);
//         document.getElementById('list').value  = '';
//         setState(lists)
//         //localStorage.setItem('list', JSON.stringify(lists));
//     }

//     const update = (arg1,arg2) => {
//         let lists = [...list];
//         let id = lists.findIndex(x => x.id===arg1);
//         if(id > -1){
//             lists.splice(id, 1,{'id':arg1,'text':arg2,'isEditing':true});
//             setState(lists)
//         }
//     }

//     const del = (arg) => {
//         let lists = [...list];
//         let id = lists.findIndex(x => x.id===arg);
//         if(id > -1){
//             lists.splice(id,1);
//             setState(lists)
//         }
//         //localStorage.setItem('list', JSON.stringify(lists));
//     }

//     const ok = (arg1,arg2) => {
//         let lists = [...list];
//         let id = lists.findIndex(x => x.id===arg1);
//         let newtext = document.getElementById('newtext').value;
//         if(id > -1){
//             if(newtext===''){
//                 lists.splice(id, 1,{'id':arg1,'text':arg2,'isEditing':false});
//             }
//             else{
                
//                 lists.splice(id, 1,{'id':arg1,'text':newtext,'isEditing':false});
//             }
//         }
//         setState(lists);
//         //localStorage.setItem('list', JSON.stringify(lists)); 
//     }

//     const cancle = (arg1,arg2) => {
//         setState({isEditing:false});
//         let lists = [...list];
//         let id = lists.findIndex(x => x.id===arg1);
//         if(id > -1){
//             lists.splice(id, 1,{'id':arg1,'text':arg2,'isEditing':false});
//             setState(lists)
//         }
//     }
    

//     return (
//         <div>
//             <h1 className='title'>List</h1>
//             <hr/>
//             <ul><li>
//             <div className='add'>
//             <input type='text' id='list' placeholder="Enter task..."/>
//             <button type="submit" onClick={addList}>Add</button>
//             </div>
//             </li></ul>
//             <ul>{list.map(p => (
//                 <li key={p.id}>
//                     {   p.isEditing ? 
//                         <div className='data'><input className='first' type='text' id='newtext' placeholder={p.text}/>
//                         <button className='edit' onClick={() => ok(p.id,p.text)}> Ok </button> 
//                         <button className='del' onClick={() => cancle(p.id,p.text)}> Cancle </button>  
//                         </div>  :   <div className='data'>
//                         <p className='first'>{p.text}</p> 
//                         <button className='edit' onClick={() => update(p.id,p.text)}> Edit </button>
//                         <button className='del' onClick={()=> del(p.id)} >Delete</button>
//                         </div>
//                     }
//                 </li> 
//                 ))}
//             </ul>
//         </div>
//     );
// }

ReactDOM.render(<List />, document.getElementById('root'));