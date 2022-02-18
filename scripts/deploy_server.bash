#!/bin/bash


# GLOBAL VARIABLES

# Text colors for output
RED_TEXT='\033[0;31m'
YELLOW_TEXT='\033[1;33m'
CYAN_TEXT='\033[1;36m'
GREEN_TEXT='\033[1;32m'
NORMAL_TEXT='\033[0m' # No Color


passwordAbsolutePath='/home/tschw/projects/password-generator'


# ERROR CHECKING

# make sure in current directory
current_dir="${PWD##*/}";
if [ $current_dir != 'scripts' ]; then
    echo -e "${RED_TEXT}\n!!!!!!!!!!!! YOU ARE NOT IN THE RIGHT DIRECTORY !!!!!!!!!!!!${NORMAL_TEXT}"
    echo $' -- This script will fail if it is NOT run in its containing directory -- \n'
    echo 'Please run this script in its containing directory'
    exit 1;
fi


# Query user 

echo 'Do you need to update the portfolio repo? (Y/y) '
read portfolioUpdate


echo 'Do you need to update the password repo? (Y/y) '
read passwordUpdate

echo 'Do you need to install npm packages? (Y/y) '
read npmPackageUpdate





echo -e "\n${CYAN_TEXT}**************************************"
echo -e "********* DEPLOYING Portfolio **********"
echo -e "**************************************${NORMAL_TEXT}\n"


echo -e $"\n${CYAN_TEXT} -----------------------------"
echo ' -- Updating Local Git Repo --'
echo -e " -----------------------------${NORMAL_TEXT}"
git pull;

if [[ "$portfolioUpdate" == y || "$portfolioUpdate" == Y  ]]; then
    cd ../client;
    echo -e $"\n${CYAN_TEXT} -------------------------"
    echo ' -- Building Portfolio App --'
    echo -e " -------------------------${NORMAL_TEXT}"
    npm run build;
    rm -rf ../server/builds/portfolio;
    mv build ../server/builds/portfolio;
    cd ../scripts;
fi



if [[ "$passwordUpdate" == y || "$passwordUpdate" == Y  ]]; then
    echo -e $"\n${CYAN_TEXT} ----------------------------"
    echo ' -- Building Password App --'
    echo -e " -------------------------${NORMAL_TEXT}"
    npm --prefix $passwordAbsolutePath run build;
    rm -rf ../server/builds/password;
    mv $passwordAbsolutePath'/build' ../server/builds/password;
fi


if [[ "$npmPackageUpdate" == y || "$npmPackageUpdate" == Y ]]; then
    echo -e $"\n${CYAN_TEXT} --------------------------------"
    echo ' -- Retrieving Server Packages --'
    echo -e " --------------------------------${NORMAL_TEXT}"
    cd ../server;
    npm i;
    cd ../scripts;
fi



echo -e $"\n${CYAN_TEXT} ---------------------"
echo ' -- Starting Server --'
echo -e " ---------------------${NORMAL_TEXT}"
sudo kill -9 $(lsof -t -i:80);
cd ../server;
npm run prod-start;
