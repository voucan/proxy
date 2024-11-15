const beforeUnloadEnabled = localStorage.getItem('beforeUnloadEnabled') === 'true';
if (beforeUnloadEnabled) {
    window.addEventListener('beforeunload', function (e) {
        e.preventDefault();
        e.returnValue = '';
    });
}

const savedTitle = localStorage.getItem('siteTitle');
if (savedTitle) {
    document.title = savedTitle;
}

const savedLogo = localStorage.getItem('siteLogo');
if (savedLogo) {
    const logoElement = document.querySelector('link[rel="icon"]'); 
    if (logoElement) {
        logoElement.href = savedLogo;
    }
}

const panicKey = localStorage.getItem('panicKey');
const panicUrl = localStorage.getItem('panicUrl');
if (panicKey && panicUrl) {
    window.addEventListener('keydown', function (event) {
        if (event.key === panicKey) {
            window.location.href = panicUrl;
        }
    });
}

const autocloak = localStorage.getItem('autocloakEnabled');
if (autocloakEnabled) {
    window.onload = function() {
        const newTab = window.open('about:blank', '_blank');
        if (newTab) {
            const iframe = document.createElement('iframe');
            iframe.src = '/';
            iframe.style.width = '100vw';
            iframe.style.height = '100vh';
            iframe.style.border = 'none';
            newTab.document.body.style.margin = '0';
            newTab.document.body.appendChild(iframe);
        }

        const panicUrl = localStorage.getItem('panicUrl') || "https://classroom.google.com";
        window.location.href = panicUrl;
    };
}
