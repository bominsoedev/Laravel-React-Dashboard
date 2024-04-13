import React from 'react';
import moment from "moment";

const AppFooter = () => {
    return (
        <div className="layout-footer">
            <span>
                Copyright {moment().year()} Bominsoe. All rights reserved.
         </span>
        </div>
    );
};

export default AppFooter;
