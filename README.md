Welcome to React Dashboard Proof of Concept

-Prerequisites to run this project 
-VSCode download your version from https://code.visualstudio.com/
-npm latest from https://www.npmjs.com/get-npm
-clone this project or download to a directory 
-unzip it 
-npm install 
-npm start 
-This will start the project in the Development mode 
-Open http://localhost:12443 in Safari
-Enable Developer options in safari
-Check Disable Cross Origin Restrictions in the Develop options
-Monitor the network using Inspect element to find which HMC call it is going 
-Click on the All > Go to headers > Pick the HMC IP and login to the HMC in the next tab
-Now reload the React App by pressing F5 
-It should render the systems page navigate around to see other pages 
-To Edit 
-open the project using VSCode
-The Project root start from App.js
-Modify the HMC IP in the AxiosHMC.js to point to your HMC and follow the same logon procedure for 


STEPS to build and push to HMC
Example
https://9.3.147.238/react-dashboard
https://9.3.147.222/react-dashboard

steps:

npm run build

-copy build folder to HMC
-go to HMC -> /opt/pmc/lib ->create a folder called react-dashboard
-copy all contents of build to react-dashboard
-and then issue the command -> systemctl restart httpd
-login to HMC and then access it using https://9.3.147.238/react-dashboard

One time setup
modify the file  /opt/pmc/config/httpd/dashboard.conf

Add this snippet

<Location "/react-dashboard">
    ProxyPass !
</Location>
Alias "/react-dashboard" "/opt/pmc/lib/react-dashboard"
<Directory "/opt/pmc/lib/react-dashboard">
    allow from all
    order allow,deny
    Require all granted
    AllowOverride All
    Header set Cache-Control "max-age=31536000, public"
</Directory>
<Location "/static">
    ProxyPass !
</Location>
Alias "/static" "/opt/pmc/lib/react-dashboard/static"
<Directory "/opt/pmc/lib/react-dashboard/static">
    allow from all
    order allow,deny
    Require all granted
    AllowOverride All
    Header set Cache-Control "max-age=31536000, public"
</Directory>

issue resetccfw
go to 
https://<hmc-ip>/react-dashboard

In package.json
include 
"homepage" : "https://9.3.147.222:12443/react-dashboard/"

for building the app to react-dashboard as home 

then npm run build will build the file to respective home folder

Enjoy the new HMC dashboard
