import React, { useEffect, useState } from "react";
import { Avatar, Space, List, Skeleton, Typography, Pagination } from "antd";
import SimpleDropdown from "./SimpleDropdown";
import { Link } from "react-router-dom";
import "../App.css";
import TagCount from "./CounterTag";
import {
  LikeOutlined,
  CommentOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

interface DataType {
  gender?: string;
  name: {
    title?: string;
    first?: string;
    last?: string;
  };
  email?: string;
  picture: {
    large?: string;
    medium?: string;
    thumbnail?: string;
  };
  nat?: string;
  loading: boolean;
}

const todaysDate = new Date();

const list = [
  {
    gender: "female",
    title: "My thought process when setting up a micro frontend.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda suscipit, fugit harum excepturi commodi asperiores distinctio consequuntur consequatur expedita beatae quis iste, alias perferendis fuga cupiditate non culpa amet. Sapiente?",
    email: "katarina.spasojevic@example.com",
    picture: {
      large: "https://randomuser.me/api/portraits/women/53.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/53.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/53.jpg",
    },
    nat: "RS",
    date: todaysDate.toDateString(),
  },
  {
    gender: "male",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda suscipit, fugit harum excepturi commodi asperiores distinctio consequuntur consequatur expedita beatae quis iste, alias perferendis fuga cupiditate non culpa amet. Sapiente?",
    email: "okan.ozdenak@example.com",
    picture: {
      large: "https://randomuser.me/api/portraits/men/31.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/31.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/31.jpg",
    },
    nat: "TR",
    date: todaysDate.toDateString(),
  },
  {
    gender: "female",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda suscipit, fugit harum excepturi commodi asperiores distinctio consequuntur consequatur expedita beatae quis iste, alias perferendis fuga cupiditate non culpa amet. Sapiente?",
    email: "isla.jarvi@example.com",
    picture: {
      large: "https://randomuser.me/api/portraits/women/9.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/9.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/9.jpg",
    },
    nat: "FI",
    date: todaysDate.toDateString(),
  },
  {
    gender: "female",
    title: "My thought process when setting up a micro frontend.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda suscipit, fugit harum excepturi commodi asperiores distinctio consequuntur consequatur expedita beatae quis iste, alias perferendis fuga cupiditate non culpa amet. Sapiente?",
    email: "katarina.spasojevic@example.com",
    picture: {
      large: "https://randomuser.me/api/portraits/women/53.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/53.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/53.jpg",
    },
    nat: "RS",
    date: todaysDate.toDateString(),
  },
  {
    gender: "male",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda suscipit, fugit harum excepturi commodi asperiores distinctio consequuntur consequatur expedita beatae quis iste, alias perferendis fuga cupiditate non culpa amet. Sapiente?",
    email: "okan.ozdenak@example.com",
    picture: {
      large: "https://randomuser.me/api/portraits/men/31.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/31.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/31.jpg",
    },
    nat: "TR",
    date: todaysDate.toDateString(),
  },
  {
    gender: "female",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda suscipit, fugit harum excepturi commodi asperiores distinctio consequuntur consequatur expedita beatae quis iste, alias perferendis fuga cupiditate non culpa amet. Sapiente?",
    email: "isla.jarvi@example.com",
    picture: {
      large: "https://randomuser.me/api/portraits/women/9.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/9.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/9.jpg",
    },
    nat: "FI",
    date: todaysDate.toDateString(),
  },
];

const QuestionsList: React.FC = () => {
  return (
    <>
      <List
        className="demo-loadmore-list"
        loading={false}
        itemLayout="horizontal"
        loadMore={null}
        dataSource={list}
        renderItem={(item) => (
          <List.Item actions={[<SimpleDropdown />]}>
            <Skeleton avatar title={false} loading={false} active>
              <List.Item.Meta
                avatar={
                  <Avatar
                    shape="square"
                    size="large"
                    src={item.picture.large}
                  />
                }
                title={
                  <Link to="#" target="_blank" style={{ marginTop: 0 }}>
                    {item.title}
                  </Link>
                }
                description={
                  <Typography.Paragraph
                    ellipsis={{
                      rows: 1,
                    }}
                  >
                    {item.description}
                  </Typography.Paragraph>
                }
              />
              <Space size={32}>
                <Typography.Text>{item.date}</Typography.Text>
                <Space size={[0, 8]}>
                  <TagCount
                    color="#3b5999"
                    icon={<LikeOutlined />}
                    count={12}
                  />
                  <TagCount
                    icon={<CommentOutlined />}
                    color="#55acee"
                    count={23}
                  />
                  <TagCount
                    icon={<ShareAltOutlined />}
                    color="#cd201f"
                    count={15}
                  />
                </Space>
              </Space>
            </Skeleton>
          </List.Item>
        )}
      />
      <Pagination
        style={{ textAlign: "center" }}
        defaultCurrent={1}
        total={50}
      />
    </>
  );
};

export default QuestionsList;
