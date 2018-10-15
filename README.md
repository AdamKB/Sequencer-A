# Sequencer-A


Pure Javascript/JQuery application to develop, play and manage drum pattern sequences.

The main purpose of this project is to provide a simple, cohesive interface for creating custom drum loops, to be used as backing tracks for musicians. 

Can also be used as a method for aspiring music producers without (technical knowledge of) DAWs to practice sequencing.

Or just to kill time.

                                                                

Makes use of the following technologies:

HTML5 localStorage.
webAudio JavaScript API.
.wav files maintained in BLOB fields in a database table (Oracle) - client accesses through REST.


External JavaScript libraries:

- Howler.js (audio library / used to access sound samples & edit dynamically: Volume / Panning)
- JQuery contextMenu (for the selection and replacement of drum samples)
- JSZip.js (projects can be exported in JSON format into zip files for sharing / backup)
- sweetAlert.js (customised alert box for thematic continuity)


User develops drum sequences through a simple grid interface. Click cell in grid = activate drum sample in particular position.
Utilised JQuery .mousedown() / .mouseover() / .mouseup() events to implement click&drag (selection of multiple cells with single click). User may change default audio samples without altering an existing drum sequence pattern (but cannot use/upload custom sounds).


Sequencer A is a 0 cost application & requires no login (running on Oracle APEX platform).
All user data is managed in localStorage, which does not allow for permanent save data. JSZip makes up for this by allowing the user to download a zip file containing project data, which can be uploaded & imported into the application to resore projects (as a more permanent Load function). However, if "SAVE" / "LOAD" is used, rather than "EXPORT" / "IMPORT", all localStorage data is cleared with the cache. All projects must be saved with a user-specified name, which can be altered at any time (if specified name is already in use, the old project data will be overwritten). All saved projects come with mandatory abbreviation (can also be changed if the user wishes). 

localStorage allows for 5MB of data (ample, as Sequencer A save data is miniscule).
"SAVE" function stringifies (JSON) Sequencer A project data and stores in variable "projectIndex".
"LOAD" function accesses "projectIndex" and resores saved data.
Saved sequences can be combined into 'chains' (making use of drag&drop functionality) and saved as named objects in local storage. Individual sequences AND chains can be saved/exported/imported.


PROBLEMS:

Currently Sequencer A does not work cross-browser (created in Google Chrome). E.g. contextMenu fails in Safari, so entire application is nullified. WebKit is currently used in several CSS features, and these are redundant in Mozilla Firefox/ IE.

Lacking Export Audio (BOUNCE) feature. There is currently no way of converting Sequencer A projects into Audio File Format (.wav/.mp3/.aiff etc.), unless the user records machine playback through use of external software.

Oracle APEX platform has limited internal JavaScript text length. To overcome this, blocks of common JavaScript functions had to be saved in minimised .js libraries and uploaded to APEX.

User is unable to upload their own samples to use in the application. There are currently around 130 non-negotiable .wav samples available.

Projects cannot be shared unless user sends .zip file manually (over e-mail, USB, Cloud etc.).

Sequencer A is not responsive for mobile (as of 01/09/2018).
