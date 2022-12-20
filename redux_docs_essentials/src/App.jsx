import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "./pages/layout";
import { EditPostForm, PostsList, SinglePostPage } from "./pages/post";
import { About, NotFound } from "./pages/public";

function App() {
  return (
    <div className="w-screen bg-blue-50 font-poppins">
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<PostsList />} />

            <Route path="posts">
              <Route index element={<PostsList />} />
              <Route path=":postId" element={<SinglePostPage />} />
              <Route path="edit/:postId" element={<EditPostForm />} />
            </Route>
            <Route path="about" element={<About />} />
            {/* 404 */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
