import React from "react";

function /*LoaderF(props)*/LoaderF({lColor="green"}) {
    return(
            <div className="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                <div className="w-16 h-16 rounded-full border-8 animate-spin" style={{borderTopColor:lColor}}></div>  
            </div>
    )
}

export default LoaderF;