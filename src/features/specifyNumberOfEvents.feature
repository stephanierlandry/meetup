Feature: Specify the number of events

Scenario: When user hasn’t specified a number, 32 is the default number
	Given The app is open
	When the user sees the events
	Then the user should automatically see thirty-two events

Scenario: User can change the number of events they want to see
	Given The app is open
	When the user wants to see more or less events
	Then the user can change the number of events they will see
