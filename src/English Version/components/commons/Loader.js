import React from "react";
import Loader from "react-loader-spinner";
 class Loading extends React.Component {
    render() {
        return (
            <div className=" loader flex-center">
            <Loader
                type="Oval"
                color="#2C2C3C"
                height={100}
                width={100}
                timeout={3000} //3 secs
            />
            </div>
        );
    }
}
export default Loading;