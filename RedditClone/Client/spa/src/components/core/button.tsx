import React from 'react';
import "../../styles/core/button.css"

export default function Button(props: { children: React.ReactNode }) {
    return (
        <button className="btn">
            {props.children}
        </button>
    );
}
