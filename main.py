stred = [2,2]
ctverec = [[1,0], [3,0], [1,1], [3,1]]
carka_ctverec = [[1,0], [2,0], [1,1], [2,1]]
#šlo by to ještě přepočítávat skrze střed
zrcadlit()

def zobraz():
    
    basic.clear_screen()
    led.plot_brightness(stred[0], stred[1], 150)

    for i in ctverec:
        led.plot(i[0], i[1])

    for e in carka_ctverec:
       led.plot(e[0], e[1])

def zrcadlit():

    for i in range(ctverec.length):

        for e in range(0,2):
            carka_ctverec[i][e] = ctverec[i][e] + 2*(stred[e]-ctverec[i][e]) #vzorec od Kelbasy

    zobraz()

def on_forever():
    basic.clear_screen()
    for bod in ctverec:
        x = 0 * (bod[0] - stred[0]) - 1 * (bod[1] - stred[1]) + stred[0]
        y = 1 * (bod[0] - stred[0]) + 0 * (bod[1] - stred[1]) + stred[1]
        bod[0] = x
        bod[1] = y

    for h in ctverec:
        led.plot(h[0], h[1])
    led.plot_brightness(2, 2, 100)
    zrcadlit()
    basic.pause(1000)
forever(on_forever)