const numCajas = 100;
const contenedor = document.createElement('div')
contenedor.classList.add('contenedor')
document.body.appendChild(contenedor)

const teclas = {
    "IZQD": 100,
    "DCHA": 102,
    "ARRB": 104,
    "ABBA": 98,
    "ENTER": 13,
    "ESC": 27
}
let datos
const xhttpRequest = new XMLHttpRequest()
xhttpRequest.open('GET', 'https://api.generated.photos/api/v1/faces?per_page=100&api_key=42Kk4O1UnpUidCCZVc-Q1g')
xhttpRequest.addEventListener('load', (data) => {
    datos = JSON.parse(data.target.response)
    for (let i = 0; i < numCajas; i++) {
        let ele = document.createElement('div');

        if (i % Math.sqrt(numCajas) == 0) {
            ele.style.clear = 'left'
        }

        ele.id = i
        ele.style.width = "128px"
        ele.style.height = "128px"
        ele.style.float = 'left'
        ele.style.background = `url(${datos.faces[i].urls[2][128]})`
        ele.style.backgroundPosition = "center";
        ele.style.backgroundSize = 'cover'
        ele.tabIndex = 0
        contenedor.appendChild(ele)

        ele.addEventListener('click', (ev) => { ele.focus(); console.log(ev.target.id) })
        ele.addEventListener('keydown', (ev) => {
            console.log(ev.keyCode)
            switch (ev.keyCode) {
                case teclas.IZQD:
                    ev.preventDefault()
                    if (ele.previousSibling) {
                        ele.previousSibling.focus()
                    }
                    break;
                case teclas.ARRB:
                    ev.preventDefault()
                    if (document.getElementById(ele.id - 10)) {
                        document.getElementById(ele.id - 10).focus()
                    }

                    break;
                case teclas.DCHA:
                    ev.preventDefault()

                    if (ele.nextSibling) {
                        ele.nextSibling.focus();
                    }
                    break;
                case teclas.ABBA:
                    ev.preventDefault()
                    if (document.getElementById(parseInt(ele.id) + 10)) {
                        document.getElementById(parseInt(ele.id) + 10).focus()
                    }
                    break;
                case teclas.ENTER:
                    ev.preventDefault()
                    ele.style.border = '1px solid yeallow';
                    ele.style.transform = 'scale(2,2)'
                    ele.style.filter = 'blur(5px)'
                    ele.nextSibling.focus()
                    break;
                case teclas.ESC:
                    ev.preventDefault()
                    ele.style.transform = 'scale(1, 1)';
                    ele.style.filter = "none"
                    ele.previousSibling.focus()
                    break;
            }
        })
        ele.addEventListener('focus', () => {
            ele.style.transform = 'scale(2, 2)';
            ele.style.outline = 'none';
            ele.style.zIndex = '100';
        })
        ele.addEventListener('blur', () => {
            ele.style.transform = 'scale(1, 1)';
            ele.style.zIndex = '1';
        })



    }


})
xhttpRequest.send()




