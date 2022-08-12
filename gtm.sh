#! /bin/sh

sed -i 's/\(.*<body>\)/\1 <noscript><iframe src="https:\/\/www.googletagmanager.com\/ns.html?id=GTM-TH7V3T3" height="0" width="0" style="display:none;visibility:hidden"><\/iframe><\/noscript>/' ./storybook-static/index.html
# gsed -i 's/\(.*<body>\)/\1 <noscript><iframe src="https:\/\/www.googletagmanager.com\/ns.html?id=GTM-TH7V3T3" height="0" width="0" style="display:none;visibility:hidden"><\/iframe><\/noscript>/' ./storybook-static/index.html
