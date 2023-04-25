import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import PostView from "./components/pages/PostView";
import PostAdd from "./components/pages/PostAdd";
import PostEdit from "./components/pages/PostEdit";
import About from "./components/pages/About";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import Container from "./components/common/Container/Container";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Provider store={store}>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/post/:id" element={<PostView />} />
              <Route path="/post/add" element={<PostAdd />} />
              <Route path="/post/edit/:id" element={<PostEdit />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
          </Provider>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
