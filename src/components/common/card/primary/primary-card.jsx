import { ArrowRightOutlined } from "@ant-design/icons";
import { Card, Space } from "antd";
import { useHistory } from "react-router";
import React from "react";
import "./primary-card.css";
import { useDispatch } from "react-redux";
function PrimaryCard(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { Meta } = Card;
  return (
    <Card
      className="primary-card"
      // style={{ width: 300 }}
      cover={<img src={props.image} />}
      actions={[
        <Space
          onClick={() => {
            dispatch({
              type: "SET_STATE",
              payload: {
                id: props.id,
                title: props.title,
              },
            });
            history.replace(props.path);
          }}
        >
          View
          <ArrowRightOutlined />
        </Space>,
        //   <EditOutlined key="edit" />,
        //   <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        //   avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        title={props.title}
      />
    </Card>
  );
}
export default PrimaryCard;
