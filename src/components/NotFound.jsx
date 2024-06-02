import NavBar from "./NavBar";

function NotFound() {
  return (
    <>
      <NavBar/>
      <div className="text-center mt-5">
        <h1>ERROR 404</h1>
        <p>Ups pagina no encontrada...😢</p>
      </div>
    </>
  );
}

export default NotFound;
