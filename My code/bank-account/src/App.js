import { useReducer } from "react";
import "./App.css";

function reducer(state, action) {
  switch (action.type) {
    case "open":
      return { ...state, balance: 500, isActive: true };
    case "deposit":
      return { ...state, balance: state.balance + 150 };
    case "withdraw":
      return { ...state, balance: state.balance - 50 };
    case "requestLoan":
      return { ...state, loan: 5000 };
    case "payLoan":
      return { ...state, balance: state.balance - 5000, loan: 0 };
    case "close":
      return { initialState };
    default:
      throw new Error("Unknown Case");
  }
}

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { balance, loan, isActive } = state;

  function openHandler() {
    dispatch({ type: "open" });
  }
  function depositHandler() {
    dispatch({ type: "deposit" });
  }
  function withdrawHandler() {
    dispatch({ type: "withdraw" });
  }
  function requestLoanHandler() {
    dispatch({ type: "requestLoan", payload:false });
  }
  function payLoanHandler() {
    dispatch({ type: "payLoan" });
  }
  function closeAccountHandler() {
    dispatch({ type: "close" });
  }
  
  return (
    <div className="App">
      <Header />
      <Status state={state} />
      <div className="status">
        <Button  handler={openHandler} isActive={isActive}>
          Open Account
        </Button>
        <Button  handler={depositHandler} isActive={!isActive}>
          Deposit 150
        </Button>
        <Button  handler={withdrawHandler} isActive={!isActive}>
          Withdraw 50
        </Button>
        <Button  handler={requestLoanHandler} isActive={!isActive}>
          Request a loan of 5000
        </Button>
        <Button  handler={payLoanHandler} isActive={!isActive}>
          Pay Loan
        </Button>
        <Button  handler={closeAccountHandler} isActive={!isActive}>
          Close Account
        </Button>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1>useReducer Bank Account</h1>
    </div>
  );
}

function Status({ state }) {
  return (
    <div className="status">
      <span>
        <strong>Balance</strong> : {state.balance}
      </span>{" "}
      <span>
        <strong>Loan</strong> : {state.loan}
      </span>
    </div>
  );
}

function Button({ handler, isActive, children }) {
  return (
    <button
      onClick={() => {
        handler();
      }}
      disabled={isActive}
    >
      {children}
    </button>
  );
}

export default App;
