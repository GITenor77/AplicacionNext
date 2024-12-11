export default function Noticia({params}){
    return(
        <>
            <h1>Te encuentras en Noticias</h1>
            <p>{params.id}</p>
        </>
    );
}