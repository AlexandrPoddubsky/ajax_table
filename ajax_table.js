(function ($) {
  // If there is AJAX on the page
  if (Drupal.ajax != undefined) {
    Drupal.ajax.prototype.commands.proper_replace = function (ajax, response, status) {
      $(response.selector).replaceWith(response.data);
      //Drupal.attachBehaviors(response.selector);
      Drupal.attachBehaviors();      
    }
  }
  // Graceful degradation
  Drupal.behaviors.ajax_table = {
    attach: function (context, settings) {
      $('.ajax-table-table-wrapper a.ajax-table-link')
        .add('.ajax-table-pager-wrapper a.ajax-table-link')
        .each(function() {
          if ($(this).hasClass('ajax-table-ajax-link')) $(this).show();
          if ($(this).hasClass('ajax-table-non-js-link')) $(this).hide();
        });
    }
  };
})(jQuery);