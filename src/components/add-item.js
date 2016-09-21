import React, {Component} from 'react';

class AddItem extends Component{
    handleCreate(e){
        e.preventDefault();
        var itemObj = {
            name: this.refs.name.value,
            description: this.refs.description.value,
            price: this.refs.price.value,
            date: this.refs.date.value,
            taxable: this.refs.taxable.value
        };
        if(!this.validate(itemObj)) return;
        this.props.createItem(itemObj);
        this.clearForm();
    }
    
    clearForm(){
        this.refs.name.value="";
        this.refs.description.value="";
        this.refs.price.value="";
        this.refs.date.value="";
        this.refs.taxable.value="";
    }
    
    validate(item){
        var message = "";
        
        if(item.name === "" || item.price === "" || item.description === "" || item.taxable==="" || item.date === ""){
            message = "All feilds must be filled out";
        }
        else if(isNaN(parseFloat(item.price))){
            message = "Must be a valid number(No currency)";
        }
        else if(item.taxable.toLowerCase() !== "yes" && item.taxable.toLowerCase() !== "no"){
            message = "You must enter yes or no";
        }
        else if(!item.date.match(/^[0-9]{2}-[0-9]{2}-[0-9]{4}$/)){
            message = "The date must be in this format MM-DD-YYYY"
        }
        else{
            return true;
        }
        alert(message);
        return false;
    }
    
    render(){
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <div>
                    <label>Name: </label>
                    <input type="text" ref="name" />
                </div>
                <div>
                    <label id="description">Description: </label>
                    <textarea ref="description"></textarea>
                </div>
                <div className="form-group">
                    <label>Price: </label>
                    <input type="text" ref="price" />
                </div>
                <div className="form-group">
                    <label>Date: </label>
                    <input type="text" ref="date" placeholder="MM-DD-YYYY"/>
                </div>
                <div className="form-group">
                    <label>Taxable?: </label>
                    <input type="text" ref="taxable" />
                </div>
                <button className="btn btn-primary">Add</button> 
            </form>
        );
    }
}

export default AddItem;