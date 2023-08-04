"use client";
import Link from "next/link";
import { Provider } from "react-redux";
import "./globals.css";
import store from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <div>
        <ul>
          <li>
            <Link href="/pages/login">login</Link>
          </li>
          <li>
            <Link href="/pages/logout">logout</Link>
          </li>
        </ul>
      </div>
    </Provider>
  );
}

export default App;
