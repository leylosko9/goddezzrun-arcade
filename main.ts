controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (goddezz.y >= 80) {
        goddezz.vy += -200
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.rings, 100)
    info.changeScoreBy(5)
})
let shroom: Sprite = null
let writing: Sprite = null
let bird: Sprite = null
let heart: Sprite = null
let speed = 0
let goddezz: Sprite = null
goddezz = sprites.create(img`
    . . . . . . f f f f 4 4 f . . . 
    . . . . f f a f 5 4 5 5 4 f . . 
    . . . f a 3 3 e 4 5 5 5 5 f . . 
    . . f a 3 3 3 3 e 4 4 4 e f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . . f 3 3 3 3 e a 3 e e 3 3 f . 
    . . f 3 3 3 3 f f e e e 3 3 f . 
    . . f a a a a f a f e e e 3 f . 
    . . f a a a a e 1 f 4 4 e f . . 
    . f f a a a a f 4 4 4 4 f . . . 
    . f a a a a f f f e e e f . . . 
    . . f a a f 4 4 e d d d f . . . 
    . . . f f e 4 4 e d d d f . . . 
    . . . . f a e e a d a d a f . . 
    . . . . f f d 1 d 1 d 1 f f . . 
    . . . . . . f f a a f f . . . . 
    `, SpriteKind.Player)
