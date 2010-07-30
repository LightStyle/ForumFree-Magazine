/* =======================================
// Single Spoiler Opener - Apertura Spoiler Singoli
// Realizzato da Bowser
// (C) 2010 http://ffmagazine.forumfree.it
// Versione: 1.0 - Ultima modifica: 24/01/2010 20:42
// ======================================= */
if(document.URL.indexOf('?t=')!=-1){function spoil(){var obj=this.parentNode;while(obj=obj.nextSibling)if(obj&&obj.style)break;obj.style.display=(obj.style.display=='block')?'none':'block';return false}var pagelinks=document.links,arrlen=pagelinks.length;for(i=0;i<arrlen;++i){var ind=new function(){this.i=i};if(pagelinks[ind.i].href=='javascript:spoiler()'){pagelinks[ind.i].onclick=spoil;pagelinks[ind.i].href='#'}}}
