let leituramotor = 0
radio.setGroup(30)
basic.clearScreen()
basic.showString("Remoto")
basic.forever(function () {
    leituramotor = pins.analogReadPin(AnalogPin.P0)
    radio.sendNumber(leituramotor)
    basic.pause(100)
})
