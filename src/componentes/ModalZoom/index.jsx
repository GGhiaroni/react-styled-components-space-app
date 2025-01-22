import Imagem from "../Galeria/Imagem";

const ModalZoom = ({ foto }) => {
  return (
    <>
      {foto && (
        <>
          <dialog open={!!foto}>
            <Imagem
              src={foto.path}
              titulo={foto.titulo}
              fonte={foto.fonte}
              id={foto.id}
              expandida={true}
            />
            <form method="dialog">
              <button formMethod="dialog"></button>
            </form>
          </dialog>
        </>
      )}
    </>
  );
};

export default ModalZoom;
