Released on July 15, 2025

<a href="https://dhtmlx.com/blog/dhtmlx-suite-9-2/" target="_blank">Review of the release on the blog</a>

### Breaking changes

This version brings some updates in the use of the export module used for [exporting Grid data to an Excel file](https://docs.dhtmlx.com/suite/grid/usage/#exporting-data-to-excel). Check the [Migration](https://docs.dhtmlx.com/suite/migration#91---92) guide to keep in step with the latest updates.

### New functionality

- Grid. The [`RangeSelection` module](https://docs.dhtmlx.com/suite/grid/usage_rangeselection) is added to provide functionality for managing range selection in Grid (PRO version)
    - new Grid configuration property: [`rangeSelection`](https://docs.dhtmlx.com/suite/grid/api/grid_rangeselection_config)
	- new methods of the `range` object: [`disable()`](https://docs.dhtmlx.com/suite/grid/api/rangeselection/disable_method), [`enable()`](https://docs.dhtmlx.com/suite/grid/api/rangeselection/enable_method), [`getRange()`](https://docs.dhtmlx.com/suite/grid/api/rangeselection/getrange_method), [`getRangedCells()`](https://docs.dhtmlx.com/suite/grid/api/rangeselection/getrangedcells_method), [`isDisabled()`](https://docs.dhtmlx.com/suite/grid/api/rangeselection/isdisabled_method), [`isRanged()`](https://docs.dhtmlx.com/suite/grid/api/rangeselection/isranged_method), [`resetRange()`](https://docs.dhtmlx.com/suite/grid/api/rangeselection/resetrange_method), [`setRange()`](https://docs.dhtmlx.com/suite/grid/api/rangeselection/setrange_method)
	- new events of the `range` object: [`afterResetRange`](https://docs.dhtmlx.com/suite/grid/api/rangeselection/afterresetrange_event), [`afterSetRange`](https://docs.dhtmlx.com/suite/grid/api/rangeselection/aftersetrange_event), [`beforeResetRange`](https://docs.dhtmlx.com/suite/grid/api/rangeselection/beforeresetrange_event), [`beforeSetRange`](https://docs.dhtmlx.com/suite/grid/api/rangeselection/beforesetrange_event)
- Grid. The [`BlockSelection` module](https://docs.dhtmlx.com/suite/grid/usage_blockselection) is added to provide functionality for managing block selection in Grid (PRO version)
	- new Grid configuration property: [`blockSelection`](https://docs.dhtmlx.com/suite/grid/api/grid_blockselection_config)
	- new methods of the `block` object: [`disable()`](https://docs.dhtmlx.com/suite/grid/api/blockselection/disable_method), [`enable()`](https://docs.dhtmlx.com/suite/grid/api/blockselection/enable_method), [`isDisabled()`](https://docs.dhtmlx.com/suite/grid/api/blockselection/isdisabled_method)
	- new events of the `block` object: [`afterBlockHandleApply`](https://docs.dhtmlx.com/suite/grid/api/blockselection/afterblockhandleapply_event), [`afterBlockSelectionApply`](https://docs.dhtmlx.com/suite/grid/api/blockselection/afterblockselectionapply_event), [`afterBlockSelectionMove`](https://docs.dhtmlx.com/suite/grid/api/blockselection/afterblockselectionmove_event), [`beforeBlockHandleApply`](https://docs.dhtmlx.com/suite/grid/api/blockselection/beforeblockhandleapply_event), [`beforeBlockSelectionApply`](https://docs.dhtmlx.com/suite/grid/api/blockselection/beforeblockselectionapply_event), [`beforeBlockSelectionMove`](https://docs.dhtmlx.com/suite/grid/api/blockselection/beforeblockselectionmove_event), [`blockHandleMouseDown`](https://docs.dhtmlx.com/suite/grid/api/blockselection/blockhandlemousedown_event), [`blockSelectionEnd`](https://docs.dhtmlx.com/suite/grid/api/blockselection/blockselectionend_event), [`blockSelectionStart`](https://docs.dhtmlx.com/suite/grid/api/blockselection/blockselectionstart_event), [`blockSelectionValidate`](https://docs.dhtmlx.com/suite/grid/api/blockselection/blockselectionvalidate_event) 
- Grid. The [`Clipboard` module](https://docs.dhtmlx.com/suite/grid/usage_clipboard) is added to provide functionality for interacting with the clipboard in Grid (PRO version)
    - new Grid configuration property: [`clipboard`](https://docs.dhtmlx.com/suite/grid/api/grid_clipboard_config)
    - new events of the `clipboard` object: [`afterCopy`](https://docs.dhtmlx.com/suite/grid/api/clipboard/aftercopy_event), [`afterPaste`](https://docs.dhtmlx.com/suite/grid/api/clipboard/afterpaste_event), [`beforeCopy`](https://docs.dhtmlx.com/suite/grid/api/clipboard/beforecopy_event), [`beforePaste`](https://docs.dhtmlx.com/suite/grid/api/clipboard/beforepaste_event), [`copyError`](https://docs.dhtmlx.com/suite/grid/api/clipboard/copyerror_event), [`pasteError`](https://docs.dhtmlx.com/suite/grid/api/clipboard/pasteerror_event)
- Grid. The [`DragPanel` module](https://docs.dhtmlx.com/suite/grid/usage_dragpanel) is added to provide auxiliary functionality for moving rows in Grid and improve the drag-n-drop visualization (PRO version)
	- new Grid configuration property: [`dragPanel`](https://docs.dhtmlx.com/suite/grid/api/grid_dragpanel_config)
	- new events: [`dragPanelItemClick`](https://docs.dhtmlx.com/suite/grid/api/dragpanel/dragpanelitemclick_event), [`dragPanelItemMouseDown`](https://docs.dhtmlx.com/suite/grid/api/dragpanel/dragpanelitemmousedown_event)
- Grid. The [`History` module](https://docs.dhtmlx.com/suite/grid/usage_history) is added to provide functionality for managing the history of actions in Grid, including the [Undo/Redo functionality](https://docs.dhtmlx.com/suite/grid/usage_history/#applying-undoredo-operations-to-grid-history-actions) (PRO version)
	- new Grid configuration property: [`history`](https://docs.dhtmlx.com/suite/grid/api/grid_history_config)
	- new methods of the `history` object: [`add()`](https://docs.dhtmlx.com/suite/grid/api/history/add_method), [`canRedo()`](https://docs.dhtmlx.com/suite/grid/api/history/canredo_method), [`canUndo()`](https://docs.dhtmlx.com/suite/grid/api/history/canundo_method), [`disable()`](https://docs.dhtmlx.com/suite/grid/api/history/disable_method), [`enable()`](https://docs.dhtmlx.com/suite/grid/api/history/enable_method), [`isDisabled()`](https://docs.dhtmlx.com/suite/grid/api/history/isdisabled_method), [`getHistory()`](https://docs.dhtmlx.com/suite/grid/api/history/gethistory_method), [`redo()`](https://docs.dhtmlx.com/suite/grid/api/history/redo_method), [`remove()`](https://docs.dhtmlx.com/suite/grid/api/history/remove_method), [`removeAll()`](https://docs.dhtmlx.com/suite/grid/api/history/removeall_method), [`undo()`](https://docs.dhtmlx.com/suite/grid/api/history/undo_method)
	- new events of the `history` object: [`afterAdd`](https://docs.dhtmlx.com/suite/grid/api/history/afteradd_event), [`afterRedo`](https://docs.dhtmlx.com/suite/grid/api/history/afterredo_event), [`afterUndo`](https://docs.dhtmlx.com/suite/grid/api/history/afterundo_event), [`beforeAdd`](https://docs.dhtmlx.com/suite/grid/api/history/beforeadd_event), [`beforeRedo`](https://docs.dhtmlx.com/suite/grid/api/history/beforeredo_event), [`beforeUndo`](https://docs.dhtmlx.com/suite/grid/api/history/beforeundo_event), [`error`](https://docs.dhtmlx.com/suite/grid/api/history/error_event)
- Grid. The [`isSelected()`](https://docs.dhtmlx.com/suite/grid/api/selection/selection_isselectedcell_method) method is added for the [`Selection` module](https://docs.dhtmlx.com/suite/grid/usage_selection) to check whether the specified cell is selected

### Updates

- Grid. The logic and appearance of the [drag-n-drop functionality](https://docs.dhtmlx.com/suite/grid/configuration/#drag-n-drop) is improved. Check the [related sample](https://snippet.dhtmlx.com/uevdwjuo) 
- Grid. The [export to Excel](https://docs.dhtmlx.com/suite/grid/usage/#exporting-data-to-excel) functionality is updated. The [Json2Excel](https://github.com/dhtmlx/json2excel) module is now used for exporting Grid data to Excel. Check the [Migration guide](https://docs.dhtmlx.com/suite/migration/#91---92) for details
- Grid. The [`xlsx()`](https://docs.dhtmlx.com/suite/grid/api/export/grid_xlsx_method) method of the Export module gets two new configuration settings:
    - `tableName`- to set the name of a sheet with grid data in the Excel file
    - `dateFormatMask` - to set the date format mask for Excel
- Grid. The possibility to use keyboard navigation for [selecting ranges of cells](https://docs.dhtmlx.com/suite/grid/configuration/#shortcut-keys-for-selecting-ranges-of-cells). The following shortcut keys and their combinations are available: 

<table>
    <tbody>
        <tr>
            <td><b>ArrowUp</b></td>
            <td>resets the selected range and moves the focus to the previous vertical cell, setting the initially selected cell if no selection is active</td>
        </tr>
        <tr>
            <td><b>ArrowDown</b></td>
            <td>resets the selected range and moves the focus to the next vertical cell, setting the initially selected cell if no selection is active</td>
        </tr>
        <tr>
            <td><b>ArrowLeft</b></td>
            <td>resets the selected range and moves the focus to the previous horizontal cell, setting the initially selected cell if no selection is active</td>
        </tr>
        <tr>
            <td><b>ArrowRight</b></td>
            <td>resets the selected range and moves the focus to the next horizontal cell, setting the initially selected cell if no selection is active</td>
        </tr>
         <tr>
            <td><b>Shift+ArrowUp</b></td>
            <td>extends the selected range from the current initial cell to the previous vertical cell</td>
        </tr>
        <tr>
            <td><b>Shift+ArrowDown</b></td>
            <td>extends the selected range from the current initial cell to the next vertical cell </td>
        </tr>
        <tr>
            <td><b>Shift+ArrowLeft</b></td>
            <td>extends the selected range from the current initial cell to the previous horizontal cell </td>
        </tr>
        <tr>
            <td><b>Shift+ArrowRight</b></td>
            <td>extends the selected range from the current initial cell to the next horizontal cell </td>
        </tr>
        <tr>
            <td><b>Ctrl+ArrowUp</b></td>
            <td>resets the selected range and moves the focus to the first vertical cell</td>
        </tr>
        <tr>
            <td><b>Ctrl+ArrowDown</b></td>
            <td>resets the selected range and moves the focus to the last vertical cell</td>
        </tr>
        <tr>
            <td><b>Ctrl+ArrowLeft</b></td>
            <td>resets the selected range and moves the focus to the first horizontal cell</td>
        </tr>
        <tr>
            <td><b>Ctrl+ArrowRight</b></td>
            <td>resets the selected range and moves the focus to the last horizontal cell</td>
        </tr>
        <tr>
            <td><b>Ctrl+Shift+ArrowUp</b></td>
            <td>extends the selected range to the first vertical cell</td>
        </tr>
        <tr>
            <td><b>Ctrl+Shift+ArrowDown</b></td>
            <td>extends the selected range to the last vertical cell</td>
        </tr>
        <tr>
            <td><b>Ctrl+Shift+ArrowLeft</b></td>
            <td> extends the selected range to the first horizontal cell</td>
        </tr>
        <tr>
            <td><b>Ctrl+Shift+ArrowRight</b></td>
            <td> extends the selected range to the last horizontal cell</td>
        </tr>
    </tbody>
</table>

The following shortcut key and mouse combination is available:

<table>
    <tbody>
        <tr>
            <td><b>Shift + click</b></td>
            <td>sets the end cell of the range, extending the selection from the current initial cell</td>
        </tr>
    </tbody>
</table>

The following shortcut key is available when the [`editable` mode](https://docs.dhtmlx.com/suite/grid/api/grid_editable_config) is set for the Grid component and the `BlockSelection` module is used in the `"range"` mode:

 <table>
    <tbody>
        <tr>
            <td><b>Delete</b></td>
            <td>allows clearing the selected cells</td>
        </tr>
    </tbody>
</table>

### Fixes

- DragManager. Incorrect determining the position for dropping an element during the Drag&Drop operation (child elements) in the TreeGrid mode
- DragManager. The issue with moving a line to the header/footer area
- DragManager. The problem with determining the position for dropping above the first element
- DragManager. The issue associated with the absence or incorrect definition of the drop position for the default mode
- DragManager. The issue with the `dragIn` event (the previous reset state was transmitted)
- DragManager. The `dragIn/dragOut` events are optimized (false positives are removed)
- Grid. The issue with falsy selection of fixed cells while selecting unfrozen cells
- Grid. The issue with dragging unselected items
- Grid. Sorting of the Date string (ISO) values results in the invalid format error
- Grid. Export. Double quotes in the cell value are escaped in the exported Excel
- Grid. The issue with editor closing and saving the entered value on scrolling the grid
- Grid. The `draggable:false` setting of a column affects the drag-n-drop of rows
- Grid. The error that occurred when the value of the `parent` property was set as a number 

### New samples

#### Grid

- [Grid (TreeGrid). DragPanel. Initialization](https://snippet.dhtmlx.com/uevdwjuo)
- [Grid. BlockSelection in the "range" mode. Selection with restricted columns](https://snippet.dhtmlx.com/42fp5qvt)
- [Grid. BlockSelection. Work with the handle configuration](https://snippet.dhtmlx.com/sryiguxu)
- [Grid. BlockSelection. Styling (custom CSS)](https://snippet.dhtmlx.com/4k3x4bfm)
- [Grid. Clipboard with notifications (messages)](https://snippet.dhtmlx.com/2nar7ocd)
- [Grid. Clipboard. Custom copy/cut/paste for number and date columns](https://snippet.dhtmlx.com/dfj49xah)
- [Grid. Clipboard. Copy/сut/paste between grids with validation](https://snippet.dhtmlx.com/q1wj772g)
- [Grid. Clipboard between two Grids with modifiers](https://snippet.dhtmlx.com/h3hxcpog)
- [Grid. Clipboard between Grid and Spreadsheet](https://snippet.dhtmlx.com/hx69j42h)
- [Grid. History. Configuration](https://snippet.dhtmlx.com/vznpyeit)
- [Grid. History. Adding a custom action](https://snippet.dhtmlx.com/i9rm4vsd)