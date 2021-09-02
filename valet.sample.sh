#! /bin/bash

# Duplicate this file and rename it 'valet.sh'.
# Change the output paths below to match your local environment. Be sure to keep the HTML file name the same.
# Set permissions on this file: `chmod u+x valet.sh`

# Get the links table output from "valet links" and create an HTML file from it.
valet_links="valet links 2>&1 | tee /local/path/to/valet/dashboard/inc/valet_links.html"
eval $valet_links

# Get the version number of each server technology we're using and create an HTML file from it.

# Valet
valet_version="valet -V 2>&1 | tee /local/path/to/valet/dashboard/inc/valet_version.html"
eval $valet_version

# Dnsmasq
dnsmasq_version="dnsmasq -v 2>&1 | tee /local/path/to/valet/dashboard/inc/dnsmasq_version.html"
eval $dnsmasq_version

# MariaDB
mysql_version="mysql --version 2>&1 | tee /local/path/to/valet/dashboard/inc/mariadb_version.html"
eval $mysql_version

# Nginx
nginx_version="nginx -v  2>&1 | tee /local/path/to/valet/dashboard/inc/nginx_version.html"
eval $nginx_version
