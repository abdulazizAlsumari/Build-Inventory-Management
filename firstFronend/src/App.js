import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import StockEventsTable from "./components/StockEventsTable";
import axios from "axios";

//Products
const fetchedproducts = [{ id: 1, name: "reashof", prise: 45 }];
//  { id: 2, name: "alsdr", prise: 45 },
//  { id: 3, name: "rabi3", prise: 45 }];

//stockevents
const fetchedStockproducts = [
  // { id: 1, type: "add", qty: 100, proudct: fetchedproducts[0] },
  // { id: 2, type: "delete", qty: -20, proudct: fetchedproducts[0] },
  // { id: 3, type: "delete", qty: -40, proudct: fetchedproducts[0] },
  // { id: 4, type: "add", qty: 60, proudct: fetchedproducts[1] },
  // { id: 5, type: "delete", qty: -90, proudct: fetchedproducts[2] },
];

class App extends Component {
  state = {
    fetchedproducts,
    fetchedStockproducts,
  };

  async componentDidMount() {
    const ProductsRes = await axios({
      method: "GET",
      url: "http://localhost:1337/Proudcts",
    });
    
    const StockEventsRes = await axios({
      method: "GET",
      url: "http://localhost:1337/Stockevents",
    });
    

    const FetchP=ProductsRes.data;
    const FetchS=StockEventsRes.data;

    this.setState({fetchedproducts:FetchP,fetchedStockproducts:FetchS})

  }

  render() {
    return (
      <div className="App">
        <p>hony</p>
        <StockEventsTable
          proudcts={this.state.fetchedproducts}
          stockEvents={this.state.fetchedStockproducts}
        />
      </div>
    );
  }
}
export default App;
