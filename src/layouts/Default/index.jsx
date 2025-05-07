
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
const Index = (props) => {
  return (
    <>
      <Header />
      <main id="main">{props.children}</main>
      <Footer />
    </>
  );
};

export default Index;
