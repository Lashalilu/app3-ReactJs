import React from "react";

export default function ({
                             label,
                             name,
                             classes = "",
                             parrentClass = "",
                             register = "",
                             data = [],
                         }) {
    return (
        <>
            <div className={parrentClass}>
                <select className={classes} placeholder={label} {...register(name)} name={name}>
                    <option>{label}</option>
                    {data.map((item) => (
                        <option key={item.id} value={item.id}>
                            {item.name}
                        </option>
                    ))}

                </select>
            </div>
        </>
    );
}