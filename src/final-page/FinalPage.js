import React from 'react'
import DropDownMenuItems from './DropDownMenuItems'
import SuggestionImages from './SuggestionImages'
import './FinalPage.css'


function FinalPage(){
    return(
        <div>
            <div>
                <DropDownMenuItems />
            </div>
            <div className="grid-container">
                <div className="grid-item-1">
                    <SuggestionImages />
                </div>
            </div>
        </div>
    )
}

export default FinalPage