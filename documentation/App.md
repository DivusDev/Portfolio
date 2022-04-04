
# Documentation

###### By Tristan Schwichow

## Overview

### Portfolio Front End

#### Server 
Written in Node.js 

###### To Deploy the Server

ssh into the remote machine
start tmux by typing **tmux** into the shell
run the script deploy_server.bash
follow the prompts
leave/detach the tmux session by typing **Ctrl+b and then d**

To check back in on the process:
log back in 
Run the command **tmux attach**

If you want to have multiple sessions running side-by-side, you should name each session using Ctrl+b and $. You can get a list of the currently running sessions using tmux list-sessions or simply tmux ls, now attach to a running session with command tmux attach-session -t <session-name>

The client must have a proxy field in the package.json wiith the server ip or it will not run properly

###### Nginx

The server uses NGINX as a reverse proxy.
The config files are located at **/etc/nginx/sites-available**

To restart NGINX use **sudo systemctl restart nginx**

I am using cert bot for certification

Resources: 
https://blog.logrocket.com/how-to-run-a-node-js-server-with-nginx/
###### React Apps
The server renders different react apps based on the first query parameter, routing to the portfolio app. 

Portfolio app can be found in the client folder.

Other applications rendered are only stored locally and not checked in. They will have to be built and placed inside ***server/builds/****

When building and importing new applications pay special attention to the naming conventions in server folder

All react apps must have proxy fields with the server ip and homepage fields with their links to their served pages in the package.json


>"proxy": "http://localhost:3000/password",
>"homepage": "/password"

###### HTML Apps

Make sure to include the files with app.use in app.js
also give them a specific route following the examples like playfair-cypher and nbody

****
###### Server design flow

NGINX port 80 routes traffic to port 3000
Server runs on port 3000
Server serves react apps on specific domains



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





