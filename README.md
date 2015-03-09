# editore.js image plugin [![npm version](https://badge.fury.io/js/editore-image-plugin.svg)](http://badge.fury.io/js/editore-image-plugin)

#### install
Available on npm: `npm install editore-image-plugin` or [directly download](https://github.com/evandroeisinger/editore-image-plugin.js/raw/master/src/editore-image-plugin.js)

#### basic usage
It's easy to use! Load [editore.js](https://github.com/evandroeisinger/editore.js) into your application, instantiate it and register the new **insertion** plugin.

```javascript
var editore = new Editore(document.getElementById('editor')),
    ImagePlugin;

// Global
ImagePlugin = window.EditoreImagePlugin;
// CommonJS
ImagePlugin = require('editore-image-plugin');

// then register!
editore.registerInsertComponent(ImagePlugin, {
  // method called after the image has been uploaded
  uploadComplete: function(image, figure) {
    // arguments
    // - image: DOMElement of uploaded image
    // - figure: DOMElement of uploaded image wrapper
  },
  // (optional) method used if the application needs to upload file, otherwise will be used the image base/64 format
  uploadService: function(file, done) {
    // arguments
    // - file: Selected File
    // - done(uploadedImageUrl): Resolve upload method
    done('example.jpg');
  }
});
```
---
#### support
- chrome: ?
- firefox: ?
- safari: ?
- internet explore: ?


---
#### contribute
Everyone can contribute! Finding bugs, creating issues, improving editor it self or creating components.
Every contribution will be welcomed! :santa: 

**Fork it** -> **Branch it** -> **Test it** -> **Push it** -> **Pull Request it** :gem:  
