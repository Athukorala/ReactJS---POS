import React from 'react';
import { BarLoader } from 'react-spinners';

import classes from './Backdrop.css';

const backdropLoading = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}>
        <div className='DotLoader' style={{width:'100%'}}>
            <BarLoader
                color={'pink'}
                loading={true}
                width={2350}
            />
        </div>

    </div> : null
);



export default backdropLoading;