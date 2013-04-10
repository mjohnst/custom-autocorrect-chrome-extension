/**
 * Creator: Michael Johnston
 *          mjohnst.com
 *
 *          April 10, 2013
 */

generatePopup = {

  /** 
   * Populates list with user's current monitored lists
   *
   * @private
   */
  populate_list_: function() {
    var input_list = document.getElementById("input-list");

    for(var url in localStorage) {
        if (input_list.firstElementChild.id === "empty-list")
          input_list.removeChild(input_list.firstElementChild);

        var new_li = document.createElement("li");

        input_list.appendChild(new_li);
    }
  },

  observe_form_: function() {
    var button = document.getElementById("add");

    button.addEventListener("click", function() {
      var url = document.getElementById("url").value;
      var selector = document.getElementById("selector").value;

      this.populate_list_() // repopulate list with new element
    });
  },

  /**
   * Populate a list of URLs and text input selectors where autocomplete will be enabled
   * Fills out list and when user adds data
   */

  go: function() { 
    this.populate_list_();
    this.observe_form_();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  generatePopup.go();
});