import Footer from "./Footer";
import NavBar from "./NavBar";

function Home() {
  return (
    <>
      <NavBar />
      <div className="contPas">
        <h1 className="text-center mt-5" >Bienvenido a Happy Cake</h1>
        <p>El lugar de los pasteles felices</p>
        <i className="display-4">🎂</i>
      </div>
      <Footer numero={"1"} pagina={"Home"}/>
    </>
  );
}

export default Home;
