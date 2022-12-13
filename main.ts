/**
 * Microbit DPad Bluetooth Ctrl
 * 
 * Wheel:bit app control for micro:bit
 * 
 * Arrows - Direction
 * 
 * B - Fast backward
 * 
 * C - Fast forward
 */
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_DOWN) {
        direction = 0
        speed = 30
        basic.showArrow(ArrowNames.North)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_DOWN) {
        direction = 0
        speed = -30
        basic.showArrow(ArrowNames.South)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_DOWN) {
        direction = -10
        speed = 0
        basic.showArrow(ArrowNames.West)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_DOWN) {
        direction = 10
        speed = 0
        basic.showArrow(ArrowNames.East)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        direction = 0
        speed = -90
        basic.showArrow(ArrowNames.South)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_DOWN) {
        direction = 0
        speed = 90
        basic.showArrow(ArrowNames.North)
    } else {
        direction = 0
        speed = 0
        basic.showIcon(IconNames.Ghost)
    }
})
let speed = 0
let direction = 0
let Servo_1 = 90
let Servo_2 = 90
basic.showIcon(IconNames.Yes)
basic.pause(2000)
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
    Servo_1 = 90 + (speed + direction)
    Servo_2 = 90 - (speed - direction)
    if (Servo_1 == 90) {
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else {
        pins.servoWritePin(AnalogPin.P1, Servo_1)
    }
    if (Servo_2 == 90) {
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else {
        pins.servoWritePin(AnalogPin.P2, Servo_2)
    }
})
