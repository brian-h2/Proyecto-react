const productos = [
    { id:'1', name:'Palmera Tipo Areca', price:'500', stock:'4', category:'Interior', image:'.../public/assets/Interior/1.jpg'}
]

export const gfetch = () => {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res(productos)
        
        },3000)
    })
}

