// Created by iWeb 3.0.4 local-build-20110920

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,150),url:'About_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'About_files/stroke_1.png'},{rect:new IWRect(5,-5,250,10),url:'About_files/stroke_2.png'},{rect:new IWRect(255,-5,10,10),url:'About_files/stroke_3.png'},{rect:new IWRect(255,5,10,150),url:'About_files/stroke_4.png'},{rect:new IWRect(255,155,10,10),url:'About_files/stroke_5.png'},{rect:new IWRect(5,155,250,10),url:'About_files/stroke_6.png'},{rect:new IWRect(-5,155,10,10),url:'About_files/stroke_7.png'}],new IWSize(260,160)),stroke_1:new IWStrokeParts([{rect:new IWRect(-5,5,10,324),url:'About_files/stroke_8.png'},{rect:new IWRect(-5,-5,10,10),url:'About_files/stroke_9.png'},{rect:new IWRect(5,-5,250,10),url:'About_files/stroke_10.png'},{rect:new IWRect(255,-5,10,10),url:'About_files/stroke_11.png'},{rect:new IWRect(255,5,10,324),url:'About_files/stroke_12.png'},{rect:new IWRect(255,329,10,11),url:'About_files/stroke_13.png'},{rect:new IWRect(5,329,250,11),url:'About_files/stroke_14.png'},{rect:new IWRect(-5,329,10,11),url:'About_files/stroke_15.png'}],new IWSize(260,335))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('About_files/AboutMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
