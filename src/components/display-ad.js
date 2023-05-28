import React from "react";

export const DisplayAd = ({slot}) => {
    const adUnitId = "ca-pub-7878345029704986";
    const adSenseScript = `
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adUnitId}"
     crossorigin="anonymous"></script>
    <ins class="adsbygoogle"
     style="display:block"
     data-ad-client=${adUnitId}
     data-ad-slot=${slot}
     data-ad-format="auto"></ins>
    <script>
     (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
  `;

    return (
        <div style={{minHeight: '250px', padding:'1% 8%'}}
             dangerouslySetInnerHTML={{__html: adSenseScript, nonce: 'CodeAbs%1434@*'}}/>
    );
};
