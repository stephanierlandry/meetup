Feature: Show and Hide Event Details

Scenario: An event element is collapsed by default
	Given The main page is open
	When the user is viewing an event element
	Then the user will have to expand the element to view details

Scenario: User can expand an event to see its details
	Given The main page is open
	When the user wants to view event details
	Then the user will have to expand the element to view details

Scenario: User can collapse an event to hide its details
	Given The main page is open
  And the event details are expanded
	When the user clicks the hide button
	Then the user will have to collapse the element to close details
