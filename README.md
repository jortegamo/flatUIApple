# flatUIApple
A easy way to create dynamics flatUIs with Apple style.
##Usage
###Step1:
include: CSS Y JS references.

```html
  <script src="flatUIgen.js"></script>
  <link rel="stylesheet" type="text/css" href="flatUI.css">
```

###Step2:
create a FlatUI object using the FlatUI manager. 

```javascript
  flat = FlatUI.create(type);
  FlatUI.setScreen(flat,urlImage);
  FlatUI.setId(flat,_id);
  flat.JqueryObj.appendTo(cssSelector);
```

type must be into: 

```javascript
['iMac','Macbook']
```
###FlatUIManager functions:

FlatUIManager is accesible as FlatUI.

####create
```javascript
  FlatUI.create(mode);
```
*mode: [String] options: ``` ['iMac', 'Macbook']```
*returns: [FlatUI Object]. 

####setId
```javascript
  FlatUI.setId(flat,_id)
```
*flat: [FlatUI Object].
*_id: [String] Html ID.
*result: sets a Id value to the FlatUI object.

####setScreen
```javascript
  FlatUI.setScreen(flat,urlImage)
```
*flat: [FlatUI Object]
*urlImage: [String] Image path.
*result: set the src attribute of the image element within the screen.

####setSize
```javascript
  FlatUI.setSize(sizeOption)
```
*sizeOption: [String] options: ``` ['small', 'medium', 'large']```
*result: scales the FlatUI object. If sizeOption is not passed (default).
  
####destroy
```javascript
  FlatUI.destroy(flatObject)
```
*flatObject: [FlatUI Object].
*result: destroy the Jquery FlatUI object and the FlatUI Object.

###FlatUI Object

```javascript
  var flat = {JqueryObj: // Jquery Object created dynamically}
```
  

