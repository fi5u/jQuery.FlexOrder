# jquery.flexorder
A jQuery plugin that simulates the order property from the [CSS Flexible box layout module](http://www.w3.org/TR/2012/CR-css3-flexbox-20120918/), by changing the flow order of an element on small viewports. In addition to its CSS equivilant, when flexed, jquery.flexorder can move the element into a different parent element than it originally had.

*Be aware that, whereas the order CSS property only changes the visible flow, jquery.flexorder changes the DOM structure of the document; this can have accessibiliy implications.*

### Usage
```javascript
$('#selectorID').flexorder();
```
`$('#selectorID')` is the element that should be flexed.

### Optional parameters
* breakpoint (integer) - Point at which `$('#selectorID')` element moves back into the original flow **default: 960**.
* targetContainer (DOM element) - The element into which selector element should be moved to **default: parent of selector element**.
* targetPosition (string: "start" / "end") - The point in the target container where the selector element should be placed **default: "start"**.

###License
See LICENCE.md