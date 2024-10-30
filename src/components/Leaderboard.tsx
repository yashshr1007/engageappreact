import { Card, Divider, List } from "antd"

const cardStyle: React.CSSProperties = {
  textAlign: 'center',
  backgroundColor: '#62cef3',
  padding: 20,
}

const data = [ 
  'Harish',
  'Arvind',
  'Aman',
  'Yash',
  'Kandpal',
]

const data2 = [ 
  'Yash',
  'Arvind',
  'Aman',
  'Harish',
  'Vivek',
]

const data3 = [ 
  'Sent an appreciation to Vivek',
  'Received appreciation from Harish',
  'Redeemed 4300 points',
]

const Leaderboard = () => {

  return (<Card style={cardStyle}>
    <List
      header='Recent events for you'
      bordered
      dataSource={data3}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
    <Divider />
    <List
      header='Top Appreciators'
      bordered
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
    <Divider />
    <List
      header='Top Receivers'
      bordered
      dataSource={data2}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
    </Card>)
}

export default Leaderboard