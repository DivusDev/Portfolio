
# Documentation

###### By Tristan Schwichow

## Overview

### Portfolio Front End

#### Server 
Written in Node.js 
###### React Apps
The server renders different react apps based on the first query parameter, routing to the portfolio app. 

Portfolio app can be found in the client folder.

Other applications rendered are only stored locally and not checked in. They will have to be built and placed inside ***server/builds/****

When building and importing new applications pay special attention to the naming conventions in server folder

###### API

API routes are designated with the query parameter ***/api/****


----
## New Pages
Add a new router in appRouter

----

## SCSS / CSS

#### Constants
The constants folder includes all constants such as mixins, breakpoints, colors. 
Add all material ui override classes to override.scss
shapes.scss are for shapes sourced from **https://www.shapedivider.app/**

----

## Font Awesome - Icons   
To add new icons first add them to index.js under icons section
Then add them to library.add()
Next go to your preffered page and import
> import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 

To find new icons head over to **https://fontawesome.com/icons**
To style check out **https://fontawesome.com/v6/docs/web/use-with/react/style**





