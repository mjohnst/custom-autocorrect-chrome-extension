/**
 * Creator: Michael Johnston
 *          mjohnst.com
 *
 *          April 10, 2013
 */

/**
 * Add autocomplete="on" to input
 */

var add_autocomplete_on = function(input) {
  if (input.tagName == "INPUT") {
    input.autocomplete = 'on'
    return true
  } 
  else
    return false
}

loaded_url = document.URL;
loaded_domain = document.domain;

if(localStorage[loaded_url]) {
  
}
