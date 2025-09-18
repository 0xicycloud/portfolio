# Project: Barebone Game Engine Library
A modern port for Quintus Game Engine, reimplemented because I wanted to learn JavaScript

>[!Note] Pick and dump only the /lib
> `Quintus.js` is the main backbone for the gameengine

## quintus_2d:{3}
- 
## quintus_anim:{4}
- `Anim` module adds animation to sprites
- `viewport` follows the player
- `Q.Repeater` endless scrolling background


## quintus_audio: [SIMPLE]
- adds audio file support


## quintus_input:[SIMPLE]{5}
- adds keyboard binding


## quintus_scenes:{7}
- `Q.scene` class which allows reusable scenes
- `Q.stage` class which allows sprite management in a scene


## quintus_sprites:{6}
- `Q.sprites` which adds support via `Q.SpriteSheet` classes


## quintus_tmx:{last}
- handles `tmx` file handling

>[!ToDo]
> add support for the new `csv` instead of deprecated `.xml`



## quintus_touch:
- adds touch screen binding

>[!NOTE] Remove this and merge in input.js
> OVR if implementation is too long

## quintus_ui:{2}




## quintus:{1}
- `Quintus()` method instantiate the engine
- Binds to the canvas context
