// ==UserScript==
// @name           IMDb (Dutch) linking
// @namespace      http://userscripts.org/users/68293
// @description    Adds links on IMDb pages to other sites.
// @include        http://*.imdb.com/title/*
// @include        http://imdb.com/title/*
// @include        http://*.imdb.com/name/*
// @include        http://imdb.com/name/*

// update 2010-09-07 Updated for the new IMDb layout by Vidal van Bergen.
// update 2010-04-16 added extratorrent.com; 1337x.org; isohunt.com; demonoid.com
//                   removed mininova.org; film-torrents.nl
//                   some ads removal
// update 2009-09-24 added YouTube
// update 2009-07-17 added freecovers.net
// update 2009-04-27 added subscene.com for NL subs (opensubtitles.org frequently has server problems)
//                   added google images (search for movie pics)
//                   fixed filmtotaal.nl search
// update 2008-11-11 fixed vergelijk.nl search
//                   added cinema.nl; filmtotaal.nl; movie2movie.nl
// update 2008-10-05 added target blank
// update 2008-10-03 added subsLink
// ==/UserScript==

// This script is based IMDb External Sites + YouTube by Natty Dreed.
// Modification by Mimimi
// Adapted to Safari 5 extension by Vidal
// 7 September 2010
// Current version 1.0



nameEl = document.evaluate( '//h1[@class = "header"]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null ).snapshotItem(0);
namePos = document.evaluate( '//div[@id = "sidebar"]/div', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null ).snapshotItem(0);

var title = nameEl.innerHTML.replace(/<[^>]+>/g, ''); // strip any HTML
title = title.replace(/(\([^\)]+\))/g, ''); // strip the date
title = title.replace(/^\s+|\s+$/g, ''); // trim

var div = document.createElement("div");
div.className = 'strip toplinks aux-content-widget-3';

var header = document.createElement("h4");
header.innerHTML = "IMDb Links:";
div.appendChild(header);

var nfLink = document.createElement("a");
nfLink.setAttribute("target","_blank");
nfLink.href = 'http://www.netflix.com/Search?v1=' + title;
nfLink.style.marginLeft = "20px";
nfLink.title = "Netflix";
nfLink.innerHTML = '<img src="http://cdn-0.nflximg.com/us/icons/nficon.ico" align="absmiddle" border="0" vspace="3" height="16px"> Netflix<br/>';
div.appendChild(nfLink);

var wpLink = document.createElement("a");
wpLink.setAttribute("target","_blank");
wpLink.href = 'http://en.wikipedia.org/wiki/Special:Search?search=' + title;
wpLink.style.marginLeft = "20px";
wpLink.title = "Wikipedia.en";
wpLink.innerHTML = '<img src="http://en.wikipedia.org/favicon.ico" align="absmiddle" border="0" vspace="3" height="16px"> Wikipedia<br/>';
div.appendChild(wpLink);

var rottentomatoes = document.createElement("a");
rottentomatoes.setAttribute("target","_blank");
rottentomatoes.href = 'http://www.rottentomatoes.com/search/full_search.php?search=' + title;
rottentomatoes.style.marginLeft = "20px";
rottentomatoes.title = "Zoek op Rotten Tomatoes";
rottentomatoes.innerHTML = '<img src="http://www.rottentomatoes.com/favicon.ico" align="absmiddle" border="0" vspace="3" height="16px"> Rotten Tomatoes<br/>';
div.appendChild(rottentomatoes);

var cinLink = document.createElement("a");
cinLink.setAttribute("target","_blank");
cinLink.href = 'http://www.cinema.nl/zoeken/?query=' + title;
cinLink.style.marginLeft = "20px";
cinLink.title = "Cinema.nl";
cinLink.innerHTML = '<img src="http://mycroft.mozdev.org/updateos.php/id0/cinemanl.ico" align="absmiddle" border="0" vspace="3" height="16px"> Cinema<br/>';
div.appendChild(cinLink);

var ft2Link = document.createElement("a");
ft2Link.setAttribute("target","_blank");
ft2Link.href = 'http://www.filmtotaal.nl/search.php?q=' + title;
ft2Link.style.marginLeft = "20px";
ft2Link.title = "FilmTotaal.nl";
ft2Link.innerHTML = '<img src="http://www.filmtotaal.nl/favicon.ico" align="absmiddle" border="0" vspace="3" height="16px"> FilmTotaal<br/>';
div.appendChild(ft2Link);

