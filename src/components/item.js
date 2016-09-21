import React, {Component} from 'react';

class Item extends Component{
    //Was going to the option to switch between a list and fiv view, but decided not to. So this isn't used
    renderList(){
        return (
            <div>
                <div>{this.props.name}</div>
                <div>{this.props.description}</div>
                <div>{this.props.price}</div>
            </div>
        );
    }
    
    renderDiv(){
        return (
            <div className="itemDiv">
                <div>{this.props.name}</div>
                <div>${this.props.price}</div>
                <div>{this.props.description}</div>
                <div>Taxable: {this.props.taxable}</div>
                <div>Date Avaible: {this.props.date}</div>
            </div>
        );
    }
    
    render(){
        return this.renderDiv();
    }
}

export default Item;