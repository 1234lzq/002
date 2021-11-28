input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        # # # . #
        # . . . #
        . # # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # # # .
        # # . # #
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("having dinner")
    basic.showLeds(`
        . # # # .
        # # # . #
        # . . # #
        . # # # .
        . . . . .
        `)
    basic.pause(200)
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
    basic.pause(100)
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
    basic.pause(100)
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
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # # # .
        # # . # #
        # . . . #
        . # # # .
        `)
})
basic.showString("Pet Shrem!!!")
basic.showLeds(`
    . . . . .
    . # # # .
    # # . # #
    # . . . #
    . # # # .
    `)
