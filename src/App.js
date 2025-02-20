import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostsList from "./pages/PostsList";
import PostDetails from "./pages/PostDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
