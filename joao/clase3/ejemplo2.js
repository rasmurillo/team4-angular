/**
 * Created by ANGULAR on 18/5/2016.
 */
angular.module('reverseFilter', [])
    .filter('reverse', [function() {
        return function(input, uppercase,add) {
            var i, out = "";
            input = input || '';
            for (i = 0; i < input.length; i++) {
                out = input.charAt(i) + out;
            }
            // conditional based on optional argument
            if (uppercase) {
                out = out.toUpperCase();
            }
            if (add) {
                out = out.toUpperCase() + "dddd";
            }
            return out;
        };
}]);
