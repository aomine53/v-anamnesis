import React from 'react'



export const View = ({data}) => {
    
    return data.map(dataItem=>(
        
        <tr key={data}>
            <td>{dataItem.medication}</td>
            <td>{dataItem.time}</td>
            <td>{dataItem.dosage}</td>
            <td>{dataItem.instructions}</td>
        </tr>            
    
))
}