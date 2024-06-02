
// eslint-disable-next-line react/prop-types
function Footer({numero, pagina}) {
  return (
    <>
    <div className="text-center mt-4">
      <p className="fs-5">Imagen {numero}. Vista <b>{pagina}</b></p>
      <p className="fs-5" >Fuente: Desafío Latam</p>
    </div>
    </>
  );
}

export default Footer;
