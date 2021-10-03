import { ArrowRightOutlined} from '@ant-design/icons';
import { Card, Space } from 'antd';

import React from 'react';
import './primary-card.css';

function PrimaryCard(props){
    
const { Meta } = Card;
return(
    <Card
    className="primary-card"
    // style={{ width: 300 }}
    cover={
      <img
        src={props.image}
      />
    }
    actions={[
      <Space>View<ArrowRightOutlined /></Space>,
    //   <EditOutlined key="edit" />,
    //   <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
    //   avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title={props.title}
    />
  </Card>
)
}
export default PrimaryCard;