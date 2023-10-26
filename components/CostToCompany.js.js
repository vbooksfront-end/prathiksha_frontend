import logo from './logo.svg';
import {Bar} from "react-chartjs-2";
import {Chart,LinearScale,CategoryScale,BarElement,Legend,Title,Tooltip} from 'chart.js'

Chart.register(
  LinearScale,CategoryScale,BarElement,Legend,Title,Tooltip
)

const labels =['0-5lakhs','5-10lakhs','10-15lakhs','15-20lakhs','20-25lakhs','25-30lakhs'];

const options={
  plugins:{
    legend:{
      position:"top"
    },
    title:{
      display:true,
      text:"Cost To Company"
    }
  }
}
const data={
  labels,
  datasets:[
    {
      label:'Number of Counts',
      data:[30,70,40,60,90,75,47,15],
      backgroundColor:'blue'
    },
  ]
}

function App() {
  const containerStyle={
    display: 'flex',
    flexDirection: 'center',
    width:'50%',
    height:'300px',
    justifyContent:'center',
    alignItems:'center',
    margin:'auto'
  };

  return (

    <div style={containerStyle}> 
    <Bar options={options} data={data}/>
    </div>
  );
}


export default App;
