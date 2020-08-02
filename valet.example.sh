#! /bin/bash

# Set permissions `chmod u+x thisfile.sh`

while test $# -gt 0; do
   case "$1" in
    -link)
      shift
      valetlink="valet link ${1} && valet secure ${1}"
      valet_addto=${1}
      shift
      ;;
    # -o)
    #   shift
    #   valet_addto=${1}
    #   shift
    #   ;;
    *)
      echo "$1 is not a recognized flag!"
      return 1;
      ;;
  esac
done

eval $valetlink

echo "[$valet_addto]($valet_addto)" | tee -a /local/path/to/valet_links.md


# Valet links output:
# valet links 2>&1 | tee /local/path/to/valet_links.md
