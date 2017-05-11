import { Component } from '@angular/core';

@Component({
    templateUrl: 'icons.component.html',
    styleUrls: ['icons.component.scss'],
})

export class IconsComponent {

    public iconList: any[] = [
        { icon: 'menu', name: 'Menu', description: 'Open and Close side nav' },
        { icon: 'person', name: 'User', description: 'User Accoun' },
        { icon: 'people', name: 'Users', description: 'Multiple users' },
        { icon: 'more_horiz', name: 'More', description: 'Expand list of additional options' },
        { icon: 'more_vert', name: 'More', description: 'Expand list of additional options' },
        { icon: 'save', name: 'Save', description: 'Save' },
        { icon: 'restore_page', name: 'Revert', description: 'Revert to previous save state' },
        { icon: 'delete', name: 'Delete', description: 'Remove/delete data' },
        { icon: 'clear', name: 'Clear', description: 'Clear specific identified data' },
        { icon: 'edit', name: 'Edit', description: 'Edit/Update' },
        { icon: 'search', name: 'Search', description: 'Search' },
        { icon: 'send', name: 'Submit', description: 'Sending current data to a workflow' },
        { icon: 'thumb_up', name: 'Approve', description: 'Approve' },
        { icon: 'thumb_down', name: 'Reject', description: 'Reject' },
        { icon: 'arrow_drop_down', name: 'Caret', description: 'Drop down menu indicator' },
        { icon: 'today', name: 'Today', description: 'Takes user back to today\'s date' },
        { icon: 'date_range', name: 'Weekly', description: 'View set of data on a weekly basis' },
        { icon: 'event_note', name: 'Monthly', description: 'View set of data on a monthly basis' },
        { icon: 'add', name: 'Add', description: 'Add data' },
        { icon: 'attach_file', name: 'Attachment', description: 'Uploading a document' },
        { icon: 'file_download', name: 'Download', description: 'Open document' },
        { icon: 'print', name: 'Print', description: 'Printing document' },
        { icon: 'access_time', name: 'Time', description: 'Displays the clock allowing the user to select time' },
        { icon: 'error', name: 'Error', description: 'Something wrong with the page preventing your action' },
        { icon: 'warning', name: 'Warning', description: '' },
        { icon: 'expand_more', name: 'Expand', description: 'Expand a section to view more detail (Down)' },
        { icon: 'expand_less', name: 'Collapse', description: 'Collapse a section (up)' },
        { icon: 'add_circle', name: 'Expand Tree View', description: 'Expand for tree view' },
        { icon: 'remove_circle', name: 'Collapse Tree View', description: 'Collapse for tree view' },
        { icon: 'vertical_align_bottom', name: 'Import', description: 'Bring in external file' },
        { icon: 'vertical_align_top', name: 'Export', description: 'Take an internal structure and convert to an external structure' },
        { icon: 'content_copy', name: 'Clone', description: 'Replicate data/copy' },
        { icon: 'zoom_in', name: 'Zoom in', description: '' },
        { icon: 'zoom_out', name: 'Zoom out', description: '' },
        { icon: 'play_arrow', name: 'Move forward', description: 'Move forward by small increments' },
        { icon: 'fast_forward', name: 'Move forward', description: 'Move forward by large increments' },
        { icon: 'fast_rewind', name: 'Rewind', description: 'Move backward by larg increments' },
        { icon: 'airplanemode_active', name: 'Air', description: '' },
        { icon: 'directions_boat', name: 'Sea', description: '' },
        { icon: 'directions_car', name: 'Ground', description: '' },
        { icon: 'recent_actors', name: 'Organization', description: 'Organization Hierachy' },
        { icon: 'account_balance', name: 'Vault', description: 'Physical vault for inventory' },
        { icon: 'close', name: 'Close', description: 'Close component' },
        { icon: 'storage', name: 'Inventory', description: 'Items needed to be inventory' },
        { icon: 'done_all', name: 'Verify Inventory', description: '' },
        { icon: 'format_list_numbered', name: 'Serialized', description: 'Has a serial number' },
        { icon: 'format_list_bulleted', name: 'Non-Serialized', description: 'Does not have a serial number' },
        { icon: 'layers', name: 'Layers', description: 'Map Layers' },
        { icon: 'build', name: 'Tools', description: 'Ability to use different tools to modify a set of data' },
        { icon: 'bookmark', name: 'Bookmark', description: 'Save a page to retrieve easily' },
        { icon: 'info', name: 'Information', description: 'Provides more detail' },
        { icon: 'help', name: 'Help', description: 'Guidance or tutorials' },
        { icon: 'feedback', name: 'Feedback', description: 'Allows users to provide their inputs' },
        { icon: 'place', name: 'Location', description: 'Signifies a specific ocation point' },
        { icon: 'map', name: 'Map', description: '' },
        { icon: 'public', name: 'Globe', description: '' },
        { icon: 'filter_list', name: 'Filter', description: 'Filter List' },
        { icon: 'settings', name: 'Settings', description: '' },
        { icon: 'check', name: 'Check', description: '' },
        { icon: 'network_wifi', name: 'Wifi', description: '' },
        { icon: 'launch', name: 'Launch', description: 'Open in a new/external link' },
        { icon: 'undo', name: 'Undo', description: '' },
        { icon: 'fingerprint', name: 'Fingerprint', description: 'Fingerprint needed, take to biometrics app' },
        { icon: 'sync', name: 'Sync', description: '' },
        { icon: 'assignment', name: 'Logs', description: '' },
        { icon: 'cached', name: 'Cache', description: '' },
        { icon: 'camera_alt', name: 'Camera', description: 'Take a photo' },
        { icon: 'refresh', name: 'Refresh', description: '' },
        { icon: 'supervisor_account', name: 'Subjects', description: 'Subjects being processed by the systemd' },
        { icon: 'dashboard', name: 'Dashboard', description: '' },
        { icon: 'play_circle_filled', name: 'Right', description: 'Scroll Right' },
        { icon: 'pie_chart', name: 'Pie Chart', description: '' },
        { icon: 'insert_chart', name: 'Bar Chart', description: '' },
        { icon: 'view_list', name: 'List', description: '' },
        { icon: 'volume_up', name: 'Sound On', description: '' },
        { icon: 'volume_off', name: 'Sound Off', description: '' },
        { icon: 'folder', name: 'File Explorer', description: 'Open Folder' },
        { icon: 'wb_sunny', name: 'Weather', description: '' },
        { icon: 'schedule', name: 'Schedule', description: 'Schedule' },
        { icon: 'description', name: 'Description', description: 'Disable editing capabilities and have a read-only contextual view' },
        { icon: 'arrow_back', name: 'Go Back', description: 'Take user back to the previous page' },
        { icon: 'message', name: 'Messages', description: '' },
        { icon: 'content_paste', name: 'Show Clipboard', description: 'Show a clipboard that has multiple actions such as copy/paste' },
        { icon: 'chevron_left', name: 'Move back', description: 'Move one page left, used for pagination to move back' },
        { icon: 'chevron_right', name: 'Move forward', description: 'Move one page right, used for pagination to move forward' },
        { icon: 'last_page', name: 'Last Page', description: 'Used in pagination to go to the last page' },
        { icon: 'first_page', name: 'First Page', description: 'Used in pagination to go to the firlst' },
        { icon: 'home', name: 'Home', description: '' },
        { icon: 'security', name: 'Security', description: '' },
        { icon: 'notifications', name: 'Notifications', description: '' },
        { icon: 'email', name: 'Email', description: '' },
        { icon: 'apps', name: 'Applications', description: '' }
    ];

    constructor() {
    }
}
