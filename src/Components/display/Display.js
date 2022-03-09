const Display = ({domainInfo}) => {

    
    domainInfo && console.log(domainInfo.data)
    return ( 
        <>
           {domainInfo ? <table>
                            <tr>
                                <th>Record</th>
                                <th>Value</th>
                                
                            </tr>
                            {domainInfo.data.map(item => {
                              return   <tr>
                                    <td className='keyList'>{item.key}</td>
                                    <td>{item.value}</td>
                                </tr>
                            })}
                            
                        </table> : null}
        </>
     );
}
 
export default Display;