var m2mLink = document.createElement("a");
m2mLink.setAttribute("target","_blank");
m2mLink.href = 'http://www.movie2movie.nl/index.php?item=263&searchString=' + title;
m2mLink.style.marginLeft = "20px";
m2mLink.title = "movie2movie.nl";
m2mLink.innerHTML = '<img src="http://i50.tinypic.com/2djs22w.gif" align="absmiddle" border="0" vspace="3" height="16px"> Movie 2 Movie<br/>';
div.appendChild(m2mLink);

var ffLink = document.createElement("a");
ffLink.setAttribute("target","_blank");
ffLink.href = 'http://www.filmfocus.nl/search/index.php?search=' + title;
ffLink.style.marginLeft = "20px";
ffLink.title = "FilmFocus.nl";
ffLink.innerHTML = '<img src="http://www.filmfocus.nl/images/filmfocus/logos/favicon.ico" align="absmiddle" border="0" vspace="3" height="16px"> FilmFocus<br/>';
div.appendChild(ffLink);

var mmLink = document.createElement("a");
mmLink.setAttribute("target","_blank");
mmLink.href = 'http://www.moviemeter.nl/?search=firefox&q=' + title;
mmLink.style.marginLeft = "20px";
mmLink.title = "MovieMeter.nl";
mmLink.innerHTML = '<img src="http://www.moviemeter.nl/images/favicon_new.gif" align="absmiddle" border="0" vspace="3" height="16px"> MovieMeter<br/>';
div.appendChild(mmLink);

var giLink = document.createElement("a");
giLink.setAttribute("target","_blank");
giLink.href = 'http://images.google.com/images?hl=en&q=' + title;
giLink.style.marginLeft = "20px";
giLink.title = "Google Images";
giLink.innerHTML = '<img src="http://mycroft.mozdev.org/installos.php/14945/googleNL.ico" align="absmiddle" border="0" vspace="3" height="16px"> Google images<br/>';
div.appendChild(giLink);

var ytLink = document.createElement("a");
ytLink.setAttribute("target","_blank");
ytLink.href = 'http://www.youtube.com/results?search_query=' + title;
ytLink.style.marginLeft = "20px";
ytLink.title = "YouTube";
ytLink.innerHTML = '<img src="http://mycroft.mozdev.org/installos.php/13110/youtube.ico" align="absmiddle" border="0" vspace="3" height="16px"> YouTube<br/>';
div.appendChild(ytLink);

var mpLink = document.createElement("a");
mpLink.setAttribute("target","_blank");
mpLink.href = 'http://www.marktplaats.nl/index.php?url=http%3A//kopen.marktplaats.nl/search.php%3Fq%3D' + title;
mpLink.style.marginLeft = "20px";
mpLink.title = "DVD/CD Marktplaats.nl";
mpLink.innerHTML = '<img src="http://mycroft.mozdev.org/update.php/id2/marktplaats.png" align="absmiddle" border="0" vspace="3" height="16px"> Marktplaats<br/>';
div.appendChild(mpLink);

var verLink = document.createElement("a");
verLink.setAttribute("target","_blank");
verLink.href = 'http://www.vergelijk.nl/?cat_id=2464&searchwords=' + title;
verLink.style.marginLeft = "20px";
verLink.title = "DVD Vergelijk.nl";
verLink.innerHTML = '<img src="http://www.vergelijk.nl/images/favicon.ico" align="absmiddle" border="0" vspace="3" height="16px"> Vergelijk<br/>';
div.appendChild(verLink);

var fcLink = document.createElement("a");
fcLink.setAttribute("target","_blank");
fcLink.href = 'http://www.freecovers.net/search.php?search=' + title;
fcLink.style.marginLeft = "20px";
fcLink.title = "FreeCovers";
fcLink.innerHTML = '<img src="http://mycroft.mozdev.org/installos.php/18044/freecovers.png" align="absmiddle" border="0" vspace="3" height="16px"> FreeCovers<br/>';
div.appendChild(fcLink);

var horizontalrule = document.createElement("hr");
div.appendChild(horizontalrule);

var headerDownload = document.createElement("h4");
headerDownload.innerHTML = "Downloads:";
div.appendChild(headerDownload);

var tpbLink = document.createElement("a");
tpbLink.setAttribute("target","_blank");
tpbLink.href = 'http://thepiratebay.org/search/' + title + '/0/99/0';
tpbLink.style.marginLeft = "20px";
tpbLink.title = "The Pirate Bay";
tpbLink.innerHTML = '<img src="http://mycroft.mozdev.org/installos.php/24748/the_piratebay.ico" align="absmiddle" border="0" vspace="3" height="16px"> The Pirate Bay<br/>';
div.appendChild(tpbLink);

