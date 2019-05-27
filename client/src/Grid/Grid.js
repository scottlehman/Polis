import React from "react";

// export react components for bootstrap vals of Container, Col, and Rows


//export bootstrap container for easy access in other components
export function Container({ fluid, children }) {
    return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

//export Row component for easy access in other components
export function Row ({ fluid, children }) {
    return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

//export Col component for easy access in other components
export function Col ({ size, children }) {
    return (
        <div
            className={size
            .split(" ")
            .map(size => "col-" + size)
            .join(" ")}
        >
            {children}
        </div>
    );
}

