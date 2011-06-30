(function() {
  var parentView, childView, childViews;
  var get = SC.get;

  module('tests/views/view/child_views_tests.js', {
    setup: function() {
      parentView = SC.View.create({
        render: function(buffer) {
          buffer.push('Sprout');
        }
      });

      childView = SC.View.create({
        template: function() { return 'Core'; }
      });

      childViews = get(parentView, 'childViews');
    },

    teardown: function() {
      parentView.destroy();
      childView.destroy();
      childViews = null;
    }
  });

  // no parent element, no buffer, no element
  // no parent element, buffer, no element
  // parent element
  test("should render an inserted child view when the child is inserted before a DOM element is created", function() {
    childViews.pushObject(childView);

    SC.run(function() {
      parentView.append();
    });

    equals(parentView.$().text(), 'SproutCore', 'renders the child view after the parent view');
  });
})();
