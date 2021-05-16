import { Result, Button } from 'antd';
import {withRouter} from "react-router-dom"
import 'antd/dist/antd.css'

function NotFound (props){
    const changePage = slug => {
        props.history.push(slug)
    }
    return(
        <div>
        <Result
            status="404"
            title="404"
            subTitle="Mi dispiace, la pagina che hai visitato non esiste."
            extra={<Button type="primary" onClick={() => changePage('/')} style={{ borderRadius: "5px", backgroundColor:"#F4A261", border:"none", color:"black", height:"40px"}}>Torna alla Home</Button>}>
        </Result>
        </div>
    )
}
export default withRouter(NotFound);