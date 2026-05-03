let i = 0
let j = 0
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    i = 1 - i
    if (i == 1) {
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 90)
    } else if (i == 0) {
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 45)
    }
})
input.onButtonPressed(Button.AB, function () {
    j = 1 - j
    if (j == 1) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 20)
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (j == 0) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, -20)
        basic.showLeds(`
            . . # . .
            . # . # .
            . # . # .
            . # . # .
            . . # . .
            `)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && !(input.buttonIsPressed(Button.AB))) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, -20)
    } else if (input.buttonIsPressed(Button.B) && !(input.buttonIsPressed(Button.AB))) {
        wuKong.setMotorSpeed(wuKong.MotorList.M2, 20)
    } else {
        wuKong.stopAllMotor()
    }
})