goddezz.setPosition(10, 80)
scene.setBackgroundImage(img`
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd1cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccddccccccccccccccccccccd11ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1cccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccc3333ccccccccccccccccccccdccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc11cccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccc333d33c3333ccccccccc99ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc11cccccccccc
    cccccccccd3cccccccccccccccccccccccccccccccccccccc333d33bb33333d33cccc9d9999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccd333d3dccccccccccccccccccccccccccccccccc33d333dbdd333bb33cccc999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccc3333333dccccccccccccccccccccccccccccccc33dbb3333333333bd333cc99999cccccccccccccccccccccccccccccd333c333dcccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccc3333333dccccccccccccccccccccccccccccccc33bb333333333333d3333d99999ccccccccccccccccccccccccccccc333333333cccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccd333333cccccccccccccccccccccccccccccccc33d33333333333333dbb399999cccccccccccccccccccccccccccccc333333333cccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccc33333ccccccccccccccccccccccccccccccccc333333333333333333db999c99cccccccccccccccccccccccccccccc333333333cccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccc3333cccccccccccccccccccccccccccccccc33333333333333333333d993cc9cccccccccccccccccccccccccccccccc3333333ccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccc33dcccccccccccccccccccccc3333cd3ccd333333333333333333399933cccccccccccccccccccccccccccccccccccc333333ccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccddccccccccccccccccccccccd33333333333b33333333333333339993333cccccccccccccccccccccccccccccccccccc3333cccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccd3333bbd33b3333b33333333333333d999333333cccccccccccccccccccccccccccccccccccc33ccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccc333333dd33dbbd33d333333333333399933333bd3dcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccc33bbd33333333bb33333333333933999333333bb33cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccd3bbd3333333333d33333333333999993333333bd33cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccd3dd333333333333dd333333333999d33333333b33ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccd3333333333333333333333333333d9933333333333dccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccc3333333333333333333333333333339993333333333dccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccd3bbb3333333333333333333333333339d3333333db33ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccc33bb3333333333333333333333333333333333333bbb3dcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccd33b3333333333333333333333333333333333333bb33dcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccc3333333333333d333333333333333333333333333333ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccc3333333333333399333333333333333333333333333dcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccd3bb33333333333d993333333333333333333333db33dcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccc33bb33333333333d99d333333333333333333333bbb33cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccc3db33333333399999933333333333333333333dbbb33ccccccccccccccccccccdddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccc33d33333339999d3d93333333333333333333333333cccccccccccccccccccc11111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccc33333339999d333333333333333333333333d3333ccccccccccccccd1111111bbd11111dcccccccccccccccccccccccccccccccccccccd1cccccccccccccccccccccc
    cccccccccccccccccccccccccccc3333d999333333333333333333333333333bb33dcccccccccccccd11ddd11dbbbd11d111ccccccccccccccccccccccccccccccccccccddcccccccccccccccccccccc
    cccccccccccccccccccccccccccc33d999d3333333333333333333333333333bbb33ccccccccccccc11bbbbb12222b11bbd1dccccccccccccccccccccccccccccccccccc111ccccccccccccccccccccc
    cccccccccccccccccccccccccccc3999933333333333333333333333333333dbd33cccccccccccccd11bb222222222222bbd1dcccccccccccccccccccccccccccccccccccdcccccccccccccccccccccc
    ccccccccccccccccccccccccd999999d3333333333333333333333333333333333dccccccccccc111113222222222222222b1111dccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccc9999999d33333333333333333333333333333333d33cccccccccccc11dbd32222222222222222211d11ccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccc99b999dcc3dd3333333333333333333333333333bb33ccccccccccc1dbb22222222222222222222bbb11cccccccd11dccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccc9999ccc33bbd33333333333333333333333333bd33ccccccccccd1bb2222222222222222222222bbd1cccccc11111dccd11dcccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccc9999ccc33bbbd3d3333333333333333333333d333cccccccccccc1d22222222222222222222222bbd1d11dc11dbb11d11111cccccccccccccccccccccccccccccccccccc
    cccccccccccccd1ccccccccc9c99cccd333333bbbd3bbbd3d333333333333333ccccccccccccd11222222222222222222222222bd1111111dbbbbd11bbb1dccccccccccccccccccccccccccccccccccc
    ccccccccccccd11ccccccccccc9dccccd333333bd33bbb33dbbd333333333b33ccccccc9cccc112222222222222222222222222b111bbddd222222bbbbb1dccccccccccccccccccccccccccccccccccc
    ccccccccccccd1ccccccccccccccccccccccc3333333d3333bb333b33333bb33ccccccc99cc11b2222222222222222222222222b11bbb222222222222bd111dccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccd33c3333dd3333333bbbd3b33dccccccc99cc11b2222222222222222222222222211b222222222222222e1111ccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccddcc3333dd3333cccccc99999c1db222222222222222222222222221d222222222222222222bb1dcccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccd333333dcccccccc999991db22222222222222222222222222222222222222222222222b11cccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc999999999b2222222222222222222222222222222222222222222222231dcccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc999dcc999d222222222222222222222222222222222222222222222231ddccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1d999b2222222222222222222222222222222222222222222221111cccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd1dbb999222222299222222222222222222222222222222222222bd1dccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd1bb229999b2222b9b22222222222222222222222222222222222bb11ccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc11b222299999b2b9b222222222222222222222222222222222222b11ccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd11d22222b999999b222222222222222222222222222222222222d1dccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd1122222222b999d22222222222222222222222222222222222b11cccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc11b222222222229922222222222222222222222222222222222b1dcccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc11b222222222229922222222222222222222222222222222222b11cccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc11bb22222222229d22222222222222222222222222222222222bd1cccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd11d22222222222222222222222222222222992222222222222bd1cccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd111322222222222222222222222222222299222222222222bb11cccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd1b2222222222222222222222222222229b222222222222b11dcccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc11b22222222222222222222222222222b9992222222222d11dccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc11b22222222222222222222222222222d999992222222311dcccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc11bb2222222222222222222222222222b922999b22222b1dccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd1db222222222222222222222222222229b22b999b22bb1dccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc11db2222222222222222222222222222b22222b9992bd1dccccccccccccccccddccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111222222222222222222222222222222222222999911ccccc99ccccccccc3333cccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd1d222222222222222222222222222222222222319999cccc999ccccccd3d3333cccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd1bb2222222222222222222222222222222222bd1dd9999cd9999cccc33333333cccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd1bb22222222222222222222222222222222bbb11cccc99999999cccc33333333cccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1dbb22222222222222222222222222222111111dccccc9999999cccc3333333dcccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd11d22222222222222222222222222bbd11111dccccccc999999ccccc333333ccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd1112222222222222222222222d1ddd11ccccccccccc9999999dccccccc333ccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd1122222222222222222222bb111111ccccccccccc99999999cccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc11b222222222222222223dbb11cccccccccccccccc9999999dcccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd1cccccccccc1dbb222222222222222111111dcccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111cccccccccc1dbb2222222222222bb11dddcccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd1dcccccccccc11bbb22222222231dd11cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc11db22222222b11111dcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111322222bb11ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccd1322211111dccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1dbbd1d1dccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc11dd1dcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111dccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c7c
    777c777c777c777c777c777c777c777c777c777c777c777c777c777c777c777c777c777c777c777c777c777c777c777c777c777c777c777c777c777c777c777c777c777c777c777c777c777c777c777c
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    `)
game.onUpdate(function () {
    if (goddezz.y < 80) {
        goddezz.ay = 425
    } else {
        goddezz.ay = 0
        goddezz.vy = 0
    }
})
game.onUpdateInterval(5000, function () {
    speed = -100 - game.runtime() / 250
    heart = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f . f f f . . . . 
        . . . . f 3 3 3 f 3 3 3 f . . . 
        . . . . f 3 3 3 3 3 1 3 f . . . 
        . . . . f 3 3 3 3 3 3 3 f . . . 
        . . . . . f 3 b b b 3 f . . . . 
        . . . . . f f b b b f f . . . . 
        . . . . . . f f b f f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, speed, 0)
    heart.y = 80
    heart.setKind(SpriteKind.Food)
})
game.onUpdateInterval(7000, function () {
    speed = -100 - game.runtime() / 250
    bird = sprites.createProjectileFromSide(img`
        ........................
        ........................
        ........................
        ........................
        ..........fffff.........
        ........ff1111bff.......
        .......fb1111111bf......
        .......f111111111f......
        ......fd1111111ffff.....
        ......fd111dd1c111bf....
        ......fb11fcdf1b1bff....
        ......f11111bfbfbff.....
        ......f1b1bdfcffff......
        ......fbfbfcfcccf.......
        ......ffffffffff........
        .........ffffff.........
        .........ffffff.........
        .........fffffff..f.....
        ..........fffffffff.....
        ...........fffffff......
        ........................
        ........................
        ........................
        ........................
        `, speed, 0)
    bird.y = 60
})
game.onUpdateInterval(500, function () {
    writing = sprites.createProjectileFromSide(img`
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ............c...c...............
        .cccc.......c...c.ccc...........
        .cccc.ccc...c...c.ccc.cccc.cccc.
        .c....ccc.ccc.ccc.c...cccc.cccc.
        .c.cc.c.c.ccc.ccc.cc....c....c..
        .c..c.c.c.c.c.c.c.c....c....c...
        .cccc.ccc.ccc.ccc.ccc.cccc.cccc.
        .cccc.ccc.ccc.ccc.ccc.cccc.cccc.
        ................................
        ....666.666.666.666...6.666.....
        ......6.6.6.666.666...6.666.....
        ....666.666.6.....6.666.6.......
        ....6.6.6...6...666.666.66......
        ....666.666.6...6.6.6.6.6.......
        ....666.6.6.666.666.666.666.....
        ....666.6.6.666.666.666.666.....
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `, speed, 0)
    writing.y = 105
})
game.onUpdateInterval(3000, function () {
    speed = -100 - game.runtime() / 250
    shroom = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . b b b b . . . . . . 
        . . . . b b 6 6 6 6 b b . . . . 
        . . . c b 6 6 6 6 1 1 b c . . . 
        . . c b 6 6 6 6 6 1 1 1 b c . . 
        . c b 1 1 1 6 6 6 6 1 1 6 c c . 
        c b d 1 1 1 6 6 6 6 6 6 6 b b c 
        c b b d 1 6 6 6 6 6 1 1 1 b b c 
        c b b b 6 6 1 1 6 6 1 1 d d b c 
        . c b b b d d 1 1 6 b d d d c . 
        . . c c b b d d b b b b c c . . 
        . . . . c c c c c c c c . . . . 
        . . . . . b b d 1 1 b . . . . . 
        . . . . . b d d 1 1 b . . . . . 
        `, speed, 0)
    shroom.y = 80
    info.changeScoreBy(10)
})
