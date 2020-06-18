const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

window.onload = () => {
    const game = new Game(ctx)

    document.getElementById ('start').onclick = () => {
        game.start('start')
    }

    document.getElementById('pause').onclick = () => {
        game.stop('pause')
    }

    const refresh = document.getElementById('refresh');
    refresh.addEventListener('click', () => {
        window.location.reload()
    })

} 