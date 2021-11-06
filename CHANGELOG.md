## Version 0.5.0

[Artur](https://github.com/xartuu) contributed once again with some great improvements.

- NEW: You no longer have to execute the shell script to display the list of sites and software versions!

    The page list is scanned using the scandir() function. The script takes the contents of the Valet configuration file, looks through all the paths, looks for pages, and displays them. This is better than the valet links command, because it only displayed linked pages, but now you can see in the dashboard linked pages and pages in Valet paths.
- NEW: Added the ability to copy the path to the site folder and the path to the ssl cetificate, if the site has one.

## Version 0.4.3

- UPDATE: Adjusted column widths.
- FIX: Inconsistencies with sidebar container-box spacing.


## Version 0.4.2

- UPDATE: Just a few style tweaks.


## Version 0.4.1

Following changes/updates were contributed by [Artur Kociszewski](https://github.com/xartuu). Thanks Artur!

- NEW: Added a switch to enable / disable Quick Find.
- UPDATE: Reposition Quick Find so it's higher up and in a more intuitive place.
- UPDATE: Added a command to the installation instructions in README.md to download Font Awesome icons from the official repository.
- FIX: Renamed the Color Mode switch to Dark Mode to make it more readable.


## Version 0.4.0

- NEW: Added "server versions" panel to sidebar.


## Version 0.3.0

- NEW: Ripped out the grouping header. It wasn't that useful with the localStorage constraint.
- NEW: Added new fuzzy filter to quickly find a host URL.


## Version 0.2.3

- FIX: Host list reset button is actually disabled now if no sorting has been applied.


## Version 0.2.2

- FIX: variable typo in JS.
- FIX: clicking "Add" in the header modal closes the modal now.


## Version 0.2.1

Release tag fix.


## Version 0.2.0

You can now sort the host list and add header labels.

- NEW: header labels.
- ADDED: [SortableJS](https://github.com/SortableJS/Sortable).


## Version 0.1.1

- FIX: color picker in Safari to use active color on load.
- FIX: top spacing above footer in light mode.


## Version 0.1.0

Initial release.
