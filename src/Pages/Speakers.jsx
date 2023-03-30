import { useState } from 'react';

import PersonCard from '../components/Person-card';
import Button from "../components/Button";
import './Pages.scss';

function Speakers() {
  const [sliceObj, setSliceObj] = useState(6);

  return (
    <>
      <header>
        <div className="page-header gradient-filter" style={{backgroundImage: "url(/img/header-speakers.jpg)"}}>
          <div className="container">
            <h1>speakers</h1>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <PersonCard sliceObj={sliceObj}/>
          {sliceObj === 6 && 
            <div className="mt50" onClick={() => setSliceObj(sliceObj + 3)}>
              <Button title="View all speakers"/>
            </div>
          }
          {sliceObj === 9 && 
            <div className="mt50" onClick={() => setSliceObj(sliceObj - 3)}>
              <Button title="Hide all speakers"/>
            </div>
          }
        </div>
      </main>
    </>
  )
}

export default Speakers
