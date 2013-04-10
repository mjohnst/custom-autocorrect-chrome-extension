/**
 * Creator: Michael Johnston
 *          mjohnst.com
 *
 *          April 10, 2013
 */

var generatePopup = {

  /** 
   * Populates list with user's current monitored lists
   *
   * @private
   */
  populate_list_: function() {
    // exit if no localStorage
    if (!localStorage.length) { 
          return false;
    }

    // get clean list for writing
    var input_list = document.getElementById("input-list");
    input_list.innerHTML = "";


    // write all urls with list of tracked selectors
    for(var url in localStorage) {
        if(!JSON.parse(localStorage[url]).length){
          localStorage.removeItem(url);
          continue;
        }
        // create label for url
        var new_ul_label = document.createElement("li");
        new_ul_label.innerHTML = url;
        input_list.appendChild(new_ul_label);

        // add url unordered list
        var url_ul = document.createElement("ul");
        input_list.appendChild(url_ul);

        // add selectors to url unordered list
        for(var selector in JSON.parse(localStorage[url])) {
          var new_li = document.createElement("li");
          new_li.setAttribute("data-url",url);
          new_li.setAttribute("data-selector",selector);
          
          // add removal functionality
          new_li.innerHTML = JSON.parse(localStorage[url])[selector] + '<a href="#">x</a>';
          new_li.childNodes[1].addEventListener("click", function() { // add listener to anchor
            list_node = this.parentElement
            remove_url = list_node.getAttribute('data-url');
            remove_selector = list_node.getAttribute('data-selector');

            selectors = JSON.parse(localStorage[remove_url]);
            selectors.splice(remove_selector,1);
            localStorage[remove_url] = JSON.stringify(selectors);

            generatePopup.populate_list_();
          });
          url_ul.appendChild(new_li);
        }
    }
    return true;
  },

  /**
   * Listen to form for new selectors to be added
   *
   * @private
   */
  observe_form_: function() {
    var button = document.getElementById("add");

    button.addEventListener("click", function() {
      var url = document.getElementById("url").value;
      var selector = document.getElementById("selector").value;

      if(!url || !selector) 
        return false;

      if (!localStorage[url]) {
        localStorage[url] = JSON.stringify([selector]);
      }
      else {
        selectors = JSON.parse(localStorage[url]);
        selectors.push(selector);
        localStorage[url] = JSON.stringify(selectors);
      }

      this.populate_list_() // repopulate ligst with new element (make more efficient)
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