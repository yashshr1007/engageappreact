import { ArrowDownOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

const layoutStyle: React.CSSProperties = {
  textAlign: 'center',
  backgroundColor: '#f0803b',
  padding: 20,
}

const imageStyle: React.CSSProperties = {
  height: '400px'
}

interface EmployeeCommentProps {
  employee:{ipath:string, description:string, title:string};
}

const EmployeeComment: React.FC<EmployeeCommentProps> = ({employee}) => {
  return (
  <Card style={layoutStyle}
    title= {employee.title}
    cover={
      <img
        alt="example"
        style={imageStyle}
        src={employee.ipath}
      />
    }
    actions={[
      <ArrowDownOutlined key="Details" name='Details'/>,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title={employee.title}
      description={employee.description}
    />
  </Card>
)
}
export default EmployeeComment;