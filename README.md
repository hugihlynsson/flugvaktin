Flugvaktin
==========

Vöktunarþjónusta fyrir nettilboð hjá Flugfélags Íslands.

## Tilgangur:
Að fljúga innanlands er dýrt en það er hægt að spara með því að ná nettilboði. Þau eru aftur á móti mjög óaðgengileg þar sem þau koma á tilviljandi tímum á vefslóð sem erfitt er að finna. Flugvaktin sér um að láta þig vita þegar tilboðið sem þú ert að leyta kemur inn.

## Keyrsla
```
npm install
npm start
```
Ný tilboð eru sótt á 4 mín + (0-60) sec fresti. Til að senda email þurfa `FLUGVAKTIN_EMAIL` og `FLUGVAKTIN_EMAIL` umhverfisbreyturnar að vera settar á og vera réttar fyrir Gmail aðgang.

## Lýsing:
Vefapp þar sem notandi getur séð núverandi tilboð Flugélags íslands og valið flugleið og tímabil til að vakta. Þetta gæti t.d. verið Akureyri -> Reykjavík Sunnudaginn 7. Júní á undir 12000 kr. Ef nýtt tilboð kemur inn sem uppfyllir þau skilyrði sem notandinn valdi fær hann tilkynningu um það með tölvupósti. Þetta eykur líkurnar taksvert að notandinn geti nýtt sér tilboðið.

Þetta hentar sérstaklega vel fyrir þá sem þurfa ekki að komast flugleiðina á föstum tímasetningum og hafa ekki kost á að hoppa. Tilboð eru oft svipað hagstæð og hopp og er góð viðbót fyrir þá sem myndu nýta sér það. Núverandi síða nettilboða: https://www.flugfelag.is/nettilbod?departureAirport=RKV&destinationAirport=AEY&fareclasslimitations=U,E,S,T,T1,T2


## Bak við tjöldið:
Þjónustan skiptist í þrjá laustengda þætti:
- Þjónusta sem heldur utan um tilboð af síðunni hjá flugfélagi íslands og veit þegar það koma inn ný tilboð með því að sækja tilboðssíðuna með reglulegu millibili.
- Þjónusta sem leyfir notenda að verða áskrifandi að nýrri flugleið og tímabili og heldur utan um áskriftir.
- Þjónusta sem sendir út tilkynningu á notanda þegar tilboðið sem hann var áskrifandi að kemur inn.

## Framvinda:
- ~~Sækir tilboð á flugi milli Reykjavíkur og Akureyrar og sendir út tilkynningu um ný tilboð á forvalið netfang~~ Lokið
- Einfalt UI til velja tímabil og verðhámark og nota þær skráningar til að senda tilkynningar
- Sækja öll tilboð
- Gera næs UI með leiðarvali og núverandi tilboðum
- Sýna líkur á tilboði/lægsta verði miðað við fyrri tilboð
