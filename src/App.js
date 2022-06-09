import Header from "./components/header/header";
import Layout from "./components/layout/layout";
import Footer from "./components/footer/footer";
import Bg from "./assets/sunny-day-bg.jpg";

const App = () => {
  return (
    <>
      <Header
        title="This is title"
        descr="This is Description!"
      />
      <Layout
        title="This is title"
        descr="This is Description!"
        urlBg={Bg}
        colorBg="#e2e2e2"
      />
      <Layout
        title="This is title"
        descr="This is Description!"
        colorBg="#e2e2e2"
      />
      <Layout
        title="This is title"
        descr="This is Description!"
        urlBg={Bg}
        colorBg="#e2e2e2"
      />
      <Footer
      />
    </>
  );
}

export default App;
