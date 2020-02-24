https://9.3.147.238/react-dashboard

steps:

npm run build

copy build folder to HMC
go to HMC -> /opt/pmc/lib ->create a folder called react-dashboard
copy all contents of build to react-dashboard
and then issue the command -> systemctl restart httpd
login to HMC and then access it using https://9.3.147.238/react-dashboard

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

Enjoy the new HMC dashboard
