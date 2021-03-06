import React, { PureComponent } from 'react';
import { Row, Col, Input, Button, Form, Modal,Select } from 'antd';
import  FetchSelect from '../../../components/FetchSelect'
import RemoteTable from '../../../components/TableGrid';
import ysy from '../../../api/ysy'
import { connect } from 'dva';
const FormItem = Form.Item;
const { Search } = Input;
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
}

class AddOrEditForm extends PureComponent{
  state = {
    orgId: '',
    orgType: '',
  }
  /* static getDerivedStateFromProps(nextProps, prevState){
    console.log(nextProps,prevState)
    if(nextProps.data.orgName && nextProps.isEdit){
      return {
        orgName: nextProps.data.orgName
      }
    }else{
      return {
        orgName: null
      }
    }
  } */
  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.form.validateFields((err,values)=>{
      if(!err){
        values.orgId = this.state.orgId;
        console.log(values,'values');
        this.props.addFunc(values);
      }
    })
  }
  
  render(){
    const { isEdit, form, data, selectDatas } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label="所属机构" hasFeedback>
          <FetchSelect  defaultValue={ isEdit ? data.orgName: ''} ref='fetchs' url={ysy.ORG_LIST}
              parmas={'orgType'}
              cb={(value,orgType) => {
                this.setState({ orgId: value, orgType: orgType })
                this.props.cb(value,orgType)}}
              />
        </FormItem>
        {
          this.props.orgType === '09'
          &&
          <FormItem {...formItemLayout} label="字典分类" hasFeedback>
          {
            getFieldDecorator(`staticType`,{
              rules: [{ required: true,message: '请选择字典分类' }],
              initialValue: ''
            })(
            <Select
              onSelect={value => this.props.callback(value)}
            >
              <Option key={'-1'} value=''>请选择</Option>
              <Option key={'00'} value='00'>公用字典</Option>
              <Option key={'01'} value='01'>私有字典</Option>
            </Select>
            )
          }
          </FormItem>
        }
        <FormItem {...formItemLayout} label="上级">
          {
            getFieldDecorator('parentStaticId',{
              initialValue: isEdit ? data.parentStaticId: '' 
            })(
              <Select 
                onFocus={this.props.onFocusSelect}
                disabled={this.props.form.getFieldValue('staticType')!== ''&& data.orgId!=='' ? false: data.orgId === "" || data.orgType === '09' ? true : false}
                allowClear={true}
                showSearch
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                {
                  selectDatas.length === 0 ?
                  <Option key={0} value={data.parentStaticId}>{data.pTfComment}</Option>
                  :
                  selectDatas.map((item,index) => {
                  return <Option key={index} value={item.value}>{item.text}</Option>
                })
              }
              </Select>
            )
          }
        </FormItem>
        <FormItem {...formItemLayout} label="编码" hasFeedback>
          {
            getFieldDecorator('tfClo', {
            rules: [{ required: true, message: '请输入编码!' },
            {max:20,message:'字符长度不能超过20'}],
            initialValue: isEdit ? data.tfClo: '' 
          })(
            <Input />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="名称" hasFeedback >
          {getFieldDecorator('tfComment', {
            rules: [{ required: true, message: '请输入名称!', whitespace: true },
            {max:20,message:'字符长度不能超过20'}],
            initialValue: isEdit ? data.tfComment: ''
          })(
            <Input />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="排序" hasFeedback>
          {
            getFieldDecorator('fsort', {
            rules: [{ required: true, message: '请输入排序!' },
            {pattern: /^\d+$/,message:'只能是数字'},
            {max:20,message:'字符长度不能超过20'}],
            initialValue: isEdit ? data.fsort+'':''
          })(
            <Input />
          )}
        </FormItem>
        <FormItem wrapperCol={{ span: 22,offset: 2 }}>
          <Button type="primary" htmlType="submit" loading={this.props.dirtyClick} style={{ width: '95%' }}>保存</Button>
        </FormItem>
      </Form>
    )
  }
}

const WrapperForm = Form.create()(AddOrEditForm);

class CloneForm extends PureComponent{
  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.form.validateFields((err,values)=>{
      if(!err){
        let postData = {};
        postData.sourceOrgId = this.props.data.sourceOrgId
        postData.newOrgId = this.props.data.newOrgId;
        postData.sourceStaticId = values.sourceStaticId;
        postData.newStaticId = values.newStaticId
        console.log(postData,'postData');
        this.props.clone(postData);
      }
    })
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <Form style={{marginTop: '16px'}} onSubmit={this.handleSubmit}>
        <FormItem labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} label="待客隆的机构" hasFeedback >
          <FetchSelect  ref='fetchs' url={ysy.ORG_LIST} 
                cb={(value) => this.props.cb({ sourceOrgId: value })}/>
        </FormItem>
        <FormItem labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} label="待客隆的类型" >
          {
            getFieldDecorator('sourceStaticId',{
              rules: [{ required: true, message: '请选择!' }],
            })(
                <Select 
                  onFocus={this.props.onFocusSelectSource}
                  disabled={this.props.data.sourceOrgId === "" ? true : false}
                  allowClear={true}
                  showSearch
                  filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                {
                  this.props.data.parentData.map((item,index) => {
                    return <Option key={index} value={item.value}>{item.text}</Option>
                  })
                }
              </Select>
            )
          }
        </FormItem>
        <FormItem labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} label="需要克隆机构" hasFeedback>
          <FetchSelect   ref='fetchs' url={ysy.ORG_LIST} 
              cb={(value) => this.props.cb({ newOrgId: value  })}/>
        </FormItem>
        <FormItem labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} label="新机构的类型" >
          {
            getFieldDecorator('newStaticId')(
              <Select 
                onFocus={this.props.onFocusSelectNew}
                disabled={this.props.data.newOrgId===""? true : false}
                showSearch
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                allowClear={true}
              >
                {
                  this.props.data.newTreeData.map((item,index) => {
                    return <Option key={index} value={item.value}>{item.text}</Option>
                  })
                }
              </Select>
            )
          }
        </FormItem>
      <FormItem wrapperCol={{ span: 22,offset: 2 }}>
        <Button type="primary" htmlType="submit" style={{ width: '95%' }} >保存</Button>
      </FormItem>
    </Form>
    )
  }
}
const WrapperCloneForm = Form.create()(CloneForm);
class ClassifyMgt extends PureComponent{
  state = {
    query: {},
    title: '新建分类',
    isEdit: false,
    loading: false,
    visible: false,
    cloneVisible: false,
    dirtyClick: false,
    record: {},
    orgId: '',
    sourceOrgId: '',
    newOrgId: '',
    orgType: null,
    selectDatas: [],
    newAddOrgId: '',
    newAddOrgType: ''
  }
  edit = (record) =>{
    this.setState({ record, visible: true, isEdit: true, title: '编辑' });
  }
  onFocusSelect = () =>{
    let postData = { orgId: this.state.record.orgId ? this.state.record.orgId: this.state.orgId };
    if(this.state.orgType === '09'){
      postData.staticType = this.state.staticType
    }
    console.log(postData,'postData')
    this.props.dispatch({
      type: 'dictionary/orgStaticInfo',
      payload: postData,
      callback: (data) => this.setState({ selectDatas: data })
    })
  }
  onFocusSelectSource = () =>{
    this.props.dispatch({
      type: 'dictionary/orgStaticInfo',
      payload: { orgId: this.state.sourceOrgId },
      callback: (data) => this.setState({ selectDatas: data })
    })
  }
  onFocusSelectNew = () =>{
    this.props.dispatch({
      type: 'dictionary/orgStaticInfo',
      payload: { orgId: this.state.newOrgId }
    })
  }
  // 新增数据字典
  submit = (values) =>{
    console.log(values,'values');
    this.setState({ dirtyClick: true })
    if(this.state.isEdit){
      //编辑
      values.staticId = this.state.record.staticId
      this.props.dispatch({
        type: 'dictionary/updateStaticInfo',
        payload: values,
        callback: () =>{
          this.setState({ visible: false,dirtyClick: false });
          this.refs.table.fetch();
        }
      })
    }else{
      console.log('新增')
      this.props.dispatch({
        type: 'dictionary/insertStaticInfo',
        payload: values,
        callback: ()=>{
          this.setState({ visible: false,dirtyClick: false, orgType: null });
          this.refs.table.fetch();
        }
      })
    }
  }
  // 克隆机构
  clone = (values) =>{
    this.props.dispatch({
      type: 'dictionary/copyStaticInfo',
      payload: values,
      callback: () =>{
        this.setState({ cloneVisible: false });
        this.refs.table.fetch();
      }
    })
  }
  render(){
    const { query, title, isEdit, visible, cloneVisible, sourceOrgId, newOrgId, selectDatas } = this.state;
    const columns = [{
      title: '编码',
      dataIndex: 'tfClo',
    }, {
      title: '名称',
      dataIndex: 'tfComment',
    }, {
      title: '机构名称',
      dataIndex: 'orgName',
    }, {
      title: '排序',
      dataIndex: 'fsort',
    },{
      title: '操作',
      dataIndex: 'actions',
      render: (text, record) => {
        return (
          <span>
            <a onClick={this.edit.bind(null,record)}> {'编辑'} </a>
          </span>
        )
      }
    }];
    return (
      <div>
        <Row className='ant-row-bottom'>
          <Col span={10}>
            <Search
              ref='search'
              placeholder="名称、编码、机构名称"
              style={{ width: 260 }}
              onSearch={value =>  {this.refs.table.fetch({'searchParams':value})}}
            />
          </Col>
          <Col span={10} offset={4} style={{textAlign: 'right'}}>
            <Button type='primary' icon='plus' onClick={()=>{
                if(this.addOrEditForm){
                  this.addOrEditForm.resetFields();
                }
                this.setState({ visible: true,title: '新建字典',isEdit: false,record: {} });
              }}>
              {'新建分类'}
            </Button>
            <Button type='default' onClick={()=>this.setState({ cloneVisible: true })} style={{ marginLeft: 8,marginRight: 8 }}>{'克隆'}</Button>
          </Col>
        </Row>
        <Modal
          centered={true}
          title={title}
          visible={visible}
          width={460}
          onCancel={()=>this.setState({ visible: false,isEdit: false })}
          footer={null}
        >
          <WrapperForm 
            selectDatas={selectDatas}
            isEdit={isEdit}
            cb={(orgId,orgType) => this.setState({ orgId: orgId,orgType: orgType })}
            callback={(value)=>this.setState({ staticType: value })}
            onFocusSelect={this.onFocusSelect}
            addFunc={this.submit}
            orgId={this.state.orgId}
            orgType={this.state.orgType}
            data={this.state.record}
            dirtyClick={this.state.dirtyClick}
            ref={(form) => this.addOrEditForm = form}
          />
        </Modal>
        <Modal
          title='克隆'
          centered={true}
          visible={cloneVisible}
          width={460}
          onCancel={()=>this.setState({ cloneVisible: false })}
          footer={null}
        >
          <WrapperCloneForm 
            onFocusSelectSource={this.onFocusSelectSource}
            onFocusSelectNew={this.onFocusSelectNew}
            cb={value=> this.setState(value)}
            clone={this.clone}
            data={{
              sourceOrgId,
              newOrgId,
              parentData: selectDatas,
              newTreeData: selectDatas
            }}
          />
        </Modal>
        <RemoteTable 
          query={query}
          ref='table'
          columns={columns}
          showHeader={true}
          scroll={this.props.scroll || { x: '100%' }}
          url={ysy.ITEMSDATA_LIST}
          rowKey='staticId'
        />
      </div>
    )
  }
}
export default connect(state =>  state)(ClassifyMgt);