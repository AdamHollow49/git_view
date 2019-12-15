import React from 'react';
import { Card } from './Card.js'

export const CardList = (props) => (
    <div className="outbox container">
        {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
    </div>
);