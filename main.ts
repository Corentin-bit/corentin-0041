let temps = 0
input.onButtonPressed(Button.A, function () {
    temps = 9
    while (temps >= 0) {
        basic.showNumber(temps)
        temps += -1
    }
    basic.clearScreen()
})
