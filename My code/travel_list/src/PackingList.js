import { useState } from "react";
export default function PackingList({ items, onDelteItems, onToggleItem, clearAll }) {
    const [sortBy, setSortBy] = useState("packed");
  
    let sortedItems;
  
    if (sortBy === "input") sortedItems = items;
    if (sortBy === "description") {
      sortedItems = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
    }
    if(sortBy === "packed"){
      sortedItems = items.slice().sort((a,b) => Number(a.packed) - Number(b.packed))
    } 
    return (
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Items
              item={item}
              onDelteItems={onDelteItems}
              onToggleItem={onToggleItem}
              key={item.id}
            />
          ))}
        </ul>
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value={"input"}>Sort by input order</option>
            <option value={"description"}>Sort by description</option>
            <option value={"packed"}>Sort by packed status</option>
          </select>
        </div>
        <button onClick={clearAll}>Clear All!</button>
      </div>
    );
  }
  function Items({ item, onDelteItems, onToggleItem }) {
    return (
      <li>
        <input
          type="checkbox"
          value={item.packed}
          checked={item.packed}
          onChange={() => onToggleItem(item.id)}
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
          <button onClick={() => onDelteItems(item.id)}>❌</button>
        </span>
      </li>
    );
  }