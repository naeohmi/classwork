# CSS Practice

## Part 1 - Child Selectors 

-Q1: Write the appropriate css to target the `h2` nested within `article`.  Also what category of selector is this?
-A1: `section h2 { } ` category: tags

-Q2: Write the appropriate css to target only the `p` elements nested immediately under `article`, but not the `p`'s nested under `div`. Also what category of selector is this?
-A2: `section > p { } ` category: direct child

-Q3: Write the appropriate css to target only the `p` elements that are siblings of the `h2`.  Also what category of selector is this?
-A3: `section h2 ~ p { } ` category: general sibling selector

-Q4: Write the appropriate css to target only the `p` elements that are not only siblings of the `h2` but also immediately follow the `h2`.  Also what category of selector is this?
-A4: ` h2 + p { } ` category: adjacent sibling selector 

## Part 2 - Specificty

### Remember: Inline / ID / Classes & Pseudo-Classes / tags

Estimate what the folowing css specificty is for the following examples and then run them through the Specificty Calculator and compare the results:

| Q# | CSS | specificity-calcultor | 
| --- | --- | --- |
| 1 | li:first-child h2 .title | 0022 |
| 2 | #nav .selected > a:hover | 0121
| 3 | ul#summer-drinks li | 0102 |
| 4 | ul#summer-drinks li.favorite | 0112 |
| 5 | html body div#pagewrap ul#summer-drinks li.favorite | 0215 |
| 6 | ul > li ul li ol li:first-letter | 0007 |
| 7 | `<li style="color:red;">` | 0013 |
| 8 | #footer *:not(nav) li | 0102 |
| 9 | ul#nav li.active a | 0113 |
| 10 | li img:hover | 0012 |