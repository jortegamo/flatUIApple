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



