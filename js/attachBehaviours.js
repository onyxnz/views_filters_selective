// Trick to make exposed block work after refresh (https://backdrop.org/node/2182885).
jQuery.fn.attachBehaviors = function () { Backdrop.attachBehaviors(); };
