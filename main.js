let conexionServidor = async()=>{
    let comunicacion = await fetch("https://havertzz.000webhostapp.com/Conexion_000webhost_github/api.php");
    let texto = await comunicacion.text();
    document.querySelector("body").innerHTML = texto;
}
conexionServidor();