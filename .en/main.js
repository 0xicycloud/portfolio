//This sets up the stage for everything
window.addEventListener("load", function() {
    var Q = window.Q= Quintus({audioSupported: ['mp3']}).include("Sprites, Scenes, Input, 2D, Anim, Touch, UI, TMX, Audio").setup({maximize: true}).controls(true).touch().enableSound();


    Q.SPRITE_PLAYER=1;
    Q.BOOKS=3; //maybe changes here
    Q.ENDSCROLL=1;

    Q.Sprite.extend("Player",{

        init: function (p) {

            this._super(p, {
                sheet: "player",
                sprite: "player",
                direction: "right", //what is right here?
                // standingPoints: "",//some 2D matrix idk
                jumpSpeed:-400,
                speed:300,
                type: Q.SPRITE_PLAYER,
                collisionMask: Q.SPRITE_DEFAULT | Q.BOOKS | Q.ENDSCROLL
            });


            // this.p.points=this.p.standingPoints;

            this.add('2d, platformerControls, animation, tween');
            
            this.on("bump.top","breakTile");

            this.on("jump");
            this.on("jumped");
        },

        jump: function(obj) {
            if(!obj.p.playedJump){
                Q.audio.play('jump.mp3');
                obj.p.playedJump=true;
            }
        },

        jumped: function(obj) {
            obj.p.playedJump=false;
        },

        //sensor?

        resetLevel: function() {
            Q,stageScene("map");
            this.animate({opacity:1});
            // Q.stageScene('hud', 3, this.p);
        }
    });

    Q.Sprite.extend("Book",{
        init: function(p){
            this._super(p,{
                sheet: p.sprite,
                type:Q.BOOKS,
                collisionMask: Q.SPRITE_PLAYER,
                sensor: true,
                vx:0,
                vy:0,
                gravity: 0
            });
            this.add("animation");

            this.on("sensor");
        },

        sensor: function(colObj) {
            //redirect to link
            Q.audio.play('coin.mp3');
            alert(Object.name);
            //optional hud
            // this.destroy();
        }
    });

    Q.Book.extend("endScroll",{
        init: function(p) {
            this.on("endPage");
        },

        endPage: function(colObj){
            Q.audio.play('bye.mp3');
            //close website
        }
    });

    Q.scene("map", function(stage) {
        Q.stageTMX("map.tmx", stage);
        stage.add("viewport").follow(Q("player").first());

    });

    // Q.scene('hud', function(stage) {
    //     //hud display
    // });

    Q.loadTMX("map.tmx, book.json, books_byBatuhan.png, player.json, dm.png, bye.mp3, coin.mp3, jump.mp3", function() {
        Q.compileSheets("dm.png", "player.json");
        Q.compileSheets("books_byBatuhan.png", "book.json");
        Q.animations("Player", {
            idle: {frames:[0,1,2,3], rate:1/15, flip: false, loop:true},
            run_right: {frames:[4, 5, 6, 7, 8, 9], rate: 1/10, flip: false, loop: true},
            run_left: {frames: [4,5,6,7,8,9], rate: 1/10, flip:"x",loop: true},
            jump_right: {frames: [10,11,12,13,14,15,16,17], rate: 1/10, flip:false},
            jump_left: {frames: [10,11,12,13,14,15,16,17], rate: 1/10, flip: "x"}
        });
        Q.stageScene("map");
        // Q.stageScene('hud', 3, Q('player').first().p);
    });
});
