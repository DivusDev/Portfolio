
import React from "react"

import { CSVLink } from "react-csv";

import { toSnakeCase } from "./HelperFunctions";


    /*

        fileHeaders Example: ['name', 'date']
        fileData Example: [ {name:'foo' , date: 'bar'}]

    */


/**
 * Takes a filename, Array of File Headers in the order to be presented, 
 * and an array of row objects where keys are file headers and values are the row values.
 * Returns a JSX button that downloads the generated CSV file to the users computer. 
 * 
 * @param {String} fileName 
 * @param {Array} fileHeaders 
 * @param {Array} fileData 
 * @param {String} className 
 * @returns 
 */
export const DownloadCSVButton = (fileName = '', fileHeaders = [], fileData = [], className = '') => {

   
    
    //check for disallowed 
    let disabled = false

    if (!fileName.length) disabled = true
    if (!fileHeaders.length) disabled = true
    if (!fileData.length || typeof(fileData[0]) != 'object') disabled = true

    return (
        <div className={`csv-button-container ${className}`}>
             <CSVLink 
                style={{color: 'white'}}
                disabled={disabled}
                data={fileData} 
                headers={fileHeaders} 
                className={`csv-button ${disabled && 'disabled'}`}
                filename={`${ toSnakeCase( fileName )}_${( new Date ).getMonth()}-${( new Date ).getFullYear()}.csv`}
                >
                    {`Download ${fileName} CSV`}
             </CSVLink>
        </div>

    )
}
