pref("taskmail.report.to", "to@domain.fr");
pref("taskmail.report.cc", "cc@domain.fr");
pref("taskmail.report.subject", "subject");
pref("taskmail.report.body", "Report\n#FOLDER#\n<ul>\n    <li>#FOLDER_NAME#</li>\n    <ul>\n       #TASK#<li>#TASK_TITLE# (<tt>#TASK_PRIO#</tt>)\n   <b>#TASK_STATE#</b>\n   #TASK_CREATION_DATE# <u>#TASK_DUE_DATE#</u> #TASK_COMPLETION_DATE#\n    <i>#TASK_DESC#</i>\n   </li>#TASK#\n       #SUB_FOLDERS#\n    </ul>\n</ul>\n#FOLDER#\nBest regards");
pref("taskmail.states", "chrome://taskmail/locale/taskmail-overlay.properties");