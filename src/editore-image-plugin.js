(function(global, plugin) {
  'use strict';

  if (typeof define === 'function' && define.amd)
    define('editore-image-plugin', plugin);
  else if (typeof exports !== 'undefined')
    exports.EditoreImagePlugin = plugin();
  else
    global.EditoreImagePlugin = plugin();
}(window, function() {
  'use strict';

  function EditoreImagePlugin() {
    var self = this;
    // set plugin elements/props
    self.button = document.createElement('button');
    self.button.innerText = 'Insert Image';
    self.name = 'imageInsertPlugin';
  }

  EditoreImagePlugin.prototype = {
    action: function(field, e) {
      e.preventDefault();
    },

    destroy: function() {}
  };

  return EditoreImagePlugin;
}));
    
