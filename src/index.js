import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list : ['Hello']
        }
    }
    
    addList=(e)=>{
        var data = 
        var lists = [...this.state.list];
        lists.push(data);
        this.setState(lists)
    }
    // showlist=()=>{
    //     //var lists = [...this.state.list];
    //     return(
    //         <div>
    //             <h1>List:</h1>
    //             {this.state.list} 
    //         </div>
    //     )
    // }

    render() {
        return (
            <div>
                <input type="text" id="text"/>
                <button type="submit" onClick={this.addList}>Add</button>
                <h1>List:</h1>
                <p>{this.state.list}</p>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
