import { useState } from "react"

const SideBar  = ({
    children,
    className,
    
    
    })=>
    {
  const [ isOpen ,setIsOpen ] =useState(false)  
        const SideBarhandler = ()=>{}
   
     return (
        <aside
          style={{width : isOpen? "100px":"50"}}
            className={className}

        >
        {children}

        </aside>
            
            
            
)
}

export default SideBar