const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

window.onload = () => {
    const game = new Game(ctx)

    document.getElementById ('start').onclick = () => {
        game.start()
    }

    document.getElementById('stop').onclick = () => {
        game.stop()
}

}
//onclick para un solo click que queremos hacer por ejemplo play
// Para dos botones por ejemplo stop y play ya se usa
//addEventListener??