const producto = () => [
    { id:'3', name:'Monstera', price:'240', stock:'6', categoria:'interior', image:'/assets/interior/3.jpg', description:'Los cuidados de la monstera son sumamente sencillos. Es más: puede decirse que, a pesar de sus orígenes tropicales, esta especie que se suele contar entre las plantas de interior rompe con todo lo que se le presupone a las plantas exóticas.'},
    { id:'4', name:'Hedera helix', price:'800', stock:'2', categoria:'interior', image:'/assets/interior/4.jpg', description:'Planta trepadora, perenne, perteneciente a la Familia Araliaceae. Se trata de una planta relicta, procedente de los bosques de laurisilva de la Era terciaria en Europa. La planta es una trepadora muy resistente con hojas simples,lobuladas, alternas, coriáceas, brillantes, lustrosas de color verde oscuro, con un diámetro de entre 5 y 10 centímetros. Las flores son umbellas que se inclinan hacia abajo.Posee raíces adventicias para poder agarrarse a las superficies donde se desarrolla.'},
    { id:'8', name:'Geranio', price:'480', stock:'12', categoria:'exterior', image:'/assets/exterior/8.jpg', description:'Los geranios son plantas de exterior con flores de colores vivos. Florecen durante el verano y son bastante resistentes.Se suelen cultivar en el jardín, en la terraza o el balcón pero también se pueden mantener en interior, siempre y cuando se coloquen en un lugar muy luminoso alejados de la calefacción.'},
    { id:'7', name:'Jazmín de Madagascar', price:'780', stock:'9', categoria:'exterior', image:'/assets/exterior/7.jpg', description:'La conocida como jazmín de Madagascar es una preciosa planta trepadora de flores blancas, fragantes y muy decorativas, gracias a las cuales resulta tremendamente popular en la decoración de jardines y espacios de interior bien iluminados.'},

]

export const destacados = () => {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res(producto)
        },3000)
    })
}