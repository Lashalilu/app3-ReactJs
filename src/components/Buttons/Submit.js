import React from "react";

export default function ({onClick, title, parentClasses, classes}) {
    return <button type="submit"
                   onClick={onClick}
                   className={parentClasses}>{title}</button>
}
