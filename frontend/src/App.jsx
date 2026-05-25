import { useEffect, useState } from "react";

import Header from './components/Header';
import Form from './components/Form';
import GroceryList from './components/GroceryList';
import Footer from './components/Footer';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/notes')
      .then(res => res.json())
      .then(data => setItems(data.data))
      .catch(err => console.error(err));
  }, []);

 function handleAddItem(item) {
  fetch('http://localhost:5000/notes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item)
  })
    .then(res => res.json())
    .then(data => {
      setItems(prev => [...prev, data.data]);
})
    .catch(err => console.error(err));
}

function handleDeleteItem(id) {
  fetch(`http://localhost:5000/notes/${id}`, {
    method: 'DELETE'
  })
    .then(res => res.json())
    .then(() => setItems(items.filter(item => item.id !== id)))
    .catch(err => console.error(err));
}

function handleToggleItem(id) {
  fetch(`http://localhost:5000/notes/${id}`, {
    method: 'PUT'
  })
    .then(res => res.json())
    .then(data => {
      setItems(items.map(item => 
        item.id === id ? data.data : item
      ));
    })
    .catch(err => console.error(err));
}

function handleClearItems() {
  fetch('http://localhost:5000/notes', {
    method: 'DELETE'
  })
    .then(res => res.json())
    .then(() => setItems([]))
    .catch(err => console.error(err));
}

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
