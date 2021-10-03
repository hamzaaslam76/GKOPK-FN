import { ArrowRightOutlined} from '@ant-design/icons';
import { Card, Space } from 'antd';

import React from 'react';
import './secondary-card.css';

function SecondaryCard(props){
    
const { Meta } = Card;
return(
    <Card
    className="secondary-card"
    // style={{ width: 300 }}
    cover={
      <img
        src={props.image}
      />
    }
    actions={[
      // <>{props.questionsCount}+ Questions</>,
    //   <EditOutlined key="edit" />,
    //   <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
    //   avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title={props.title}
      description={`${props.description}+ Questions`}
    />
  </Card>
)
}
export default SecondaryCard;