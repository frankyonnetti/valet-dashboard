#! /bin/bash

# Duplicate this file and rename it 'valet.sh'.
# Change paths to the HTML files so it matched your local environment.
# Set permissions: `chmod u+x valet.sh`

# Get the links table output from "valet links" and create an HTML file from it.
valet_links="valet links 2>&1 | tee /local/path/to/valet/dashboard/valet_links.html"
eval $valet_links

# Get the version number output from "valet -V" and create an HTML file from it.
valet_version="valet -V 2>&1 | tee /local/path/to/valet/dashboard/valet_version.html"
eval $valet_version
