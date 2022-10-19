
const producto = [
    { id:'1', name:'Palmera-Tipo-Areca', price:'500', stock:'4', categoria:'interior', image:'/assets/interior/1.jpg', description:'La palmera Areca, también llamada Dypsis lutescens, palmera bambú, palmera amarilla, palma de frutos de oro o simplemente Areca, es una planta muy popular en la decoración de interiores, ya que aporta a cualquier espacio en que se ubique ese aire tropical tan único de las palmeras. Estas plantas son también muy apreciadas por su capacidad de eliminar las toxinas del aire, por lo que resultan una de las mejores plantas de interior que se pueden tener en casa.'},
    { id:'2', name:'Sanseviera', price:'670', stock:'5', categoria:'interior', image:'/assets/interior/2.jpg', description:'La sansevieria, también conocida por su nombre científico como a Sansevieria trifasciata, es una planta fácil de cultivar. También es conocida popularmente como lengua de tigre, lengua de vaca, lengua de suegra, lengua de gato, rabo de tigre y espada de San Jorge. Se trata de una planta muy decorativa y resistente. La sansevieria aguanta muy bien tanto temperaturas elevadas como bajas (hasta -5°C). Además, es una planta que ayuda a limpiar el aire del interior de la casa.'},
    { id:'3', name:'Monstera', price:'240', stock:'6', categoria:'interior', image:'/assets/interior/3.jpg', description:'Los cuidados de la monstera son sumamente sencillos. Es más: puede decirse que, a pesar de sus orígenes tropicales, esta especie que se suele contar entre las plantas de interior rompe con todo lo que se le presupone a las plantas exóticas.'},
    { id:'4', name:'Hedera helix', price:'800', stock:'2', categoria:'interior', image:'/assets/interior/4.jpg', description:'Planta trepadora, perenne, perteneciente a la Familia Araliaceae. Se trata de una planta relicta, procedente de los bosques de laurisilva de la Era terciaria en Europa. La planta es una trepadora muy resistente con hojas simples,lobuladas, alternas, coriáceas, brillantes, lustrosas de color verde oscuro, con un diámetro de entre 5 y 10 centímetros. Las flores son umbellas que se inclinan hacia abajo.Posee raíces adventicias para poder agarrarse a las superficies donde se desarrolla.'},
    { id:'5', name:'Margarita', price:'350', stock:'5', categoria:'exterior', image:'/assets/exterior/5.jpeg', description:'Se encuentran margaritas prácticamente en todo el mundo, por lo que es difícil decir exactamente su procedencia. En España, la más común es la perteneciente a la variedad Chysanthemum frutescens, que procede de las Islas Canarias y tiene flores de 3 a 5 cm de diámetro. En todos los casos se trata de una planta arbustiva y tallos leñosos, que puede alcanzar diferentes alturas y tener flores más o menos grandes, según la variedad de margarita de que se trate.'},
    { id:'6', name:'Palmera Raphis', price:'550', stock:'6', categoria:'exterior', image:'/assets/exterior/6.jpg', description:'La raphis excelsa es una palmera de maceta elegante, fácil de cuidar y poco exigente con la luz. Hay docenas de variedades de Raphis excelsa, también conocida como palmerita china, con una altura y extensión de metro y medio. En este vídeo, Iñigo Segurola nos enseña todos los trucos para su plantación y mantenimiento.'},
    { id:'7', name:'Jazmín de Madagascar', price:'780', stock:'9', categoria:'exterior', image:'/assets/exterior/7.jpg', description:'La conocida como jazmín de Madagascar es una preciosa planta trepadora de flores blancas, fragantes y muy decorativas, gracias a las cuales resulta tremendamente popular en la decoración de jardines y espacios de interior bien iluminados.'},
    { id:'8', name:'Geranio', price:'480', stock:'12', categoria:'exterior', image:'/assets/exterior/8.jpg', description:'Los geranios son plantas de exterior con flores de colores vivos. Florecen durante el verano y son bastante resistentes.Se suelen cultivar en el jardín, en la terraza o el balcón pero también se pueden mantener en interior, siempre y cuando se coloquen en un lugar muy luminoso alejados de la calefacción.'},


]



export const gfetch = () => {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res(producto)
        },3000)
    })
}

