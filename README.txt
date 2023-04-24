Views Selective Filters
=======================
Version 1.x-1.6

Allows to have an exposed filter only show options that belong to result set.
The options are calculated real-time with the current View's configuration, 
including the filters selected by the user so you get dynamic dependent filters,
that is, when the value of one filter is changed, 
the list of options of the selective filters are updated accordingly to
the trimmed down result set.

To make it work:

[1] Enable the module per the usual Backdrop method at /admin/modules/list.
[2] Add a field to the view that you want to use as a distinct field.
[2.1] Configure the field output in [2] as you wish.
[2.2] If you do not want this field to be shown in the result set,
just mark it as "Exclude from display".
[3] Add a filter of type "(selective)" to your view, and in the filter settings
select the field you configured in [2]. If the field is not showing, that means
that the filter and field you are trying to match are not compatible.

You can get three types of errors with this module:

(a) You did not properly match a filter and a field.
(b) You properly matched filter and field, but base field is not the same.
You get the same error text as in (a).
(c) You choose a field whose distinct value has more than the limit (100 by default) 
different possible values, obviously this field is not the kind of field you 
would use for a selective filter.

=======================================================================================
Forked from the Drupal7 project https://www.drupal.org/project/views_selective_filters,
that was created by David Garcia.
Modifications to support Backdrop are made by Onyx.
