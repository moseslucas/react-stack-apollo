import React from 'react'
import {
  Button,
  Input,
  Table,
  Typography,
  Col,
  Row
} from 'antd';
import './index.css'

const Form = ({
  handleAdd,
  handleRemove,
  data
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

  /* render form */
  return (
    <Row className='outer-row'>
      <Row className='inner-row'>
        <Col lg={{ span: 8, offset: 8 }} md={{ span: 12 }}>
        <Typography.Title level={2} style={{ textAlign: 'center' }}>
          REACT STACK / APOLLO
        </Typography.Title>
          <Input.Search
            enterButton='Add'
            size='large'
            placeholder='Input New Game Title'
            onSearch={ text => handleAdd(text) }
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
