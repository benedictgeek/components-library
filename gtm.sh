#! /bin/sh

gsed -i 's/\(.*<head>\)/\1 `
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https:\/\/www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TH7V3T3');</script>
`/' ./storybook-static/index.html
gsed -i 's/\(.*<body>\)/\1 <noscript><iframe src="https:\/\/www.googletagmanager.com\/ns.html?id=GTM-TH7V3T3" height="0" width="0" style="display:none;visibility:hidden"><\/iframe><\/noscript>/' ./storybook-static/index.html
# gsed -i 's/\(.*<body>\)/\1 <noscript><iframe src="https:\/\/www.googletagmanager.com\/ns.html?id=GTM-TH7V3T3" height="0" width="0" style="display:none;visibility:hidden"><\/iframe><\/noscript>/' ./storybook-static/index.html
