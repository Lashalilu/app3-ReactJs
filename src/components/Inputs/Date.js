import React from "react";

export default function ({
                             label,
                             name,
                             type = "text",
                             classes = "",
                             parrentClass = "",
                             register = "",
                         }) {
    return (
        <>
            <div className={parrentClass}>
                <input className={classes} type={type} placeholder={label} {...register(name)} name={name}/>
            </div>
        </>
    );
}