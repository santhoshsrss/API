import Create from './Create.jsx';
import Read from './Read.jsx';
import Update from './Update.jsx';
import { Routes, Route, useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import Home from "./Home.jsx";

const App = () => {
 const navigate = useNavigate();
  return (
    
      <div className="App">
        <Button 
            onClick={() => navigate("/create")} color="inherit">
          Create
        </Button>
        <Button 
            onClick={() => navigate("/read")} color="inherit">
              Read
        </Button>
        <Button 
            onClick={() => navigate("/update")} color="inherit">
          Update
        </Button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path = "/create" element = {<Create/>}/>
          <Route path = "/read" element = {<Read/>}/>
          <Route path = "/update" element = {<Update/>}/>
        </Routes>
      </div>
    
  );
};

export default App;
