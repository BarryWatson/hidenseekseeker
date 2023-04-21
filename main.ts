radio.onReceivedNumber(function (receivedNumber) {
    signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
})
let proximity = 0
let tone = 0
let signal = 0
radio.setGroup(1)
signal = 0
basic.forever(function () {
    tone = Math.map(signal, -128, -42, 131, 988)
    proximity = Math.round(Math.map(signal, -128, -42, 0, 9))
    basic.showNumber(proximity)
    music.playTone(tone, music.beat(BeatFraction.Whole))
    basic.pause(1000)
})
