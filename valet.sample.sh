#! /bin/bash

# apply file permissions: `chmod u+x drushfile.sh`

# Run script...
# --
# Duplicate file and rename it 'valet.sh'.
# Change paths to match your local environment.

valet_links="valet links 2>&1 | tee /Local/Path/To/valet/server/valet_links.md"
valet_version="valet -V 2>&1 | tee /Local/Path/To/valet/server/valet_version.md"

eval $valet_links
eval $valet_version
