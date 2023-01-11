Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Fire1, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    radio.sendString("S")
    basic.showIcon(IconNames.No)
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Down, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    radio.sendString("B")
    basic.showArrow(ArrowNames.South)
})
Kitronik_Game_Controller.onButtonPress(Kitronik_Game_Controller.ControllerButtonPins.Up, Kitronik_Game_Controller.ControllerButtonEvents.Down, function () {
    radio.sendString("F")
    basic.showArrow(ArrowNames.North)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "F") {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 52)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor4, Kitronik_Robotics_Board.MotorDirection.Forward, 48)
        basic.showArrow(ArrowNames.North)
    } else if (receivedString == "B") {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, 51)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor4, Kitronik_Robotics_Board.MotorDirection.Reverse, 48)
        basic.showArrow(ArrowNames.South)
    } else if (receivedString == "S") {
        Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
        Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor4)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
radio.setGroup(1)
basic.showIcon(IconNames.Giraffe)
