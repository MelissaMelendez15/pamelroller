const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

window.onload = () => {
    const game = new Game(ctx)

    document.getElementById ('start').onclick = () => {
        game.start('start')
    }

    document.getElementById('stop').onclick = () => {
        game.stop('stop')
}

}
//onclick para un solo click que queremos hacer por ejemplo play 