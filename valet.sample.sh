#! /bin/bash

# Duplicate this file and rename it 'valet.sh'.
# Change the output paths below to match your local environment. Be sure to keep the HTML file name the same.
# Set permissions on this file: `chmod u+x valet.sh`

# Get the links table output from "valet links" and create an HTML file from it.
valet_links="valet links 2>&1 | tee /local/path/to/valet/dashboard/valet_links.html"
eval $valet_links

# Get the version number output from "valet -V" and create an HTML file from it.
valet_version="valet -V 2>&1 | tee /local/path/to/valet/dashboard/valet_version.html"
eval $valet_version
