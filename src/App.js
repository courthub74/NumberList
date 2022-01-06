import React from 'react';
import './style.css';

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <ListItem value={number} key={number} />
  ));
  return <ul>{listItems}</ul>;
}

function ListItem(props) {
  return <li>{props.value}</li>;
}

export default function App() {
  return (
    <div>
      <h1>The NumberList is below</h1>
      <NumberList numbers={[1, 2, 3, 4, 5]} />
    </div>
  );
}
