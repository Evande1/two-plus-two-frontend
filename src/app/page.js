import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/Navigation/NavBar";
import "./globals.css";
function App() {
  return (
    // <div>
    //   Home page
    //   <ul>
    //     <li>
    //       <Link href="/pages/login">login</Link>
    //     </li>
    //     <li>
    //       <Link href="/pages/logout">logout</Link>
    //     </li>
    //   </ul>
    // </div>
    <header>
      <NavBar />
    </header>
  );
}

export default App;
