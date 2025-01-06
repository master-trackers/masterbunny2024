window.onload = function () {
      // Function to make a GET request to /visitsite endpoint
      function getVisits() {
        fetch('/visitsite')
          .then(response => response.json())
          .then(data => {
            // console.log('Number of people on the site:', data.peopleonthesite);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }

      // Call the getVisits function when the page loads
      getVisits();
    }
    // Parse the URL to get the value of the "level" parameter
    var url = new URL(window.location.href);
    var level = url.searchParams.get("zoom");
    var level2 = url.searchParams.get("nobaskets");

    // Get the iframe element

   
    // Function to toggle settings popup visibility
    function toggleSettings() {
      var settingsPopup = document.getElementById('settingsPopup');
      if (settingsPopup.style.display === 'block') {
        settingsPopup.style.display = 'none';
      } else {
        settingsPopup.style.display = 'block';
      }
    }

    function updateLocalTime() {
      var now = new Date(currenttimeunixsec);
      var options = { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true };
      document.getElementById("local-time").textContent =
        now.toLocaleString(undefined, options) + " LOCAL";
    }
    
    function updateUTCTime() {
      var now = new Date(currenttimeunixsec);
      var options = { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true, timeZone: 'UTC' };
      document.getElementById("utc-time").textContent =
        now.toLocaleString('en-US', options) + " UTC/GMT";
    }
    
    function updateLondonTime() {
      var now = new Date(currenttimeunixsec);
      var options = { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true, timeZone: 'Europe/London' };
      document.getElementById("london-time").textContent =
        now.toLocaleString('en-US', options) + " LONDON";
    }
    
    function updateNYCTime() {
      var now = new Date(currenttimeunixsec);
      var options = { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true, timeZone: 'America/New_York' };
      document.getElementById("nyc-time").textContent =
        now.toLocaleString('en-US', options) + " NYC";
    }
    
    function updateTokyoTime() {
      var now = new Date(currenttimeunixsec);
      var options = { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true, timeZone: 'Asia/Tokyo' };
      document.getElementById("tokyo-time").textContent =
        now.toLocaleString('en-US', options) + " TOKYO";
    }
    

    var readyfordeployment = false
        // Update all times every second
        setInterval(function () {
          if (readyfordeployment === true) {
            updateLocalTime();
            updateUTCTime();
            updateLondonTime();
            updateNYCTime();
            updateTokyoTime();
          }
        }, 1000);
        
    

    setTimeout(function () {
      document.getElementById("logo").classList.add("spread");
      document.getElementById("loading").classList.add("show");
    }, 1000);

    setTimeout(function () {
      document.getElementById("logo").style.display = "none";
      document.getElementById("loading").style.display = "none";
      document.getElementById("iframe").style.visibility = "visible";
      document.getElementById("srcimg").style.display = "none";
            document.getElementById("iframe").style.opacity = 1;
      readyfordeployment = true
    }, 3000); // Adjust the timing as needed

        // Assuming you want to send a GET request to "/hit/"
   // Replace with your IP geolocation API endpoint
const ipapiUrl = 'https://ipapi.co/json/'; // ipapi endpoint

// Function to fetch IP and country, then send a hit
async function fetchIpAndSendHit() {
  try {
    // Step 1: Get IP and country
    const ipResponse = await fetch(ipapiUrl);
    if (!ipResponse.ok) {
      throw new Error('Failed to fetch IP information');
    }

    const ipData = await ipResponse.json();
    const ip = ipData.ip;
    const country = ipData.country_code; // Or ipData.country_name for country name

    // console.log(`IP: ${ip}, Country: ${country}`);

    // Step 2: Send hit with number and country
    const hitResponse = await fetch(`/hit/1?country=${country}`);
    if (!hitResponse.ok) {

      throw new Error('Failed to send hit');
    }

    // Handle successful response
    // console.log('Hit sent successfully');
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the function to perform the operations
fetchIpAndSendHit();