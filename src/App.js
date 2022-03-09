import {useState,useEffect} from 'react';
import Form from './Components/form/Form';
import Display from './Components/display/Display';

function App() {
 
    const [data,setData] = useState()
    const [newData,setNewData] = useState('domain.com')
    const [domainInfo,setDomainInfo] = useState()

    const getDomain = async () => {

    const response = await fetch('https://otx.alienvault.com/otxapi/indicator/domain/whois/domain.com')
    const data = await response.json()
    setData(data)
    console.log(newData)
}

    const getValue = (domain) => {

      if(data) {
        const relatedData = data.related.filter(item => item.domain === domain)     
        relatedData && setNewData(domain)
        console.log(domain)
      }
    
    }

    const getDomainInfo = async () => {

    const response = await fetch(`https://otx.alienvault.com/otxapi/indicator/domain/whois/${newData}`)
    const domain = await response.json()
      setDomainInfo(domain)
    
}

useEffect(() => {
  getDomain()
  getDomainInfo()
},[newData])

  return (
    <div>
      <h2 style={{textAlign: 'center'}}>Enter a Domain:</h2>
     <Form getValue={getValue}/>
     <Display domainInfo={domainInfo} />
    </div>
  );
}

export default App;
