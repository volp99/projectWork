import { Result, Button } from 'antd';
import {withRouter} from "react-router-dom"
import 'antd/dist/antd.css'

function NotFoundEng (props){
    const changePage = slug => {
        props.history.push(slug)
    }
    return(
        <div>
        <Result
            status="404"
            title="404"
            subTitle="sorry,something went wrong."
            extra={<Button type="primary" onClick={() => changePage('/Home-eng')} style={{ borderRadius: "5px", backgroundColor:"#F4A261", border:"none", color:"black", height:"40px"}}>Back to home</Button>}>
        </Result>
        </div>
    )
}
export default withRouter(NotFoundEng);