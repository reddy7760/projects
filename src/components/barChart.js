import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class BarChart extends React.Component {

    data(){
        console.log(this.props.data())
        let tickets = this.props.data();
        
        let openTickets = tickets.filter(ticket =>{
            return ticket.status == 'open'
        })
        let completedTickets = tickets.filter(ticket =>{
            return ticket.status == 'completed'
        })
        let openSales =0,openHr = 0,openTechnical=0;
        openTickets.forEach(ticket =>{
            if (ticket.department == 'sales'){
                openSales++;
            } else if(ticket.department == 'hr'){
                openHr++;
            }else {
                openTechnical++;
            }
        })
        let completedSales =0,completedHr = 0,completedTechnical=0;
        completedTickets.forEach(ticket =>{
            if (ticket.department == 'sales'){
                completedSales++;
            } else if(ticket.department == 'hr'){
                completedHr++;
            }else {
                completedTechnical++;
            }
        })
        let open=[openSales,openHr,openTechnical], completed = [completedSales,completedHr,completedTechnical]
        console.log(open,completed);
        return [open,completed];
    }
 
    render() {
        let chartData = this.data()

        

        let dataBar = {
            labels: ["sales", "hr", "technical"],
            datasets: [
                {
                    label: "open",
                    data: chartData[0],
                    backgroundColor: "rgba(245, 74, 85, 0.5)",
                    borderWidth: 1
                },
                {
                    label: "completed",
                    data: chartData[1],
                    backgroundColor: "rgba(90, 173, 246, 0.5)",
                    borderWidth: 1
                }
            
            ]
        }
        let barChartOptions =  {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [
                    {
                        barPercentage: 1,
                        gridLines: {
                        display: true,
                        color: "rgba(0, 0, 0, 0.1)"
                        }
                    }
                ],
                yAxes: [
                    {
                    gridLines: {
                        display: true,
                        color: "rgba(0, 0, 0, 0.1)"
                    },
                    ticks: {
                        beginAtZero: true
                    }
                    }
                ]
            }
        }
        return (
        <MDBContainer>
            <h3 className="mt-5">Tickets By Department: </h3>
            <Bar data={dataBar} options={barChartOptions} />
        </MDBContainer>
        );
    }
}

export default BarChart;