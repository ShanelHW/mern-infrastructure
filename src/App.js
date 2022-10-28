import "./App.css";

import { useState } from "react";
import {Routes, Route} from 'react-router-dom'
import AuthPage from "./pages/AuthPage";
import NewOrderPage from "./pages/NewOrderPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import NavBar from './components/NavBar.js'
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  return (
    <main className="App">
      { user ?
        <>
          <NavBar />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
        :
        <><NavBar /><AuthPage /></>
      }
    </main>
  );
    }

    export default App;
