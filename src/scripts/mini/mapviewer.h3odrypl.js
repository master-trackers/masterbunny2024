window.onload=function(){fetch("/visitsite").then(e=>e.json()).then(e=>{}).catch(e=>{console.error("Error fetching data:",e)})};var url=new URL(window.location.href),level=url.searchParams.get("zoom"),level2=url.searchParams.get("nobaskets");function toggleSettings(){var e=document.getElementById("settingsPopup");"block"===e.style.display?e.style.display="none":e.style.display="block"}function updateLocalTime(){var e=new Date(currenttimeunixsec);document.getElementById("local-time").textContent=e.toLocaleString(void 0,{hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!0})+" LOCAL"}function updateUTCTime(){var e=new Date(currenttimeunixsec);document.getElementById("utc-time").textContent=e.toLocaleString("en-US",{hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!0,timeZone:"UTC"})+" UTC/GMT"}function updateLondonTime(){var e=new Date(currenttimeunixsec);document.getElementById("london-time").textContent=e.toLocaleString("en-US",{hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!0,timeZone:"Europe/London"})+" LONDON"}function updateNYCTime(){var e=new Date(currenttimeunixsec);document.getElementById("nyc-time").textContent=e.toLocaleString("en-US",{hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!0,timeZone:"America/New_York"})+" NYC"}function updateTokyoTime(){var e=new Date(currenttimeunixsec);document.getElementById("tokyo-time").textContent=e.toLocaleString("en-US",{hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!0,timeZone:"Asia/Tokyo"})+" TOKYO"}var readyfordeployment=!1;setInterval(function(){!0===readyfordeployment&&(updateLocalTime(),updateUTCTime(),updateLondonTime(),updateNYCTime(),updateTokyoTime())},1e3),setTimeout(function(){document.getElementById("logo").classList.add("spread"),document.getElementById("loading").classList.add("show")},1e3),setTimeout(function(){document.getElementById("logo").style.display="none",document.getElementById("loading").style.display="none",document.getElementById("iframe").style.visibility="visible",document.getElementById("srcimg").style.display="none",document.getElementById("iframe").style.opacity=1,readyfordeployment=!0},3e3);let ipapiUrl="https://ipapi.co/json/";async function fetchIpAndSendHit(){try{var e=await fetch(ipapiUrl);if(!e.ok)throw new Error("Failed to fetch IP information");var t=await e.json();if(t.ip,!(await fetch("/hit/1?country="+t.country_code)).ok)throw new Error("Failed to send hit")}catch(e){console.error("Error:",e)}}fetchIpAndSendHit();