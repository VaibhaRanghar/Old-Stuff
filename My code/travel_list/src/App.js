import { useState } from "react";
import "./App.css";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Fourm from "./Fourm";
import Footer from "./Footer";

function App() {
  let [item, setItem] = useState([]);

  function handleItems(item) {
    setItem((items) => [...items, item]);
  }
  function deleteAll(){   
      const confirm = window.confirm("Are you sure you want to delete all items?");
      if(confirm) setItem(() => item.splice(0,item.length));
  }
  function deleteItems(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  } 
  return (
    <div>
      <Logo />
      <Fourm onAddItems={handleItems} />
      <PackingList
        items={item}
        onDelteItems={deleteItems}
        onToggleItem={handleToggleItem}
        clearAll = {deleteAll}
      />
      <Footer item={item} />
    </div>
  );
}

export default App;
