# calculate-position

Calculates the best position (left/top coords) for a given anchor and dimensions.
### Example (es module)

```js
import calculateBestPosition from 'calculate-position'
const anchor = popupAnchorElement.getBoundingClientRect()
const dimensions = {width: popupWidth, height: popupHeight}
console.log(calculateBestPosition({anchor, dimensions}))
// => {left: 200, top: 100}
```
@param anchor - anchor position that calculations will be based of. Typically an element being hovered over.
@param dimensions - width/height dimensions of popup element
@param viewport - optional viewport rectangle (defaults to window)
