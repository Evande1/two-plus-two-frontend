import Link from "next/link";

import "./globals.css";
function App() {
  return (
    <div>
      Home page
      <ul>
        <li>
          <Link href="/pages/login">login</Link>
        </li>
        <li>
          <Link href="/pages/logout">logout</Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
