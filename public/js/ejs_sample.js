$(function() {
    var controller = {
      __name: 'NumListController',
      __templates: 'js/ejs/list.ejs',

      '#output click': function() {
        var to = this.$find('#to').val();
        if (!to) { returnl; }
        try {
          to = parseInt(to);
        } catch(e) {
          return;
        }

        this.view.append('#list', 'list', {num: to});
      }
    };

    h5.core.controller('#container', controller);
});
