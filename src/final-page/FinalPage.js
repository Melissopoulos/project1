import React from 'react'
import DropDownMenuItems from './DropDownMenuItems'
import SuggestionImages from './SuggestionImages'
import Avatar from './Avatar'
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
                <div className="grid-item-2">
                    <Avatar />
                </div>
            </div>
        </div>
    )
}

export default FinalPage