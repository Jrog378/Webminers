export const adsense = () => {
  const adUnitId = 'ca-pub-7878345029704986';
    return `
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adUnitId}"
     crossorigin="anonymous"></script>
    <ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client=${adUnitId}
     data-ad-slot="2104885557"></ins>
    <script>
     (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
  `;
};