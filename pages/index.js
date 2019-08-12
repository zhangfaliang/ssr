import React from "react";
import Link from "next/link";
import styled from "styled-components";
import styles from "./index.less";
import getConfig from "next/config";
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const Title = styled.h1`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary};
`;

import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button
} from "antd";
// import { Button } from 'antd-mobile'

const FormItem = Form.Item;
const Option = Select.Option;

export default () => (
  <div className={styles.index} style={{ marginTop: 100 }}>
    <div>
      <p>Environment variable process.env.TEST is "{process.env.TEST}"</p>
      <p>
        Custom environment variables process.env.BACKEND_URL is "
        {process.env.BACKEND_URL}"
      </p>
    </div>
    <Title>
      <ul>
        <li>
          {process.env.customKey}
          <Link href="/a" as="/a">
            <a>a</a>
          </Link>
        </li>
        <li>
          <Link href="/b" as="/b">
            <a>b</a>
          </Link>
        </li>
        <li>
          <Link href="/about" as="/about">
            <a>about</a>
          </Link>
        </li>
        <li>
          <Link href="/helloUA" as="/helloUA">
            <a>helloUA</a>
          </Link>
        </li>
        <li>
          <Link href="/dynamic" as="/dynamic">
            <a>dynamic</a>
          </Link>
        </li>
      </ul>
    </Title>
    <Form layout="horizontal">
      <FormItem
        label="Input Number"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <InputNumber
          size="large"
          min={1}
          max={10}
          style={{ width: 100 }}
          defaultValue={3}
          name="inputNumber"
        />
        <a href="#">Link</a>
      </FormItem>

      <FormItem label="Switch" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
        <Switch defaultChecked name="switch" />
      </FormItem>

      <FormItem label="Slider" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
        <Slider defaultValue={70} />
      </FormItem>

      <FormItem label="Select" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
        <Select
          size="large"
          defaultValue="lucy"
          style={{ width: 192 }}
          name="select"
        >
          <Option value="jack">jack</Option>
          <Option value="lucy">lucy</Option>
          <Option value="disabled" disabled>
            disabled
          </Option>
          <Option value="yiminghe">yiminghe</Option>
        </Select>
      </FormItem>

      <FormItem
        label="DatePicker"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <DatePicker name="startDate" />
      </FormItem>
      <FormItem style={{ marginTop: 48 }} wrapperCol={{ span: 8, offset: 8 }}>
        <Button size="large" type="primary" htmlType="submit">
          OK
        </Button>
        <Button size="large" style={{ marginLeft: 8 }}>
          Cancel
        </Button>
      </FormItem>
    </Form>
  </div>
);
