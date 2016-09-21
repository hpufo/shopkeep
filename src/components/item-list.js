import _ from 'lodash';
import React, {Component} from 'react';
import Item from './item';

class ItemList extends Component{
    
    renderItems(){
        return _.map(this.props.items, (item, index) => <Item key={index} {...item} />);
    }
    
    render(){
        return (
            <div>
                {this.renderItems()}
            </div>    
        );
    }
}

export default ItemList;