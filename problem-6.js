var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function updateProfile(profile, updates) {
    return __assign(__assign({}, profile), updates);
}
var currentProfile = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
};
var updates = {
    age: 31,
    name: "iftakhar"
};
console.log(updateProfile(currentProfile, updates));
