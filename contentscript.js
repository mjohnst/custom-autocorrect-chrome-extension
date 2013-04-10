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