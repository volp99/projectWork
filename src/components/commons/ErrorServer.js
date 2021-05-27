import { Result, Button } from 'antd';
import {withRouter} from "react-router-dom"
import 'antd/dist/antd.css'

const ErrorStyle={
    borderRadius: "5px", backgroundColor:"#F4A261", border:"none", color:"black", height:"40px"
}
function ErrorServer (props){
    const changePage = slug => {
        props.history.push(slug)
    }
    return(
        <div>
            <Result
                status="500"
                title="500"
                subTitle="Mi dispiace, qualcosa è andato storto."
                extra={<Button type="primary" onClick={() => changePage('/')} style={ErrorStyle}>Torna alla Home</Button>}>
            </Result>
        </div>
    )
}
export default withRouter(ErrorServer);