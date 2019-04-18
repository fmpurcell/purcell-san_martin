// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/foto-00.jpg",
    title: "Flying Chair",
    about: "Diseño de poltrona basada en Mochi Chair en madera y tapizado de fieltro.",
}, {
    figure: "media/foto-01.jpg",
    title: "Mismidad e ipseidad",
    about: "Afiche representativo de los términos mismidad e ipseidad.",
}, {
    figure: "media/foto-03.jpg",
    title: "Longseat",
    about: "Diseño de sofá lounge en madera y cuero.",
}, {
    figure: "media/foto-04.jpg",
    title: "Silla Fluffy",
    about: "Diseño inspirado en Mochi Chair.",
}, {
    figure: "media/foto-05.jpg",
    title: "Sopa instantánea",
    about: "Nueva línea Maggi instantánea sin necesidad de revolver.",
}, {
    figure: "media/foto-06.jpg",
    title: "MAEZ",
    about: "Creación de identidad del emprendimento de aliños MAEZ.",
}, {
    figure: "media/foto-07.jpg",
    title: "Emergencia en alta mar",
    about: "Chaleco anti hipotermia post-emergencia para pescadores artesanales. ",
}, {
    figure: "media/foto-8.jpg",
    title: "Estructuras habitables",
    about: "Testeo de luces y sombras a maqueta de papel. ",
}, {
    figure: "media/foto-09.jpg",
    title: "Juego de equilibrio",
    about: "Producto que trabaja los músculos a través del equilibrio. ",
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
