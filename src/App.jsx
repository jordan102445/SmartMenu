import Home from "./pages/Home.jsx";
import ReelPreview from "./pages/ReelPreview.jsx";
import TableAR from "./pages/TableAR.jsx";

// App chooses between the main menu, vertical reel demo, and phone camera table AR page.
export default function App() {
  const path = window.location.pathname.toLowerCase();

  if (path.includes("table-ar")) {
    return <TableAR />;
  }

  if (path.includes("reel-preview")) {
    return <ReelPreview />;
  }

  return <Home />;
}
