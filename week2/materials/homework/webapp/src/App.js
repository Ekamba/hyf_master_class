import Products from "./components/Products";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <h1 className="text-white">Good Green Groceries</h1>
      <Products />
    </div>
  );
}

export default App;
