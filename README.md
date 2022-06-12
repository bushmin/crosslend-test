# СrossLend test project (by Ivan Bushmin)

## _Project setup & run_
(assuming you having node.js installed)
```
npm install
npm run serve
```

## Conventions
Because this is a dummy project, I did omit several "important" parts:
1. **No page routing** (because "doc page" is the only one I had to program). That also means **No working links/navigation**
2. **No working "extra features"** like showing notifications, being able to open docs, dropdown on desktop user click in header, etc. Everything is styled, but I made working only the essential part.
3. **No storage**. In a big project I would've used Vuex, but it was overkill here (straightforward flow of data).
4. **No translations**. Just hardcoded english texts.
5. **No real data fetching from https://frontend.apply**. This website naturally has CORS policies, so I had to download both files and place them locally, simulating "fetching" them.

Of course these points (especially first two) bothered me a bit, but I had to find balance between polishing this test and time spent on it.

## Ambiguities
1. I have a windows laptop as a daily driver, so I couldn't open the Sketch file included in the task. I followed the guidelines in pdf with notes, but for all the other infinite styles I "followed my heart" and chose all the numbers (margins, font sizes, etc.) approximately. I hope that you can trust in my ability to make a pixel-perfect layout - it seems that this test is not exactly for checking this skill :)
2. I couldn't extract icons used in designs, so I used FontAwesome icons. In production code I'll use our own icons, put in some kind of svg-sprite, but in a pinch this is a very nice and fast way to prototype
3. I didn't understand from the task if it should be possible to flip ascending/descending order in sorting, so I decided that it should be possible (and added an arrow down icon that was not in design, sorry!)
4. datepicker is a really hard object to tackle in a small period of time, especially if you want it both to remain native and to style. I decided to use one famous library for it. Also I made it that date can be entered in the same manner it is displayed in the table - DD.MM.YYYY. Also, I did find it a bad UX to write "From" and "To" inside the datepickers, because after choosing dates you no longer can see which is which, but I decided to leave it this way.
5. Mechanics of popups in mobile design were not explained, so I assumed they should close on outside click. In a pinch, I did not create a separate component for Popovers (in my previous Vue project I did, and fully-operational Popover with bells and whistles takes around 1000 lines of code), but I did write a click-outside directive.
6. I added simple hover styles on clickable objects - It just seems more responsive that way, even if it is something subtle.
7. I didn't know how to get the "user role" displayed in design: it's "Admin" there, and in user info you've provided I can see only an array with two fields - "ROLE_INVESTOR" and "ROLE_INTERNAL". Without knowing the mechanics I decided to just take the first role, strip the "ROLE_" part and display it; hence, the "Investor" in my project.
8. In docs info you've provided there were unfortunately no doc descriptions and doc owners, so I just wrote "-" everywhere. But it would've been as easy as displaying doc's name or date.

## Additional info
1. I chose to make colors as css variables - they are supported by 96.5% of browsers, and it is a really nice way to handle colors (if you don't need to target older computers). You can adjust colors from one single place, you can access color values from JS (and you can't with sass variables), and most importantly - you can change these variables from code (for example, for dark theme support).
2. I also did include a bunch of qualities of life like full doc name on hover, css media queries as sass mixins, even smaller font on small devices, or "close-popover-on-outside-click" I've mentioned earlier. Feel free to look through my code and find these details :)