import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Item from './components/item';
import AddItem from './components/add-item';

/*I just have really basic tests here*/

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders an item', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Item name="test item" description="A test description" price="9.99" date="2016-09-23" taxable="No" />, div);
});

it('renders the add item form', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddItem />, div);
});
