var Awakening = /** @class */ (function () {
    function Awakening() {
        this.overlay = document.createElement('div');
        this.overlay.classList.add('image-preview');
        this.overlay.setAttribute('image-preview', '');
        document.body.append(this.overlay);
    }
    Awakening.prototype.toggleImage = function (src, alt) {
        if (this.overlay.classList.contains('opened')) {
            this.closeImage();
        }
        else {
            this.overlay.innerHTML = "<img src=\"" + src + "\" alt=\"" + alt + "\" image-preview>";
            this.overlay.classList.add('opened');
        }
    };
    Awakening.prototype.closeImage = function () {
        this.overlay.classList.remove('opened');
    };
    return Awakening;
}());
window.awakening = new Awakening();
document.addEventListener('click', function (event) {
    var target = event.target;
    var hasClass = function (classname, t) {
        if (t === void 0) { t = target; }
        return t.classList.contains(classname);
    };
    var hasAttribute = function (attribute, t) {
        if (t === void 0) { t = target; }
        return t.hasAttribute(attribute);
    };
    if (hasClass('img-center') && hasClass('resizable')) {
        var image = event.target;
        awakening.toggleImage(image.src, image.alt);
    }
    if ((hasAttribute('image-preview')))
        awakening.toggleImage();
});
