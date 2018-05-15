# README

Item Management System (IMS) to manage items sold at Blue
Bottle Coffee cafés.

Description:

* Rails API back-end
* React front end

The system allows you to update the price of an individual item, 
and globally change all items in a specific category. In addition,
there is an option to reload all the pricing information from the original files.

Background:

In approaching this design I considered two architectures:
1. Load a database from the external source files and modify the pricing in that database
2. External files are source of truth. Database contains a set of changes or patches to be 
applied for price changing.

I went with the first choice as it seemed the most straight forward.

Production Readiness

* App is deployed to Heruko, with a postgreSql database running a Puma server. The front and and back end are deployed from a single location.

What's Left TODO
* Testing React. While the rails server has a good set of spec tests, there are currently no tests
in place for the react side. I setup mocha, chai and jsdom, but did not have time to write any user tests
* Better design. I may be able to create a react app but don't expect me to style it. Not my strong suit.
* Menu table sorting.  I used a simple table to display a menu by country. I did not implement any sorting by columns.
