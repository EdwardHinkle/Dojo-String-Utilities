define(["dojo/_base/declare", "dojo/_base/array", "dojo/_base/lang", "dojo/query", "dojo/dom", "dojo/dom-class", "dojo/dom-construct", "dojo/topic", "dojo/currency"], function(declare, array, lang, query, dom, domClass, construct, topic, dcurrency) {

    var stringUtils = {
        pluralSingular: function(coefficientNumber, singularTerm, pluralTerm) {
			if (coefficientNumber == 1) {
                return singularTerm;
            } else {
                return pluralTerm;
            }
        },
        summarizeMoney: function(funds) {
            fundsSegments = dcurrency.format(funds, {currency: "USD", places: 0}).split(",");
            var fundsText = fundsSegments[0];
            if (fundsSegments[0].length == 1) {
                fundsText += "." + fundsSegments[1][0] + "" + fundsSegments[1][1];
            }
            switch(fundsSegments.length) {
                case 2:
                    fundsText += "K";
                    break;
                case 3:
                    fundsText += "M";
                    break;
                case 4:
                    fundsText += "B";
                    break;
            }
            return fundsText;
        }

    };

    // has("extend-dojo") && lang.mixin(dojo, string);

    return stringUtils;

});


