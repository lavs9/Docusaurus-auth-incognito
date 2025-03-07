# MTM Template

## Overview

MTM Template is used to set the MTM parameters through multiple widgets available in the template.

Users can add/delete groups and create multiple groups under a single template name. All the group data will be saved under the created template name.

There are five widgets available under every group.

## Widgets

| **Widget**               | **Purpose**                                                                                 | **Options**    | **Description** |
|--------------------------|--------------------------------------------------------------------------------------------|----------------|-----------------|
| **Position to Consider** | All positions that need to be considered for MTM computation.                             | Segment        | Select market segment, e.g., all F&O, all EQ, etc. |
|                          |                                                                                            | Instrument     | It is dynamic and works as per the selection user made in the market segment. For example, if the user selected all F&O, it will show Future and Options, where the user has to select one. |
|                          |                                                                                            | Product        | It is dynamic and works as per the selection user made in the market segment. For example, if the user selected all EQ, it will show Delivery, Margin, PTST, etc., where a user has to select one. |
|                          |                                                                                            | Position Type  | Long, short, or all positions. |
| **Position to Square Off** | All positions to be squared off based on trigger of MTM conditions, which are based on the positions captured from the above widget (Position to Consider). | Segment        | Select market segment, e.g., all F&O, all EQ, etc. |
|                          |                                                                                            | Instrument     | It is dynamic and works as per the selection user made in the market segment. For example, if the user selected all F&O, it will show Future and Options, where the user has to select one. |
|                          |                                                                                            | Product        | It is dynamic and works as per the selection user made in the market segment. For example, if the user selected all EQ, it will show Delivery, Margin, PTST, etc., where a user has to select one. |
|                          |                                                                                            | Position Type  | Long, short, or all positions. |
| **MTM Limit**            | Set the MTM limit with the use of a multiplier against each holding.                      | -              | Example: Available Cash Deposit = 10000, Multiplier value set as 1.50. Now, the available MTM limit in cash deposit = 15000. |
| **MTM Utilisation**      | Select what values to consider for MTM computation.                                      | MTM Profit, MTM Loss, Booked Profit, Booked Loss, MTM Profit - Option | Example Field Turned ON: MTM Loss and Booked Loss<br /> * MTM Loss: (-2000)<br /> * Booked Loss: (-5000)<br /> * Total MTM Utilized value: (-7000) MTM Loss + Booked Loss |


## Square Off Rules

- **CFS Limit**
- **Pre MTM Square Off Percentage** - Percentage value at which the user goes into MTM-based restrictions.
- **MTM Square Off Percentage** - Percentage at which the square-off rules are triggered.
- **Pre Trigger Event** - Rules when Pre MTM square-off percentage is reached.
- **Post Trigger Event** - Rules when MTM square-off percentage is reached.
- **Revert MTM Trigger Restriction Percentage** -  
  This configuration enables the broker to remove users from MTM alert calculations, thereby reducing system load.  
  - Example: If pre-MTM is set at 50%, then based on market movements, users can continuously move in and out (49-50-51-49-48-53), which can create confusion.  
  - To avoid this, a limit can be set to remove the user out. If set at 45%, as soon as MTM goes below 45, the user moves out of MTM template options, reducing system load.
- **Reserve Amount Percentage**
- **Max MTM Trigger Attempts**


## Implementation Details and Validations


### Template Creation

The system should have the following set of fields to create, fetch, and view the MTM Template configurations.

| **Control Name** | **Control Type / Business Logic** |
|------------------|----------------------------------|
| **Template** | - Control Type: Entry Field + Drop-Down List  <br /> - Should allow entering the Template Name with Alpha Numeric and Allowable Special Characters  <br /> - Template Name should not be longer than the length mentioned in the API  <br /> - Duplicate MTM template name creation should not be allowed  <br /> - Should display the list of Template Names on search by Key Name  <br /> - Should display the list of groups created under the selected Template  <br /> - Multiple MTM Templates should be allowed to create |
| **Save** | - Control Type: Button  <br /> - On clicking the SAVE button, the system should validate the following conditions:  <br />   - Minimum one group should be available in an MTM Template  <br />   - Minimum one record should be available on each widget under the group  <br />   - A popup message should be displayed while clicking on the SAVE button without entering the template name. Popup string: **"Template Name should not be blank"** |
| **Save As** | - Control Type: Button  <br /> - "SAVE AS" is used to create a copy of the existing template name with slight modifications in records within the existing template (or) without any modifications.  <br /> - "Save As" option should get enabled while entering a new Template Name in the “Template” drop-down list.  <br /> - On clicking "Save As," the system should pop up a child window with:  <br />   - Label: "Template"  <br />   - Entry field to enter the **New Template Name**  <br />   - "OK" and "CANCEL" options.  <br /> - If "OK" is selected:  <br />   - A new MTM template should be created in the system with all MTM Parameters configured in the widget.  <br /> - If "CANCEL" is selected:  <br />   - The child window should close without saving the MTM record.  <br /> - System should validate the new Template Name with the existing templates in the system. If the same name is entered, the system should display an alert message: **"Template Name Already Exists"**. |


## Template Creation:

System should have the following set of fields to create, fetch, and view the MTM Template configurations.

