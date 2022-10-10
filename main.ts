function aparecer_enemigo () {
    enemigo = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(500)
        enemigo.change(LedSpriteProperty.Y, 1)
    }
}
input.onButtonPressed(Button.A, function () {
    nave.move(-1)
})
input.onButtonPressed(Button.B, function () {
    nave.move(1)
})
let enemigo: game.LedSprite = null
let nave: game.LedSprite = null
nave = game.createSprite(2, 4)
enemigo = game.createSprite(randint(0, 4), 0)
game.setLife(3)
game.startCountdown(60000)
basic.forever(function () {
    if (enemigo.isTouching(nave)) {
        basic.showIcon(IconNames.Sad)
        game.removeLife(1)
        game.addScore(-2)
    } else if (enemigo.isTouchingEdge()) {
        game.addScore(1)
        enemigo.delete()
        basic.pause(200)
        aparecer_enemigo()
    }
})
