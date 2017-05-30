import React from "react";

const Box = (props) => {
    return <div className="container-fluid">
                <div className="jumbotron">
                    <h2 className="text-primary text-center">Todos on React</h2>   
                        {props.children}                    
                </div>
            </div>;
};

export default Box;