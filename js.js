window.addEventListener('load', initScene)

const patos = [
    { x: 0, y: 0, z: -30 },
    { x: 0, y: 0, z: 30 },
    { x: 30, y: 0, z: 0 },
    { x: -30, y: 0, z: 0 },
    { x: 20, y: 0, z: 20 },
    { x: 20, y: 0, z: -20 },
    { x: -20, y: 0, z: -20 },
    { x: -20, y: 0, z: 20 }
]

let pato, score = 0

function initScene() {

    let orbits = document.querySelectorAll('.orbit')

    orbits.forEach(orbit => {

        patos.forEach(pos => {

            pato = document.createElement('a-entity')
            pato.setAttribute('geometry', { primitive: 'circle', radius: Math.random() * 3 + 0.5 })
            pato.setAttribute('look-at', '#arma')
            pato.setAttribute('material', { shader: 'flat', side: 'double', src: '#pato' })
            pato.setAttribute('class', 'pato')
            pato.object3D.position.set(pos.x, pos.y, pos.z) 

            pato.setAttribute('shootable', '') 

            orbit.appendChild(pato) 
        })
    })
}

AFRAME.registerComponent('shootable', {
    init: function () {
        this.el.addEventListener('click', () => {
            this.el.parentNode.removeChild(this.el) 
            document.querySelector('[text]').setAttribute('value', `${++score} PATOS ACERTADOS`)
        })
    }
})