var etLink = document.createElement("a");
etLink.setAttribute("target","_blank");
etLink.href = 'http://extratorrent.com/search/?search=' + title + '&new=1&x=0&y=0';
etLink.style.marginLeft = "20px";
etLink.title = "Extra Torrent";
etLink.innerHTML = '<img src="http://extratorrent.com/images/favicon.ico" align="absmiddle" border="0" vspace="3" height="16px"> Extra Torrent<br/>';
div.appendChild(etLink);

var isoLink = document.createElement("a");
isoLink.setAttribute("target","_blank");
isoLink.href = 'http://isohunt.com/torrents/' + title + '?ihp=1&iht=1&ihs1=2&iho1=d';
isoLink.style.marginLeft = "20px";
isoLink.title = "isoHunt";
isoLink.innerHTML = '<img src="http://mycroft.mozdev.org/installos.php/14497/isohuntbt.ico" align="absmiddle" border="0" vspace="3" height="16px"> isoHunt<br/>';
div.appendChild(isoLink);

var miniLink = document.createElement("a");
miniLink.setAttribute("target","_blank");
miniLink.href = 'http://1337x.org/search/' + title + '/0/';
miniLink.style.marginLeft = "20px";
miniLink.title = "1337x";
miniLink.innerHTML = '<img src="http://1337x.org/favicon.ico" align="absmiddle" border="0" vspace="3" height="16px"> 1337x<br/>';
div.appendChild(miniLink);

var demonoidLink = document.createElement("a");
demonoidLink.setAttribute("target","_blank");
demonoidLink.href = 'http://www.demonoid.com/files/?category=1&subcategory=All&quality=All&seeded=0&external=2&query=' + title + '&uid=0&sort=';
demonoidLink.style.marginLeft = "20px";
demonoidLink.title = "Demonoid";
demonoidLink.innerHTML = '<img src="http://www.demonoid.com/favicon.ico" align="absmiddle" border="0" vspace="3" height="16px"> Demonoid<br/>';
div.appendChild(demonoidLink);

var torrentz = document.createElement("a");
torrentz.setAttribute("target","_blank");
torrentz.href = 'http://www.torrentz.com/search?q=' + title;
torrentz.style.marginLeft = "20px";
torrentz.title = "Zoek op Torrentz.com";
torrentz.innerHTML = '<img src="http://www.torrentz.com/favicon.ico" align="absmiddle" border="0" vspace="3" height="16px"> Torrentz<br/>';
div.appendChild(torrentz);

var kickasstorrents = document.createElement("a");
kickasstorrents.setAttribute("target","_blank");
kickasstorrents.href = 'http://www.kickasstorrents.com/search/' + title;
kickasstorrents.style.marginLeft = "20px";
kickasstorrents.title = "Zoek op KickAssTorrents.com";
kickasstorrents.innerHTML = '<img src="http://www.kickasstorrents.com/content/images/favicon.ico" align="absmiddle" border="0" vspace="3" height="16px"> KickAssTorrents<br/>';
div.appendChild(kickasstorrents);

var horizontalrule = document.createElement("hr");
div.appendChild(horizontalrule);

var headerSubs = document.createElement("h4");
headerSubs.innerHTML = "Subtitles:";
div.appendChild(headerSubs);

var subs1Link = document.createElement("a");
subs1Link.setAttribute("target","_blank");
subs1Link.href = 'http://subscene.com/filmsearch.aspx?q=' + title;
subs1Link.style.marginLeft = "20px";
subs1Link.title = "SubScene.com";
subs1Link.innerHTML = '<img src="http://subscene.com/themes/base/images/logoIcon.gif" align="absmiddle" border="0" vspace="3" height="16px"> SubScene<br/>';
div.appendChild(subs1Link);

var subsLink = document.createElement("a");
subsLink.setAttribute("target","_blank");
subsLink.href = 'http://www.opensubtitles.org/nl/sublanguageid-dut/moviename-' + title;
subsLink.style.marginLeft = "20px";
subsLink.title = "Opensubtitles.org";
subsLink.innerHTML = '<img src="http://mycroft.mozdev.org/installos.php/25094/opensubtitle_imdb.ico" align="absmiddle" border="0" vspace="3" height="16px"> Opensubtitles<br/>';
div.appendChild(subsLink);

namePos.parentNode.insertBefore(div, namePos.nextSibling);
