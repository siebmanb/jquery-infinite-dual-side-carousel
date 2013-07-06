# jQuery infinite mobile dual side carousel

This code is an example of an infinite carousel in jQuery that allowed you to swipe in 4 directions (right, left, up and down), both on a desktop and a mobile. 

## 3rd party libraries used
This code uses jQuery, jQuery Mobile and a great code posted on Blogger to detect swipeup and swipedown by Blackdynamo (link included in the file). All the libs are included, so the code will work out of the box.

## Usage
Simply put the files on a webserver and open index.html from a mobile or a desktop.

## Demo
A working demo is available [online](http://siebmanb.com/jquery-inifinite-dual-side-carousel).

## Method used
The page displays a block showing its x and y coordinates. When a user swipes on the block, we compute direction and specifications for the next block to appear. We create that block and make it slide in front of the user. We then delete the old block. We never have more that 2 blocks at a time in the DOM.

## Compatibility
This code was tested on Chrome 27.0, Firefox 21, Safari 6.0.5 and mobile Safari 6.

## Possible improvements
Make it a jQuery plugin to apply on any div. Make a block follow the finger when swiped.

## Known issues
None for the moment.

## Contributing
You are welcome to contribute code and suggestions to this project !