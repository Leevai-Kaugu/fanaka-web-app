import React from 'react';

export default function userId({params} : {params : {name : string}}) {
    const {name} = params;

    return <div>my name is user {name}</div>
}