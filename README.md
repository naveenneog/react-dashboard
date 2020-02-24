https://9.3.147.238/react-dashboard

steps:

npm run build

copy build folder to HMC
go to HMC -> /opt/pmc/lib ->create a folder called react-dashboard
copy all contents of build to react-dashboard
and then issue the command -> systemctl restart httpd
login to HMC and then access it using https://9.3.147.238/react-dashboard
