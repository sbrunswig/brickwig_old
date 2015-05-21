this["App"] = this["App"] || {};

this["App"]["DocumentListTemplate"] = function(data) {
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<td>\n\t<h3 class="icon-' +
((__t = ( data.Icon )) == null ? '' : __t) +
'">\n\t\t' +
((__t = ( data.Name )) == null ? '' : __t) +
'\n\t\t';
 if ( data.Description ) { ;
__p += '\n\t\t\t<span>' +
((__t = ( data.Description )) == null ? '' : __t) +
'</span>\n\t\t';
 } ;
__p += '\n\t</h3>\n</td>\n<td>' +
((__t = ( data.FormatDate )) == null ? '' : __t) +
'</td>\n<td class="select">\n\t<input type="checkbox" id="' +
((__t = ( data.id )) == null ? '' : __t) +
'" class="select-document"/>\n\t<label for="' +
((__t = ( data.id )) == null ? '' : __t) +
'">select ' +
((__t = ( data.Name )) == null ? '' : __t) +
'</label>\n</td>';
return __p
};