basic.forever(function () {
    led.enable(true)
    basic.showLeds(`
        # . # . #
        . # . # .
        . . . . .
        # . . # .
        . # . . .
        `)
    radio.setFrequencyBand(83)
})
