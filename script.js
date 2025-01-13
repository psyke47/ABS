// JavaScript to handle the scroll progress bar
$(document).ready(function() {
    $(window).on('scroll', function() {
        var scrollTop = $(window).scrollTop();
        var docHeight = $(document).height();
        var winHeight = $(window).height();
        var scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
        $('#progressBar div').css('width', scrollPercent + '%');
    });
});

(function() {
    const scriptId = '75e3ca5c-2aad-4283-9b06-8ae283775826';
    let scriptLoaded = false;

    function loadBanner() {
        let bannerHeight = 90; /* Default banner height */
        let bannerWidth = 728; /* Default banner width */

        /* Adjust banner size based on viewport width */
        if (window.innerWidth < 576) {
            bannerWidth = 300; /* Small screens */
            bannerHeight = 50;
        } else if (window.innerWidth < 768) {
            bannerWidth = 468; /* Medium screens */
            bannerHeight = 60;
        }

        /* For some content with no html, inline mode is not supported. */
        const embedType = 'banner'; /* Set embed type: inline or banner. */

        if (!scriptLoaded) {
            const script = document.createElement('script');
            script.defer = true;
            script.src = `https://dmc.partner.microsoft.com/dccn/api/embedded-campaigns/js?id=${scriptId}&height=${bannerHeight}&width=${bannerWidth}&embedType=${embedType}`;
            document.body.append(script);
            scriptLoaded = true;
        } else {
            const iframe = document.querySelector(`#dccn-75e3ca5c-2aad-4283-9b06-8ae283775826 iframe`);
            if (iframe) {
                iframe.style.height = `${bannerHeight}px`;
                iframe.style.width = `${bannerWidth}px`;
            }
        }
    }

    /* Load banner on initial load */
    loadBanner();

    /* Reload banner on window resize */
    window.addEventListener('resize', loadBanner);
})();