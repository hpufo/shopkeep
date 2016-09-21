import React, { Component } from 'react';
import ItemList from './components/item-list';
import AddItem from './components/add-item';
import './App.css';

const items = [];
loadItems();

class App extends Component {
   constructor(props) {
       super(props);
       
       this.state = {items: items};
   }
   
   createItem(item){
       this.state.items.push(item);
       this.setState({items: this.state.items});
   }
   
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Shopkeeper's stock</h2>
        </div>
        <h2>Add an Item</h2>
        <AddItem createItem={this.createItem.bind(this)} />
        <h2>Item list</h2>
        <ItemList items={this.state.items} />
      </div>
    );
  }
}

/*
    Push data from the remote server here
*/
function loadItems(){

    items.push(
    {
        name: "PS4",
        description: "Current gen game system",
        price: "400",
        date: "09-30-2016",
        taxable: "yes"
    },{
        name: "Laughing man",
        description: "I thought what I'd do was, I'd pretend I was one of those deaf-mutes.",
        price: "3.50",
        date: "9-10-2016",
        taxable: "No"
    });//*/
}

export default App;
