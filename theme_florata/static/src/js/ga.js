var _paq = window._paq || [];
(function () {
    var u = "https://ga.getresponse.com/",
        d=document, g=d.createElement("script"), s=d.getElementsByTagName("script")[0],
        traits;

    traits = {
            xsid: '' || document.cookie.replace(/(?:(?:^|.*;\s*)gaVisitorId\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '',
            email: document.cookie.replace(/(?:(?:^|.*;\s*)gaVisitorEmail\s*\=\s*([^;]*).*$)|^.*$/, "$1") || document.cookie.replace(/(?:(?:^|.*;\s*)visitorId\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '',
            save: function() {
                this.setCookie('gaVisitorEmail', this.email);
                this.setCookie('gaVisitorId', this.xsid);
                _paq.push(["setUserId", this.toString()]);
                _paq.push(["trackPageView"]);
            },
            toString: function() {
                return JSON.stringify({'email':this.email, 'xsid': this.xsid});
            },
            setCookie: function (param, value) {
                var date = new Date();
                date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
                document.cookie = param + '=' + value + '; expires=' + date.toGMTString() + '; path=/';
            }
        };

    _paq.push(["setCustomVariable", 1, "grid", "sBDcEXkVac38IAA==", "visit"]);
    _paq.push(["enableLinkTracking", true]);
    _paq.push(["setTrackerUrl", u + 'index.php?ver=2']);
    traits.save();

    g.type="text/javascript"; g.async=true; g.defer=true; g.src=u+"js/piwik.js"; s.parentNode.insertBefore(g,s);

    window.gaSetUserId = function (email) {
        if (email) {
            _paq.push(["setCustomUrl", window.location.href]);
            traits.email = email;
            traits.save();
        }
    };

    window.gaPush = function () {
        _paq.push(['setCustomUrl', window.location.href]);
        _paq.push(['trackPageView']);
    };

}());
