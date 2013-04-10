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