# editore.js image plugin [![npm version](https://badge.fury.io/js/editore-image-plugin.svg)](http://badge.fury.io/js/editore-image-plugin)

#### install
Available on npm: `npm install editore-image-plugin` or [directly download](https://github.com/evandroeisinger/editore-image-plugin.js/raw/master/src/editore-image-plugin.js)

#### basic usage
It's easy to use! Load [editor.js](https://github.com/evandroeisinger/editore.js) into your application, instantiate it and register the new **insert** plugin.

```javascript
var editor = new Editor(document.getElementById('editor')),
    ImagePlugin;

// Global
ImagePlugin = window.EditoreImagePlugin;
// CommonJS
ImagePlugin = require('editore-image-plugin');

// then register!
editor.registerInsertComponent(ImagePlugin);
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
