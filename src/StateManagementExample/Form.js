import React from 'react'
import {
  Button,
  Input,
  Table,
  Typography,
  Col,
  Row,
  Switch,
} from 'antd';
import './index.css'

const Form = ({
  handleAdd,
  handleRemove,
  data,
  handleNightMode,
  nightmode
}) => {

  /* columns */
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Remove',
      key: 'remove',
      render: (text, record) => (
        <Button
          type='link'
          onClick={() => handleRemove(record)}
        >
          Remove
        </Button>
      )
    }
  ]

  const bg = nightmode ? '#1e1e1e' : '#fff'
  const fontColor = nightmode ? '#fff' : '#000'

  /* render form */
  return (
    <Row
      className='outer-row'
    >
      <Row className='inner-row' style={{ background: bg }}>
        <Col lg={{ span: 8, offset: 8 }} md={{ span: 12 }}>
          <Typography.Title
            level={2}
            className='title'
            style={{ color: fontColor }}
          >
            REACT STACK / APOLLO
          </Typography.Title>
          <div className='nightmode'>
            <label style={{ color: fontColor }}> NIGHT MODE </label>
            <Switch
              checkedChildren="ON"
              unCheckedChildren="OFF"
              onChange={handleNightMode}
            />
          </div>
          <Input.Search
            enterButton='Add'
            size='large'
            placeholder='Input New Game Title'
            onSearch={ text => handleAdd(text) }
            style={{ color: fontColor }}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 8, offset: 8 }} md={{ span: 12 }}>
          <Table
            columns={columns}
            dataSource={data}
          />
        </Col>
      </Row>
    </Row>
  )

}

export default Form
