# The What

SVG is

- XML-based format. (it's not HTML).
- Searchable/indexable, scalable, responsive, interactive, programmable, performant, and accessible.
- Dates back to the 90's (submission to W3C was in 1999).
- Vector differs from rastor in that an PNG image of a block with a gradient color has to store each pixel's value AND the image's header that contains the dimensions and metadata of the image. Vector on the other hand is just the metadata and the browser does all the rendering.
- SVG 1.1 2nd edition.

# Declarations

## Namespaces

- less of a URL, more of unique string.
- XML thrives to be mixed (XHTML, HTML, SVG, MathML, etc.)
- User agent uses namespaces to to distinguish between XML dialects.

```css
@namespace url(http://www.w3.org/1999/xhtml);
@namespace svg url(http://www.w3.org/2000/svg);

/* This matches all XHTML <a> elements, as XHTML is the default unprefixed namespace */
a {
}

/* This matches all SVG <a> elements */
svg|a {
}

/* This matches both XHTML and SVG <a> elements */
*|a {
}
```

<!--https://stackoverflow.com/questions/18467982/are-svg-parameters-such-as-xmlns-and-version-needed-->

- `version` is ignored by all user agents.
- `xmlns` is required for `image/svg+xml`, but not required by `text/html`. (`application/octet-stream` will be downloaded)

```css
.bg {
  background: url('data:image/svg+xml; ... ');
}
```

- to use https://caniuse.com/#feat=mdn-svg_elements_use_href or not to use https://caniuse.com/#feat=mdn-svg_elements_use_xlink_href

# How to use SVG in your markup

## `img` Tag

```html
<img
  src="rabatjs.svg"
  alt="Coolest meetup"
  onerror="this.onerror=null; this.src='image.png'"
/>
```

### Browser support

https://caniuse.com/#feat=svg-img

## CSS background

```html
<a href="/" class="logo">Our Logo</a>
```

```css
background: url(kiwi.svg);
background-size: 100px 82px;
```

### Browser support

https://caniuse.com/#feat=svg-css

## Inline SVG

```html
<body>
  <svg>
    <!-- SVG code -->
  </svg>
</body>
```

### Browser support

https://caniuse.com/#feat=svg-html5

# Basic Shapes

## Rect

The `rect` element defines a rectangle.

#### Example

```html
<rect x="10" y="20" width="50" height="75" rx="15" ry="0" />
```

## Circle

#### Example

```html
<circle cx="25" cy="75" r="20" />
```

## Ellipse

#### Example

```html
<ellipse cx="75" cy="75" rx="20" ry="5" />
```

## Line

#### Example

```html
<line x1="10" x2="50" y1="110" y2="150" />
```

## Polyline

Coordinates pairs that define x and y points. If the last coordinate is odd, it is discarded.

#### Example

```html
<polyline
  points="60, 110 65, 120 70, 115 75, 130 80, 125 85, 140 90, 135 95, 150 100, 145"
  fill="none"
  stroke="black"
/>
```

## Polygon

#### Example

```html
<polygon
  points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180"
/>
```

# Path Element

Can be used to create a shape, clip an image, create an animation, or house a text.
Whether to use the `path` element or the basic shapes is up to you. There is no performance penalty using one or the other.
A single command can be used for multiple invocations.
Commas vs Spaces: can be used interchangeably.

```xml
<path d="<letter> <point(s) (positive or negative values)>" />"
```

<!--Note to self: `(M,m) ### Syntax` sounds better-->

## Line Commands

Come in to variants, uppercase (absolute) and lowercase (relative).

### Move To

Without drawing anything, the "Move To" command jumps to a point and sits there.

#### Syntax

```
M x y
m x y
```

```xml
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">

  <path d="M10 10"/>

  <!-- Points -->
  <circle cx="10" cy="10" r="2" fill="red"/>

</svg>
```

### Line To

#### Syntax

```
L x y
l x y
H x
h x
V y
v y
```

```xml
<svg width="500" height="500">

  <path d="M 100 100 m 0 100 L 100 100" stroke="black" stroke-width="5" />
  <path d="M 10 10 H 90 V 90 H 10 L 10 10"/>

</svg>
```

### Close Path

```
Z
z
```

```xml
<path d="M 10 10 H 90 V 90 H 10 Z" fill="none" stroke="black"/>
```

## Curve Commands

### Cubic Curve

#### Syntax

```xml
C x1,y1 x2,y2 x,y # c
```

```xml
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">

  <path d="M 10 10 C 20 20, 40 20, 50 10" stroke="black" fill="transparent"/>
  <path d="M 70 10 C 70 20, 120 20, 120 10" stroke="black" fill="transparent"/>
  <path d="M 130 10 C 120 20, 180 20, 170 10" stroke="black" fill="transparent"/>
  <path d="M 10 60 C 20 80, 40 80, 50 60" stroke="black" fill="transparent"/>
  <path d="M 70 60 C 70 80, 110 80, 110 60" stroke="black" fill="transparent"/>
  <path d="M 130 60 C 120 80, 180 80, 170 60" stroke="black" fill="transparent"/>
  <path d="M 10 110 C 20 140, 40 140, 50 110" stroke="black" fill="transparent"/>
  <path d="M 70 110 C 70 140, 110 140, 110 110" stroke="black" fill="transparent"/>
  <path d="M 130 110 C 120 140, 180 140, 170 110" stroke="black" fill="transparent"/>

</svg>
```

### Smooth Cubic Curve

`S,s` command, if comes after a `C,c` or `S,s` command, uses the last point from the previous command as it's first point for its Bezier curve. If it does not follow an `C,c` or `S,s` command, the `S,s` command will behave like the `Q,q` command.

```xml
S xp,yp x,y
```

```xml
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" fill="transparent"/>
</svg>
```

### Quadratic Curve

```
Q xp,yp x,y
```

```xml
<svg width="1000" height="1000">
  <path d="M 10 10 200 200 Q 10 200 10 10 z" stroke="black" stroke-width="5" fill="none" stroke-linejoin="arcs"/>
</svg>
```

Similar to `S,s` the `T,t` command inherits its point from the last command

```
T x, y
```

```xml
<svg width="1000" height="1000" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 50 q 50 50 100 0 t 100 0 100 0 100 0 100 0" stroke-width="3" stroke="slateblue" fill="transparent"/>
</svg>
```

## Arcs

https://codepen.io/lingtalfi/pen/yaLWJG

```
A rx ry x-axis-rotation large-arc-flag sweep-flag x y
```

```xml
<svg width="1900" height="1600" xmlns="http://www.w3.org/2000/svg">
  <path d="M 230 80
       A 45 45, 0, 1, 0, 275 125
       L 275 80 Z" fill="red"
  />
</svg>
```

# Animate SVG

https://css-tricks.com/a-trick-that-makes-drawing-svg-lines-way-easier/

# Fallback
