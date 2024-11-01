const inp = document.querySelectorAll('.important>.right>div>input')
const span = document.querySelectorAll('.important>.right>div>span')
const hfive = document.querySelectorAll('h5')
const li = document.querySelectorAll('li')

span.forEach((val, i) => {
    val.addEventListener('click', () => {
        inp[i].focus()
    })
})

inp[0].addEventListener('input', (e) => {
    if (inp[0].value.length > 20) {
        inp[0].value = inp[0].value.slice(0, 20)
    }
    hfive[0].innerText = inp[0].value
})

inp[1].addEventListener('input', (e) => {
    li[0].innerText = inp[1].value.slice(0, 4)
    li[1].innerText = inp[1].value.slice(5, 9)
    li[2].innerText = inp[1].value.slice(10, 14)
    li[3].innerText = inp[1].value.slice(15, 19)
    if (inp[1].value.length > 19) {
        inp[1].value = inp[1].value.slice(0, 19)
    }
})

inp[2].addEventListener('input', (e) => {
    if (inp[2].value.length == 2) {
        hfive[1].innerText = inp[2].value + "/"
    }
    if (inp[2].value.length > 5) {
        inp[2].value = inp[2].value.slice(0, 5)
    }
})

inp[3].addEventListener('input', (e) => {
    if (inp[3].value.length > 4) {
        inp[3].value = inp[3].value.slice(0, 4)
    }
})



