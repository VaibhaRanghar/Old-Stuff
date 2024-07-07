export default function Footer({ item }) {
    if (!item.length) {
      return (
        <footer className="stats">
          <p>Start adding items to your list!🚀</p>
        </footer>
      );
    }
  
    const len = item.length;
    const packed = item.filter((itmes) => itmes.packed).length;
    const percentage = Math.round((packed / len) * 100);
    return (
      <footer className="stats">
        <em>
          {percentage === 100
            ? "Everything packed 💼.Ready to go!! ✈ "
            : `💼 You have ${len} items on your list, and you already packed ${packed} (
          ${percentage}%)`}
        </em>
      </footer>
    );
  }