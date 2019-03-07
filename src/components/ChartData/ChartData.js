import React,{useState,useEffect} from 'react'
import {Line,Pie} from 'react-chartjs-2'
import {Icon, Spin} from 'antd'
import './ChartData.css'
const ChartData = (props) => {
    //Subscribe to window width size
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight)
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight)
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    //Responsive chart width and height
    let chartWidth;
    let chartHeight;

    if(width < 640){
        chartWidth = width * 0.9
        chartHeight = height * 0.5
    } else {
        chartWidth = 700
        chartHeight = 500
    }

    const {data} = props
    //
    let summaryLabels = ['total_conversation_count','total_user_message_count','total_visitor_message_count'];
    let summary_dataset = [0,0,0]
    //
    let byDateLabels = [];
    let conversation_count_dataset;
    let missed_chat_count_dataset;
    let visitors_with_conversation_count_dataset;
    if(data){
        summary_dataset = [data.total_conversation_count,data.total_user_message_count,data.total_visitor_message_count]
        //
        const byDateData = data.by_date
        byDateLabels = byDateData.map(ele => ele.date).sort()
        conversation_count_dataset = byDateData.map(ele => ele.conversation_count)
        missed_chat_count_dataset = byDateData.map(ele => ele.missed_chat_count)
        visitors_with_conversation_count_dataset = byDateData.map(ele => ele.visitors_with_conversation_count)
    }

    const summaryDataDisplay = {
        labels: summaryLabels,
        datasets: [{
            data: summary_dataset,
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ]
        }]
    };

    const byDateDataDisplay = {
        labels: byDateLabels,
        datasets: [
            {
                label: 'conversation_count',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'blue',
                borderColor: 'blue',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'blue',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'blue',
                pointHoverBorderColor: 'blue',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: conversation_count_dataset
            },
            {
                label: 'missed_chat_count',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'red',
                borderColor: 'red',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'red',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'red',
                pointHoverBorderColor: 'rred',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: missed_chat_count_dataset
            },
            {
                label: 'visitors_with_conversation_count',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'green',
                borderColor: 'green',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'green',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'green',
                pointHoverBorderColor: 'green',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: visitors_with_conversation_count_dataset
            }
        ]
    };

    const byDateOptions = {
        responsive: false,
        maintainAspectRatio: false,
        tooltips: {
            mode: 'label'
        }, 
    };

    const summaryOptions = {
        responsive: false,
        maintainAspectRatio: false,
    }
    return (
        <div className={data ? "chartData___container-data" : "chartData___container-no-data"}>
            <div className="section__header">Graphical Data</div>
            {data ? 
            <>  
                <div className="chartData__chart-container">
                    <div className="chartData__chart-header">Summary Information Chart</div>
                    <Pie data={summaryDataDisplay} width={chartWidth} height = {chartHeight} options={summaryOptions}/>       
                </div>
                <div className="chartData__chart-container">
                    <div className="chartData__chart-header">By Date Information Chart</div>
                    <Line data={byDateDataDisplay} width={chartWidth} height = {chartHeight} options={byDateOptions}/>
                </div>
            </> :
            <div className="chartData__description">Click FETCH for data.</div>
            }
        </div>
    )
}

export default React.memo(ChartData)