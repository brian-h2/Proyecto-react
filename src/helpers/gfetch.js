
const producto = [
    { id:'1', name:'Palmera-Tipo-Areca', price:'500', stock:'4', categoria:'Interior', image:'/assets/interior/1.jpg', description:'La palmera Areca, también llamada Dypsis lutescens, palmera bambú, palmera amarilla, palma de frutos de oro o simplemente Areca, es una planta muy popular en la decoración de interiores, ya que aporta a cualquier espacio en que se ubique ese aire tropical tan único de las palmeras. Estas plantas son también muy apreciadas por su capacidad de eliminar las toxinas del aire, por lo que resultan una de las mejores plantas de interior que se pueden tener en casa.'},
    { id:'2', name:'Sanseviera', price:'670', stock:'5', categoria:'Interior', image:'/assets/interior/2.jpg', description:'La sansevieria, también conocida por su nombre científico como a Sansevieria trifasciata, es una planta fácil de cultivar. También es conocida popularmente como lengua de tigre, lengua de vaca, lengua de suegra, lengua de gato, rabo de tigre y espada de San Jorge. Se trata de una planta muy decorativa y resistente. La sansevieria aguanta muy bien tanto temperaturas elevadas como bajas (hasta -5°C). Además, es una planta que ayuda a limpiar el aire del interior de la casa.'},
    { id:'3', name:'Monstera', price:'240', stock:'6', categoria:'Interior', image:'/assets/interior/3.jpg', description:'Los cuidados de la monstera son sumamente sencillos. Es más: puede decirse que, a pesar de sus orígenes tropicales, esta especie que se suele contar entre las plantas de interior rompe con todo lo que se le presupone a las plantas exóticas.'},
    { id:'4', name:'Hedera helix', price:'800', stock:'2', categoria:'Interior', image:'/assets/interior/4.jpg', description:'Planta trepadora, perenne, perteneciente a la Familia Araliaceae. Se trata de una planta relicta, procedente de los bosques de laurisilva de la Era terciaria en Europa. La planta es una trepadora muy resistente con hojas simples,lobuladas, alternas, coriáceas, brillantes, lustrosas de color verde oscuro, con un diámetro de entre 5 y 10 centímetros. Las flores son umbellas que se inclinan hacia abajo.Posee raíces adventicias para poder agarrarse a las superficies donde se desarrolla.'},
]



export const gfetch = () => {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res(producto)
        },3000)
    })
}

