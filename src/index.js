import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list : [],
            isEditing: false
        }
    }
    
    increment = (function(n) {
        return function() {
          n += 1;
          return n;
        }
      }(-1));
 
    addList=()=>{
        var data = document.getElementById('list').value;
        var lists = [...this.state.list];
        var i = this.increment(); 
        lists.push(
                    {
                        'id': i,
                        'text':data,
                        'isEditing' :false
                    }
                );
        this.setState({list : lists})
        console.log(this.state.list);
    }
    
    delete = (arg) =>{
        var lists = [...this.state.list];
        var id = lists.findIndex(x => x.id===arg);
        if(id > -1){
            lists.splice(id, 1);
            this.setState({list:lists})
        }
    }

    update = (arg1,arg2) => {
        var lists = [...this.state.list];
        var id = lists.findIndex(x => x.id===arg1);
        if(id > -1){
            var a = lists.splice(id, 1,{'id':arg1,'text':arg2,'isEditing':true});
            this.setState({list:lists})
        }
    }

    ok = (arg) => {
        this.setState({isEditing:false});
        var lists = [...this.state.list];
        var id = lists.findIndex(x => x.id===arg);
        var newtext = document.getElementById('newtext').value;
        if(id > -1){
            var a = lists.splice(id, 1,{'id':arg,'text':newtext,'isEditing':false});
            this.setState({list:lists})
        }
        
    }

    calcle = (arg1,arg2) => {
        this.setState({isEditing:false});
        var lists = [...this.state.list];
        var id = lists.findIndex(x => x.id===arg1);
        var newtext = document.getElementById('newtext').value;
        if(id > -1){
            var a = lists.splice(id, 1,{'id':arg1,'text':arg2,'isEditing':false});
            this.setState({list:lists})
        }
    }

    render() {
        return (
            <div>
                <h1 className='title'>List:</h1>
                <ul><li>
                <div className='add'>
                <input type='text' id='list' />
                <button type="submit" onClick={this.addList}>Add</button>
                </div>
                </li></ul>
                <ul>
                    {this.state.list.map(p => (
                    <li key={p.id}>
                            {p.isEditing ? 
                            <div className='data'><input className='first' type='text' id='newtext' placeholder={p.text}/>  <button className='edit' onClick={() => this.ok(p.id)}> Ok </button> <button className='del' onClick={() => this.calcle(p.id,p.text)}> Cancle </button> </div>  : 
                            <div className='data'><p className='first'>{p.text}</p> <button className='edit' onClick={() => this.update(p.id,p.text)}> Edit </button>  <button className='del' onClick={()=>this.delete(p.id)} >Delete</button></div>}
                    </li> 
                    ))}
                </ul>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));