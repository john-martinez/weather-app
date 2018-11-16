import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const Chart = ({data, color, unit}) => {
    return (
        <div>
            <Sparklines height={120} data={data}>
                <SparklinesLine color={color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>Avg: {Math.ceil(data.reduce((a,b) =>a + b , 0)/data.length)} {unit} </div>
        </div>
        
    );
}

export default Chart;
