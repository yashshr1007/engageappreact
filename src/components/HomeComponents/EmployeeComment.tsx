import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Layout } from 'antd';
const { Meta } = Card;
const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(80% - 8px)',
  maxWidth: 'calc(80% - 8px)',
}

interface EmployeeCommentProps {
  employee:{ipath:string, description:string, title:string};
}

const EmployeeComment: React.FC<EmployeeCommentProps> = ({employee}) => {
  return (
    <Layout style={layoutStyle}>
  <Card
    cover={
      <img
        alt="example"
        src={employee.ipath}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title={employee.title}
      description={employee.description}
    />
  </Card>
  </Layout>
)
}
export default EmployeeComment;