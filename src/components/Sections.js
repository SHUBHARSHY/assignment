import React from "react"
export default function Section ({filterItem, menulist})

{
    console.log(menulist)
    return(
        <>
        <nav className="navbar">
    <div className="btn-group">
        {
            menulist.map((curElem)=>{
                return(

                    <button className="btn-group__item" onClick={()=> filterItem(curElem)}>{curElem}</button>
                )
            })
        }
    </div>
   </nav>
        </>
    )
}