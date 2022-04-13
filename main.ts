let stred = [2, 2]
let ctverec = [[1, 0], [3, 0], [1, 1], [3, 1]]
let carka_ctverec = [[1, 0], [2, 0], [1, 1], [2, 1]]
// šlo by to ještě přepočítávat skrze střed
zrcadlit()
function zobraz() {
    basic.clearScreen()
    led.plotBrightness(stred[0], stred[1], 150)
    for (let i of ctverec) {
        led.plot(i[0], i[1])
    }
    for (let e of carka_ctverec) {
        led.plot(e[0], e[1])
    }
}

function zrcadlit() {
    for (let i = 0; i < ctverec.length; i++) {
        for (let e = 0; e < 2; e++) {
            carka_ctverec[i][e] = ctverec[i][e] + 2 * (stred[e] - ctverec[i][e])
        }
    }
    // vzorec od Kelbasy
    zobraz()
}

forever(function on_forever() {
    let x: number;
    let y: number;
    basic.clearScreen()
    for (let bod of ctverec) {
        x = 0 * (bod[0] - stred[0]) - 1 * (bod[1] - stred[1]) + stred[0]
        y = 1 * (bod[0] - stred[0]) + 0 * (bod[1] - stred[1]) + stred[1]
        bod[0] = x
        bod[1] = y
    }
    for (let h of ctverec) {
        led.plot(h[0], h[1])
    }
    led.plotBrightness(2, 2, 100)
    zrcadlit()
    basic.pause(1000)
})
