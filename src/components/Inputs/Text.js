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
                <input className={classes} {...register(name)} type={type} placeholder={label} name={name}/>
            </div>
        </>
    );
}