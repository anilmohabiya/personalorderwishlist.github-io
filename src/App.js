import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import {Switch,Route, Redirect} from 'react-router-dom';
import Cpage from './Cpage';
const App =()=>{

return(
<>

<Switch>
<Route exact path="/" component={Cpage} />

<Redirect to ="/" />
</Switch>


</>


  );
};
export default App;
