//promesas manuela

/* let promesa = new Promise(resolve, reject, () => {
    setTimeout(() => {
        console.log("Ejecucion postergada");
        
    }, 2000);
})
 */

//promesa que ya esta hecha, que pasa cuando esta bien y cuando esta mal
/* fetch('https://dummyjson.com/products')
.then((response) =>{
    console.log("Respuesta obtenida");
    console.log("paso a convertirla a Json");
    //console.log(json);
    return response.json()
    
    
}).then((response1) => {
    console.log(response1);
}).catch(() => {
    console.log("contestacion incorrecta");
    
})
 */

//return implicito de la promesa
let productosTotales;
let productosFiltrados
fetch('https://dummyjson.com/products')
.then((response) => response.json())// retorno implicito
.then((response1) => {
    productosTotales = response1.products

    console.log("Productos mostrados filtrados");
    
    productosFiltrados = productosTotales.filter(item => item.price <100)
    productosFiltrados.forEach(element => {
        console.log(`${element.title} ${element.price}`);
        
    });
/*  product.forEach(element => {
        console.log(element.title);
        
    }); */
}).catch(() => {
    console.log("contestacion incorrecta");
    
}).finally(() => {
    console.log("Finalizando dependencias de la promesa");//el finally es optativa
})



//promesa manual
/* let promesa = new Promise((resolve, reject) => {
    //logica de la promesa
    setTimeout(() => {
        let num = Math.random() * 10;

        if (num < 5) {
            reject("Numero muy pequeño");
        }else{
            resolve(num)
            
        }
    }, 2000);
});
//then -> tratar la respuesta correcta 
//catch -> tratar la respuesta incorrecta
promesa.then((res)=>{
    console.log(`Numero calculado con valor ${res}`);
}).catch((rej) => {
    console.log(rej);
    
})
 */
