import React from "react";

export const AdRecover = () => {
    const recover = `
        <script async src="https://fundingchoicesmessages.google.com/i/pub-7878345029704986?ers=1" nonce="cVIKGZeK3tMQS0Byucr6oA"></script><script nonce="cVIKGZeK3tMQS0Byucr6oA">(function() {function signalGooglefcPresent() {if (!window.frames['googlefcPresent']) {if (document.body) {const iframe = document.createElement('iframe'); iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe);} else {setTimeout(signalGooglefcPresent, 0);}}}signalGooglefcPresent();})();</script>
        `;
    return (
        <div dangerouslySetInnerHTML={{__html: recover, nonce: 'CodeAbs%1434@*'}}/>
    );
}