| **Control Name** | **Control Type / Business Logic** |
|------------------|----------------------------------|
| **Template** | - Control Type: Entry Field + Drop-Down List  <br /> - Should allow entering the Template Name with Alpha Numeric and Allowable Special Characters  <br /> - Template Name should not be more than the length mentioned in the API  <br /> - Duplicate MTM template name creation should not be allowed  <br /> - Should display the list of Template Names on search by Key Name  <br /> - Should display the list of groups created under the selected Template  <br /> - Multiple MTM Templates should be allowed to create |
| **Save** | - Control Type: Button  <br /> - On clicking the SAVE button, the system should validate the following conditions:  <br />   - Minimum one group should be available in an MTM Template  <br />   - Minimum one record should be available on each widget under the group  <br />   - A popup message should be displayed while clicking on the SAVE button without entering the template name. Popup string: **"Template Name should not be blank"** |
| **Save As** | - Control Type: Button  <br /> - "SAVE AS" is used to create a copy of the existing template name with a slight modification in records within the existing template (or) without any modifications.  <br /> - "Save As" option should get enabled while entering a new Template Name in the “Template” drop-down list.  <br /> - On clicking "Save As," the system should pop up a child window with:  <br />   - Label: "Template"  <br />   - Entry field to enter the **New Template Name**  <br />   - "OK" and "CANCEL" options.  <br /> - If "OK" is selected:  <br />   - A new MTM template should be created in the system with all MTM Parameters configured in the widget.  <br /> - If "CANCEL" is selected:  <br />   - The child window should close without saving the MTM record.  <br /> - System should validate the new Template Name with the existing templates in the system. If the same name is entered, the system should display an alert message: **"Template Name Already Exists"**. |

---

## Group Creation:

| **Control Name** | **Control Type / Business Logic** |
|------------------|----------------------------------|
| **Group** | - Should allow entering the Group Name with Alpha Numeric and Allowable Special Characters  <br /> - Group Name should not be more than the length mentioned in API  <br /> - Group Name should display on Search of Keyword  <br /> - Should display the list of groups created in the drop-down Group drop-down list  <br /> - Multiple Groups under a single MTM Template should be allowed to create  <br /> - Duplicate Group Name should not be allowed  <br /> - On selection of Template Name in the MTM Template "Drop-down list," the system should display the list of Groups created under the selected MTM Template |
| **Add** | - On clicking Add, the system should create the Group  <br /> - If Group Name is blank, then on clicking Add, the system should display the popup message: **"GROUP-NAME should not be blank"** |
| **Rename** | - Control Type: Button  <br /> - On clicking Rename, the system should allow renaming the Group  <br /> - During rename, if a Group with the same name already exists in the system, then the system should not accept the rename request and should display a message as **"Group Name Already Exists"** |
| **Delete** | - On clicking delete, the system should pop up a confirmation message **"Do you want to Delete the Group?"** with **Yes/No** options  <br /> - If "Yes" → System should delete the selected Group  <br /> - If "No" → System should not make any changes  <br /> - System should delete the selected group in the selected MTM Template |


Following Widgets should be available on MTM Template view
Widget 1 & 2: Position to Consider in MTM and Position to Consider in Square-Off

Following list of columns should be available in “Position to Consider in MTM" and Position to Consider in Square-Off Widgets
Filed Business Logic

Market Segment » Should display the list of Market Segment (Base Segment + Combined Segment)
- ‘OTHERS’ (value as -1) option shall be available in the Drop-down

Instrument » Should display the list of Applicable instruments as per the Segment Selected in the ‘Market Segment’ drop-down list
- Only Applicable for FO segments
- Following item should be displayed in the Drop-down

# FUTURE


‘OPTION
Product » Displays the list of applicable Product as per the Segment selected in the Market Segment Drop-down list
Position Type » Displays the list of Applicable Position Type (Long Position / Short Position)

» Long Position & Short Position for market segment other than “Others” and DP, POOL, SAR, MTF Holding(Holding Type Master)

Add * On click of ADD — System should add the combination selected (i.e. Segment, Instrument, Product, Position Type) on the Widget Grid view.
» If already record with the same combination is available in the grid view, then system should not allow to add the duplicate record

Edit » Edit option shall be available against each record
- On click of Edit — System should allow to modify the position type of selected combination (i.e. Segment, Instrument, Product) on the Widget Grid view.

Delete * Delete option shall be available on each record
» On Click of Delete- System should popup a confirmation message with Yes/No option
- On click of Yes- system should remove the record from the grid
»* On click of No- system should not make any changes

Validation:
Member should be allowed to Modify the Position Type defined in the records.

Within a Group, member can either add records for Base segment or Market Segment Type (i.e. If Member added a Record in Group) as (Seg: NSEEQ, Inst: -, Prod: Margin, Position Type: Long Position) in the same Group, system should not allow member to add the record with Market
Segment Type (i.e. Seg: CASH, Inst: -, Prod: Margin, Position Type: Long Position or Short Position or any).

Proper alert message should be displayed to member while adding the 2nd record (like: Record already available with ‘Base Segment’, New record with ‘Market Segment Type’ is not allowed within the same Group)

Member should allow to add same combination of Record on Widget 1 in different groups within the single MTM Template.



