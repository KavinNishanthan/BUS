import React from 'react'
import { Cookies } from 'react-cookie';

const Dashboard = ({ busDetails, totalFee }) => {
    const cookies = new Cookies();
    console.log('da ', busDetails, totalFee, cookies.get('aswin'))
    return (
        <div><p>

            Dashboard

        </p>
        </div>
    )
}

export default Dashboard