input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . # # . .
        # # . # .
        # . # # .
        # . . # .
        . # # . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . # # # .
        # # . # #
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        # # # . #
        # . . . #
        . # # # .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . # # # .
        # # . # #
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.showString("having dinner.")
    basic.showLeds(`
        . # # # .
        # # # . #
        # . . # #
        . # # # .
        . . . . .
        `)
    basic.pause(200)
    _001 = _001 + 1
    basic.showIcon(IconNames.Yes)
    basic.showLeds(`
        . . . . .
        . # # # .
        # # . # #
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . # # # .
        # # . # #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . # # # .
        # # . # #
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        # # . # #
        # . . . #
        . # # # .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . # # # .
        # # . # #
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        # . # # #
        # . . . #
        . # # # .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . # # # .
        # # . # #
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . # # .
        . # . # #
        . # # . #
        . # . . #
        . . # # .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . # # # .
        # # . # #
        # . . . #
        . # # # .
        `)
})
let _001 = 0
basic.showString("Pet Shrem!!!")
basic.showLeds(`
    . . . . .
    . # # # .
    # # . # #
    # . . . #
    . # # # .
    `)
_001 = 10
basic.forever(function () {
    control.waitMicros(60000)
    _001 = _001 - 1.5
})
basic.forever(function () {
    if (_001 < 5) {
        basic.showString("I'm hungry.")
    } else if (_001 >= 5) {
        basic.showString("I'm full.")
    }
})
