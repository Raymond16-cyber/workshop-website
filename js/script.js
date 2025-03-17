const addBtn = document.querySelector('fas fa-plus-circle')
const minusBtn = document.querySelector('fas fa-minus-circle')

const trashItem = document.querySelector('fas fa-trash-alt')

// like buttons
const heartBtn1 = document.querySelector('#like1')
const unheartBtn1 = document.querySelector('#unlike1')
const heartBtn2 = document.querySelector('#like2')
const unheartBtn2 = document.querySelector('#unlike2')
const heartBtn3 = document.querySelector('#like3')
const unheartBtn3 = document.querySelector('#unlike3')

// delete buttons
const deleteBtn1 = document.querySelector('#deleteBtn1')
const deleteBtn2 = document.querySelector('#deleteBtn2')
const deleteBtn3 = document.querySelector('#deleteBtn3')


const firstItem = document.querySelector('#itemOne')
const secondItem = document.querySelector('#itemTwo')
const thirdItem = document.querySelector('#itemThree')

// Increse and decrease buttons
const increase1 = document.querySelector('#increment1')
const increase2 = document.querySelector('#increment2')
const increase3 = document.querySelector('#increment3')
const decrease1 = document.querySelector('#decrement1')
const decrease2 = document.querySelector('#decrement2')
const decrease3 = document.querySelector('#decrement3')


// quantity
const quantity1 = document.querySelector('.quantity1')
const quantity2 = document.querySelector('.quantity2')
const quantity3 = document.querySelector('.quantity3')

// Pricing
const price1 = document.querySelector('.unit-price1')
const price2 = document.querySelector('.unit-price2')
const price3 = document.querySelector('.unit-price3')

// T0tal price
let totalPrice = document.querySelector('.total')



/*---------------------------------Liking items------------------------- */
//    button for first item
unheartBtn1.addEventListener('click',function like(){
    heartBtn1.style.display = "inline";
    unheartBtn1.style.display = "none";

 })
heartBtn1.addEventListener('click',function like(){
    unheartBtn1.style.display = "inline";
    heartBtn1.style.display = "none";

 })

//    button for second item
unheartBtn2.addEventListener('click',function like(){
    heartBtn2.style.display = "inline";
    unheartBtn2.style.display = "none";

 })
 heartBtn2.addEventListener('click',function like(){
    unheartBtn2.style.display = "inline";
    heartBtn2.style.display = "none";

 })

//    Button for third item
unheartBtn3.addEventListener('click',function like(){
    heartBtn3.style.display = "inline";
    unheartBtn3.style.display = "none";
 })
 heartBtn3.addEventListener('click',function like(){
    unheartBtn3.style.display = "inline";
    heartBtn3.style.display = "none";

 })



/*---------------------------------Deleting items------------------------- */
// Deleting first item
deleteBtn1.addEventListener('click',function delete1(){
    firstItem.innerHTML = ""
})

// deleting second item
deleteBtn2.addEventListener('click',function delete2(){
    secondItem.innerHTML = ""
})

// deleting third item
deleteBtn3.addEventListener('click',function delete3(){
    thirdItem.innerHTML = ""
})


//increasing quantities
increase1.addEventListener('click',incQuantity1)
increase2.addEventListener('click',incQuantity2)
increase3.addEventListener('click',incQuantity3)

let a = 1
let b = 1
let c = 1
let d = 0
let e = 0
let f = 0

function incQuantity1(){
    quantity1.innerHTML = a++;
    let total1 = price1.innerHTML = `${d += 100}$`
    totalPrice.innerHTML = `${total1}`
}
function incQuantity2(){
    quantity2.innerHTML = b++
    let total2 =price2.innerHTML = `${e += 40}$`
  
}
function incQuantity3(){
    quantity3.innerHTML = c++
    let total3 =price3.innerHTML = `${f += 70}$`
   
}

//decreasing quantities
decrease1.addEventListener('click',decQuantity1)
decrease2.addEventListener('click',decQuantity2)
decrease3.addEventListener('click',decQuantity3)
function decQuantity1(){
    quantity1.innerHTML = a--
}
function decQuantity2(){
        quantity2.innerHTML = b--
}
function decQuantity3(){
        quantity3.innerHTML = c--
}






