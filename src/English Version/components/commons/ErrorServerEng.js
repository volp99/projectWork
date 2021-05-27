import { Result, Button } from 'antd';
import {withRouter} from "react-router-dom"
import 'antd/dist/antd.css'

const ErrorStyle={
    borderRadius: "5px", backgroundColor:"#F4A261", border:"none", color:"black", height:"40px"
}
function ErrorServerEng (props){
    const changePage = slug => {
        props.history.push(slug)
    }
    return(
        <div>
            <Result
                status="500"
                title="500"
                subTitle="sorry, something went wrong."
                extra={<Button type="primary" onClick={() => changePage('/Home-eng')} style={ErrorStyle}>Back to Home</Button>}>
            </Result>
        </div>
    )
}
export default withRouter(ErrorServerEng);