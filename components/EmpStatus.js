import logo from './logo.svg';
import {Bar} from "react-chartjs-2";
import {Chart,LinearScale,CategoryScale,BarElement,Legend,Title,Tooltip} from 'chart.js'

Chart.register(
  LinearScale,CategoryScale,BarElement,Legend,Title,Tooltip
)

const labels =['2016','2017','2018','2019','2020','2021','2022','2023'];

const options={
  plugins:{
    legend:{
      position:"top"
    },
    title:{
      display:true,
      text:"Employee Status"
    }
  }
}
const data={
  labels,
  datasets:[
    {
      label:'probation',
      data:[50,70,40,30,90,75,87,95],
      backgroundColor:'blue'
    },
    {
      label:'confirmation',
      data:[87,56,58,77,69,87,70,90],
      backgroundColor:'pink'
    },
  ]
}
function App() {
  const containerStyle={
    width:'50%',
    height:'300px',
    margin:'auto'
  };
  return (
    <div style={containerStyle}> 
    <Bar options={options} data={data}/>
  </div>
);
}

export default App;
