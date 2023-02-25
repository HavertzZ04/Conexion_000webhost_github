let conexionServidor = async()=>{
    let comunicacion = await fetch("");
    let texto = await comunicacion.text();
    document.querySelector("body").innerHTML = texto;
}
conexionServidor();