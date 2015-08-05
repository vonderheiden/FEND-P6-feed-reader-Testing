/* feedreader.js */
/* This file for  includes the test specs that will be run against the application.
All tests are placed within the $() function, since some of these tests may require DOM elements.
We want to ensure they don't run until the DOM is ready. */


$(function() {

//The first test suite covers the RSS feeds.
    describe('RSS Feeds', function() {
/* Test 1 validates that the allFeeds variable has been defined and not empty*/
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
/* Test 2 validates that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.*/
         it('URL are defined and not empty', function(){
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
         });
/* Test 3 loops through each feed in the allFeeds object and validates that it has a name defined, that the name is actually a string of text and not an object and that the name is not empty. */
        it('names are defined and not empty', function() {
                allFeeds.forEach(function(feed) {
                    expect(feed.name).toBeDefined();
                    expect(typeof feed.name).toEqual('string');
                    expect(feed.name.length).toBeGreaterThan(0);
                });
            });

        });

// The second test suite covers the menu
    describe('The menu', function() {
/* Test 4 validates that the menu element is hidden by default.
This test looks for the class "menu-hidden" on the 'body' element. */
        it('is hidden by default', function() {
            var hidden = $('body').hasClass('menu-hidden');
            expect(hidden).toBe(true);
        });

/* Test 5 validates that the menu shows/hides when the icon is clicked.
Assumption is that the menu is hidden by default.
The first test expectation is that on clicking the menu icon it should become visible.
The second test expectation is that when it is clicked again it should hide. */

        it('menu shows/hides when icon is clicked', function() {
            var menuItem = $('.menu-icon-link');
            menuItem.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menuItem.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
   });

// The third test suite covers the initial entries
   describe('Initial Entries', function() {
/*Test 6 validates that there is at least one '.entry' element in the '.feed' container when the asynchronous loadFeed function is called and completed.
The setTimeout function in the beforeEach function delays to populate the '.feed' element.
*/
        var retFeed;
        beforeEach(function(done) {
            loadFeed(0);
            setTimeout(function() {
                retFeed = $('.feed').html();
                done();
            }, 500);
        });
        it('should get called and have at least one feed.', function() {
            expect(retFeed.length).toBeGreaterThan(0);
        });

    });

//The fourth test suite covers the new feed selection
    describe('New Feed Selection', function() {
/* Test 7 validates that the content changes  when a new feed is loaded by the loadFeed function.
The setTimeout function in the beforeEach function is used to ensure that the function delays long enough for the comparison variables to be populated.
One feed is called and the result is stored in a variable.
Then a different feed is called and the result is compared with the result stored in the first variable. */
        var firstFeed,
            secondFeed;

        beforeEach(function(done) {
            loadFeed(0);
            setTimeout(function() {
                firstFeed = $('.feed').html();
                done();
            }, 500);
        });
        it('should change the feed content', function() {
            loadFeed(1);
            setTimeout(function() {
                secondFeed = $('.feed').html();
            }, 500);
            expect(firstFeed).not.toEqual(secondFeed);
        });
    });
}());