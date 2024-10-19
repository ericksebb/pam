import './App.css';
import Card from 'antd/es/card/Card';
import Meta from 'antd/es/card/Meta';

function App() {
  return (
    <>
      <a href="https://ant.design/" target="_blank" rel="noopener noreferrer">
        <Card hoverable style={{ width: 600 }} cover={<img alt="swain old god" src="https://cdnb.artstation.com/p/assets/images/images/051/670/095/large/hua-hui-a-1.jpg?1657869564" />}>
          <Meta title="Infernus vacuum est, et omnes daemones adsunt" description="Swain, vir qui vendidit animam suam" />
        </Card>
      </a>
    </>
  )
}


export default App
