Project overview
-------------------

In this project we were given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where we come in.


Jasmine Documentation
-------------------

http://jasmine.github.io/
http://jasmine.github.io/2.1/introduction.html


Summary of test coverage
--------------------------

- Test 1 validates that the allFeeds variable has been defined and not empty
- Test 2 validates that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
-Test 3 loops through each feed in the allFeeds object and validates that it has a name defined, that the name is actually a string of text and not an object and that the name is not empty.
-Test 4 validates that the menu element is hidden by default.
This test looks for the class "menu-hidden" on the 'body' element.
-Test 5 validates that the menu shows/hides when the icon is clicked.
Assumption is that the menu is hidden by default.
Test 6 validates that there is at least one '.entry' element in the '.feed' container when the asynchronous loadFeed function is called and completed.
-Test 7 validates that the content changes  when a new feed is loaded by the loadFeed function.


Steps required to run the application
---------------------------------------

The test specs are all written in the feedreader.js file which is located in the jasmine/spec/ folder.

The test results can be viewed by opening the index.html file on a browser.

Jasmine will append to the end of the page a report of how each of the tests performed.
If one or more of the tests fail the overall color of the page will be red.

Any tests that passed are green in color and those that failed are red in color including error tracing information.

