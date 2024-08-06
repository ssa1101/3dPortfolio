import  ReactDOM  from "react-dom/client";
import App from  './App';
import "./index.css";
//id of element root connects to render app, react hooks into single div on html to populate content
ReactDOM.createRoot(document.getElementById('root')).render(<App />);