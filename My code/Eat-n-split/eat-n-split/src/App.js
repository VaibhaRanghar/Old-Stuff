import React, { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button({ children, onClick1 }) {
  return (
    <button className="button" onClick={onClick1}>
      {children}
    </button>
  );
}
export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleSelectedFriend(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleFriends(value) {
    setFriends((list) => [...list, value]);
    handleshow();
  }

  function handleshow() {
    setShowAddFriend((show) => !show);
  }

  function handleSplit(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : { ...friend }
      )
    );
    setSelectedFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          list={friends}
          selectedFriend={selectedFriend}
          handleSelectedFriend={handleSelectedFriend}
        />
        {showAddFriend && <FormAddFriend handleFriends={handleFriends} />}

        <Button onClick1={handleshow}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill handleSplit={handleSplit} friend={selectedFriend} key={selectedFriend.id} />
      )}
    </div>
  );
}

function FriendList({ list, selectedFriend, handleSelectedFriend }) {
  let allFriends = list;
  return (
    <ul>
      {allFriends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          handleSelectedFriend={handleSelectedFriend}
        />
      ))}
    </ul>
  );
}
function Friend({ friend, selectedFriend, handleSelectedFriend }) {
  let isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt="friend" />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">{`You owe ${friend.name} $${Math.abs(
          friend.balance
        )}`}</p>
      )}
      {friend.balance > 0 && (
        <p className="green">{`${friend.name} owe you $${friend.balance}`}</p>
      )}
      {friend.balance === 0 && (
        <p>{`You owe ${friend.name} $${friend.balance}`}</p>
      )}

      <Button onClick1={() => handleSelectedFriend(friend)}>
        {isSelected ? "Close" : "Select"}{" "}
      </Button>
    </li>
  );
}

function FormAddFriend({ handleFriends }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    handleFriends(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>{"👨🏿‍🤝‍👨🏿Friend Name "}</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(() => e.target.value)}
      ></input>

      <label>{"📷Image URL "}</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(() => e.target.value)}
      ></input>

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill({ friend, handleSplit }) {
  const [bill, setBill] = useState("");
  const [expense, setExpense] = useState("");
  const [pay, setPay] = useState("user");
  let fexpense = bill ? bill - expense : "";

  function handleSubmit(e) {
    e.preventDefault();

    handleSplit(pay === "user" ? fexpense : -expense);
    setBill("");
    setExpense("");
    setPay("user");
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h1>SPLIT A BILL WITH {friend.name}</h1>
      <label>💰Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      ></input>

      <label>🕴Your expense</label>
      <input
        type="text"
        value={expense}
        onChange={(e) => setExpense(Number(e.target.value))}
      ></input>

      <label>👨🏿‍🤝‍👨🏿{friend.name}'s expense</label>
      <select value={pay} onChange={(e) => setPay(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>

      <label>🤑Who is paying the bill?</label>
      <input type="text" disabled value={fexpense}></input>
      <Button>Split bill</Button>
    </form>
  );
}

