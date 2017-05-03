{"changed":true,"filter":false,"title":"filteredModule.js","tooltip":"/filteredModule.js","value":"\n\nvar fs = require(\"fs\");\nvar path = require(\"path\");\n//we will be creating the actual arguments to pass this function so don't worry about directoryPath and fileExtension\n\nmodule.exports = function (directory, fileExtension, callback){\n    fs.readdir(directory, function(err, list){\n        if (err) return callback(err)\n        list = list.filter(function(file){\n            if (path.extname(file) === '.' + fileExtension) return true;\n            })\n            return callback(null, list);\n        })\n    }","undoManager":{"mark":88,"position":100,"stack":[[{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"insert","lines":["n"],"id":1098}],[{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"insert","lines":["e"],"id":1099}],[{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"insert","lines":[" "],"id":1100}],[{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"insert","lines":["o"],"id":1101}],[{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"remove","lines":["o"],"id":1102}],[{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"remove","lines":[" "],"id":1103}],[{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"insert","lines":[" "],"id":1104}],[{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"insert","lines":["o"],"id":1105}],[{"start":{"row":0,"column":14},"end":{"row":0,"column":15},"action":"insert","lines":["r"],"id":1106}],[{"start":{"row":0,"column":15},"end":{"row":0,"column":16},"action":"insert","lines":[" "],"id":1107}],[{"start":{"row":0,"column":16},"end":{"row":0,"column":17},"action":"insert","lines":["m"],"id":1108}],[{"start":{"row":0,"column":17},"end":{"row":0,"column":18},"action":"insert","lines":["o"],"id":1109}],[{"start":{"row":0,"column":18},"end":{"row":0,"column":19},"action":"insert","lines":["r"],"id":1110}],[{"start":{"row":0,"column":19},"end":{"row":0,"column":20},"action":"insert","lines":["e"],"id":1111}],[{"start":{"row":0,"column":20},"end":{"row":0,"column":21},"action":"insert","lines":[" "],"id":1112}],[{"start":{"row":0,"column":21},"end":{"row":0,"column":22},"action":"insert","lines":["n"],"id":1113}],[{"start":{"row":0,"column":22},"end":{"row":0,"column":23},"action":"insert","lines":["u"],"id":1114}],[{"start":{"row":0,"column":23},"end":{"row":0,"column":24},"action":"insert","lines":["m"],"id":1115}],[{"start":{"row":0,"column":24},"end":{"row":0,"column":25},"action":"insert","lines":["b"],"id":1116}],[{"start":{"row":0,"column":25},"end":{"row":0,"column":26},"action":"insert","lines":["e"],"id":1117}],[{"start":{"row":0,"column":26},"end":{"row":0,"column":27},"action":"insert","lines":["s"],"id":1118}],[{"start":{"row":0,"column":27},"end":{"row":0,"column":28},"action":"insert","lines":[" "],"id":1119}],[{"start":{"row":0,"column":27},"end":{"row":0,"column":28},"action":"remove","lines":[" "],"id":1120}],[{"start":{"row":0,"column":26},"end":{"row":0,"column":27},"action":"remove","lines":["s"],"id":1121}],[{"start":{"row":0,"column":26},"end":{"row":0,"column":27},"action":"insert","lines":["r"],"id":1122}],[{"start":{"row":0,"column":27},"end":{"row":0,"column":28},"action":"insert","lines":["s"],"id":1123}],[{"start":{"row":0,"column":28},"end":{"row":0,"column":29},"action":"insert","lines":[" "],"id":1124}],[{"start":{"row":0,"column":29},"end":{"row":0,"column":30},"action":"insert","lines":["a"],"id":1125}],[{"start":{"row":0,"column":30},"end":{"row":0,"column":31},"action":"insert","lines":["s"],"id":1126}],[{"start":{"row":0,"column":31},"end":{"row":0,"column":32},"action":"insert","lines":[" "],"id":1127}],[{"start":{"row":0,"column":32},"end":{"row":0,"column":33},"action":"insert","lines":["c"],"id":1128}],[{"start":{"row":0,"column":33},"end":{"row":0,"column":34},"action":"insert","lines":["o"],"id":1129}],[{"start":{"row":0,"column":34},"end":{"row":0,"column":35},"action":"insert","lines":["m"],"id":1130}],[{"start":{"row":0,"column":35},"end":{"row":0,"column":36},"action":"insert","lines":["m"],"id":1131}],[{"start":{"row":0,"column":36},"end":{"row":0,"column":37},"action":"insert","lines":["a"],"id":1132}],[{"start":{"row":0,"column":37},"end":{"row":0,"column":38},"action":"insert","lines":["n"],"id":1133}],[{"start":{"row":0,"column":38},"end":{"row":0,"column":39},"action":"insert","lines":["d"],"id":1134}],[{"start":{"row":0,"column":39},"end":{"row":0,"column":40},"action":"insert","lines":[" "],"id":1135}],[{"start":{"row":0,"column":40},"end":{"row":0,"column":41},"action":"insert","lines":["l"],"id":1136}],[{"start":{"row":0,"column":41},"end":{"row":0,"column":42},"action":"insert","lines":["i"],"id":1137}],[{"start":{"row":0,"column":42},"end":{"row":0,"column":43},"action":"insert","lines":["n"],"id":1138}],[{"start":{"row":0,"column":43},"end":{"row":0,"column":44},"action":"insert","lines":["e"],"id":1139}],[{"start":{"row":0,"column":44},"end":{"row":0,"column":45},"action":"insert","lines":[" "],"id":1140}],[{"start":{"row":0,"column":45},"end":{"row":0,"column":46},"action":"insert","lines":["a"],"id":1141}],[{"start":{"row":0,"column":46},"end":{"row":0,"column":47},"action":"insert","lines":["r"],"id":1142}],[{"start":{"row":0,"column":47},"end":{"row":0,"column":48},"action":"insert","lines":["g"],"id":1143}],[{"start":{"row":0,"column":48},"end":{"row":0,"column":49},"action":"insert","lines":[" "],"id":1144}],[{"start":{"row":0,"column":49},"end":{"row":0,"column":50},"action":"insert","lines":["a"],"id":1145}],[{"start":{"row":0,"column":50},"end":{"row":0,"column":51},"action":"insert","lines":["n"],"id":1146}],[{"start":{"row":0,"column":51},"end":{"row":0,"column":52},"action":"insert","lines":["d"],"id":1147}],[{"start":{"row":0,"column":52},"end":{"row":0,"column":53},"action":"insert","lines":[" "],"id":1148}],[{"start":{"row":0,"column":53},"end":{"row":0,"column":54},"action":"insert","lines":["p"],"id":1149}],[{"start":{"row":0,"column":54},"end":{"row":0,"column":55},"action":"insert","lines":["r"],"id":1150}],[{"start":{"row":0,"column":55},"end":{"row":0,"column":56},"action":"insert","lines":["i"],"id":1151}],[{"start":{"row":0,"column":56},"end":{"row":0,"column":57},"action":"insert","lines":["n"],"id":1152}],[{"start":{"row":0,"column":57},"end":{"row":0,"column":58},"action":"insert","lines":["t"],"id":1153}],[{"start":{"row":0,"column":58},"end":{"row":0,"column":59},"action":"insert","lines":[" "],"id":1154}],[{"start":{"row":0,"column":59},"end":{"row":0,"column":60},"action":"insert","lines":["t"],"id":1155}],[{"start":{"row":0,"column":60},"end":{"row":0,"column":61},"action":"insert","lines":["h"],"id":1156}],[{"start":{"row":0,"column":61},"end":{"row":0,"column":62},"action":"insert","lines":["o"],"id":1157}],[{"start":{"row":0,"column":62},"end":{"row":0,"column":63},"action":"insert","lines":["s"],"id":1158}],[{"start":{"row":0,"column":63},"end":{"row":0,"column":64},"action":"insert","lines":["e"],"id":1159}],[{"start":{"row":0,"column":63},"end":{"row":0,"column":64},"action":"remove","lines":["e"],"id":1160}],[{"start":{"row":0,"column":62},"end":{"row":0,"column":63},"action":"remove","lines":["s"],"id":1161}],[{"start":{"row":0,"column":61},"end":{"row":0,"column":62},"action":"remove","lines":["o"],"id":1162}],[{"start":{"row":0,"column":60},"end":{"row":0,"column":61},"action":"remove","lines":["h"],"id":1163}],[{"start":{"row":0,"column":59},"end":{"row":0,"column":60},"action":"remove","lines":["t"],"id":1164}],[{"start":{"row":0,"column":59},"end":{"row":0,"column":60},"action":"insert","lines":["t"],"id":1165}],[{"start":{"row":0,"column":60},"end":{"row":0,"column":61},"action":"insert","lines":["h"],"id":1166}],[{"start":{"row":0,"column":61},"end":{"row":0,"column":62},"action":"insert","lines":["e"],"id":1167}],[{"start":{"row":0,"column":62},"end":{"row":0,"column":63},"action":"insert","lines":[" "],"id":1168}],[{"start":{"row":0,"column":63},"end":{"row":0,"column":64},"action":"insert","lines":["s"],"id":1169}],[{"start":{"row":0,"column":64},"end":{"row":0,"column":65},"action":"insert","lines":["u"],"id":1170}],[{"start":{"row":0,"column":65},"end":{"row":0,"column":66},"action":"insert","lines":["m"],"id":1171}],[{"start":{"row":0,"column":66},"end":{"row":0,"column":67},"action":"insert","lines":[" "],"id":1172}],[{"start":{"row":0,"column":67},"end":{"row":0,"column":68},"action":"insert","lines":["t"],"id":1173}],[{"start":{"row":0,"column":68},"end":{"row":0,"column":69},"action":"insert","lines":["o"],"id":1174}],[{"start":{"row":0,"column":69},"end":{"row":0,"column":70},"action":"insert","lines":[" "],"id":1175}],[{"start":{"row":0,"column":70},"end":{"row":0,"column":71},"action":"insert","lines":["c"],"id":1176}],[{"start":{"row":0,"column":71},"end":{"row":0,"column":72},"action":"insert","lines":["o"],"id":1177}],[{"start":{"row":0,"column":72},"end":{"row":0,"column":73},"action":"insert","lines":["n"],"id":1178}],[{"start":{"row":0,"column":73},"end":{"row":0,"column":74},"action":"insert","lines":["s"],"id":1179}],[{"start":{"row":0,"column":74},"end":{"row":0,"column":75},"action":"insert","lines":["o"],"id":1180}],[{"start":{"row":0,"column":75},"end":{"row":0,"column":76},"action":"insert","lines":["l"],"id":1181}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":1},"action":"insert","lines":["e"],"id":1183}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":1},"action":"remove","lines":["e"],"id":1184}],[{"start":{"row":0,"column":76},"end":{"row":1,"column":0},"action":"remove","lines":["",""],"id":1185}],[{"start":{"row":0,"column":76},"end":{"row":0,"column":77},"action":"insert","lines":["e"],"id":1186}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":77},"action":"remove","lines":["//Accept one or more numbers as command line arg and print the sum to console"],"id":1187}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":1188}],[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":1189}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["/"],"id":1190}],[{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["/"],"id":1191}],[{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"insert","lines":["U"],"id":1192}],[{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"insert","lines":["s"],"id":1193}],[{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"insert","lines":["i"],"id":1194}],[{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"insert","lines":["n"],"id":1195}],[{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"insert","lines":["g"],"id":1196}],[{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"insert","lines":[" "],"id":1197}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":8},"action":"remove","lines":["//Using "],"id":1198}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""],"id":1199}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":0,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1492189377076}