bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    data = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (data == "ID1") {
        servos.P1.setAngle(0)
    }
    if (data == "ID2") {
        servos.P1.setAngle(90)
    }
    if (data == "ID3") {
        servos.P1.setAngle(180)
    }
})
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
    music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
    music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
})
let data = ""
basic.showString(control.deviceName())
