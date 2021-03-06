import React, {PureComponent} from 'react';

import {Table, Input, Row, Col, Tooltip} from 'antd';

const dataSource = [
    {
        key: 1,
        sendList: 'FY00221180700001RP',
        stockOut: 'CK00221180700001EE',
        pharmacy: '中心药房',
        commonName: '注射用复方甘草酸苷',
        goodsName: '注射用复方甘草酸苷',
        standard: '甘草酸苷80mg',
        dosageForm: '注射剂(冻干粉针剂)',
        manufacturer: '浙江安宝药业有限公司',
        packingUnit: '瓶',
        mixUnit: '瓶',
        dispensingUnit: '瓶',
        exNum: 21,
        settlementPrice: '10.0000',
        settlementMoney: '210.0000',
        batchNum: 'PH123',
        manufactureDate: '2018-07-10',
        validUntil: '2022-07-09'
    }, {
        key: 2,
        sendList: 'FY00221180700001RP',
        stockOut: 'CK00221180700001EE',
        pharmacy: '中心药房',
        commonName: '注射用复方甘草酸苷',
        goodsName: '注射用复方甘草酸苷',
        standard: '甘草酸苷80mg',
        dosageForm: '注射剂(冻干粉针剂)',
        manufacturer: '浙江安宝药业有限公司',
        packingUnit: '瓶',
        mixUnit: '瓶',
        dispensingUnit: '瓶',
        exNum: 21,
        settlementPrice: '10.0000',
        settlementMoney: '210.0000',
        batchNum: 'PH123',
        manufactureDate: '2018-07-10',
        validUntil: '2022-07-09'
    }, {
        key: 3,
        sendList: 'FY00221180700001RP',
        stockOut: 'CK00221180700001EE',
        pharmacy: '中心药房',
        commonName: '注射用复方甘草酸苷',
        goodsName: '注射用复方甘草酸苷',
        standard: '甘草酸苷80mg',
        dosageForm: '注射剂(冻干粉针剂)',
        manufacturer: '浙江安宝药业有限公司',
        packingUnit: '瓶',
        mixUnit: '瓶',
        dispensingUnit: '瓶',
        exNum: 21,
        settlementPrice: '10.0000',
        settlementMoney: '210.0000',
        batchNum: 'PH123',
        manufactureDate: '2018-07-10',
        validUntil: '2022-07-09'
    }, {
        key: 4,
        sendList: 'FY00221180700001RP',
        stockOut: 'CK00221180700001EE',
        pharmacy: '中心药房',
        commonName: '注射用复方甘草酸苷',
        goodsName: '注射用复方甘草酸苷',
        standard: '甘草酸苷80mg',
        dosageForm: '注射剂(冻干粉针剂)',
        manufacturer: '浙江安宝药业有限公司',
        packingUnit: '瓶',
        mixUnit: '瓶',
        dispensingUnit: '瓶',
        exNum: 21,
        settlementPrice: '10.0000',
        settlementMoney: '210.0000',
        batchNum: 'PH123',
        manufactureDate: '2018-07-10',
        validUntil: '2022-07-09'
    }, {
        key: 5,
        sendList: 'FY00221180700001RP',
        stockOut: 'CK00221180700001EE',
        pharmacy: '中心药房',
        commonName: '注射用复方甘草酸苷',
        goodsName: '注射用复方甘草酸苷',
        standard: '甘草酸苷80mg',
        dosageForm: '注射剂(冻干粉针剂)',
        manufacturer: '浙江安宝药业有限公司',
        packingUnit: '瓶',
        mixUnit: '瓶',
        dispensingUnit: '瓶',
        exNum: 21,
        settlementPrice: '10.0000',
        settlementMoney: '210.0000',
        batchNum: 'PH123',
        manufactureDate: '2018-07-10',
        validUntil: '2022-07-09'
    }, {
        key: 6,
        sendList: 'FY00221180700001RP',
        stockOut: 'CK00221180700001EE',
        pharmacy: '中心药房',
        commonName: '注射用复方甘草酸苷',
        goodsName: '注射用复方甘草酸苷',
        standard: '甘草酸苷80mg',
        dosageForm: '注射剂(冻干粉针剂)',
        manufacturer: '浙江安宝药业有限公司',
        packingUnit: '瓶',
        mixUnit: '瓶',
        dispensingUnit: '瓶',
        exNum: 21,
        settlementPrice: '10.0000',
        settlementMoney: '210.0000',
        batchNum: 'PH123',
        manufactureDate: '2018-07-10',
        validUntil: '2022-07-09'
    }, {
        key: 7,
        sendList: 'FY00221180700001RP',
        stockOut: 'CK00221180700001EE',
        pharmacy: '中心药房',
        commonName: '注射用复方甘草酸苷',
        goodsName: '注射用复方甘草酸苷',
        standard: '甘草酸苷80mg',
        dosageForm: '注射剂(冻干粉针剂)',
        manufacturer: '浙江安宝药业有限公司',
        packingUnit: '瓶',
        mixUnit: '瓶',
        dispensingUnit: '瓶',
        exNum: 21,
        settlementPrice: '10.0000',
        settlementMoney: '210.0000',
        batchNum: 'PH123',
        manufactureDate: '2018-07-10',
        validUntil: '2022-07-09'
    }, {
        key: 8,
        sendList: 'FY00221180700001RP',
        stockOut: 'CK00221180700001EE',
        pharmacy: '中心药房',
        commonName: '注射用复方甘草酸苷',
        goodsName: '注射用复方甘草酸苷',
        standard: '甘草酸苷80mg',
        dosageForm: '注射剂(冻干粉针剂)',
        manufacturer: '浙江安宝药业有限公司',
        packingUnit: '瓶',
        mixUnit: '瓶',
        dispensingUnit: '瓶',
        exNum: 21,
        settlementPrice: '10.0000',
        settlementMoney: '210.0000',
        batchNum: 'PH123',
        manufactureDate: '2018-07-10',
        validUntil: '2022-07-09'
    }, {
        key: 9,
        sendList: 'FY00221180700001RP',
        stockOut: 'CK00221180700001EE',
        pharmacy: '中心药房',
        commonName: '注射用复方甘草酸苷',
        goodsName: '注射用复方甘草酸苷',
        standard: '甘草酸苷80mg',
        dosageForm: '注射剂(冻干粉针剂)',
        manufacturer: '浙江安宝药业有限公司',
        packingUnit: '瓶',
        mixUnit: '瓶',
        dispensingUnit: '瓶',
        exNum: 21,
        settlementPrice: '10.0000',
        settlementMoney: '210.0000',
        batchNum: 'PH123',
        manufactureDate: '2018-07-10',
        validUntil: '2022-07-09'
    }, {
        key: 10,
        sendList: 'FY00221180700001RP',
        stockOut: 'CK00221180700001EE',
        pharmacy: '中心药房',
        commonName: '注射用复方甘草酸苷',
        goodsName: '注射用复方甘草酸苷',
        standard: '甘草酸苷80mg',
        dosageForm: '注射剂(冻干粉针剂)',
        manufacturer: '浙江安宝药业有限公司',
        packingUnit: '瓶',
        mixUnit: '瓶',
        dispensingUnit: '瓶',
        exNum: 21,
        settlementPrice: '10.0000',
        settlementMoney: '210.0000',
        batchNum: 'PH123',
        manufactureDate: '2018-07-10',
        validUntil: '2022-07-09'
    }, {
        key: 11,
        sendList: 'FY00221180700001RP',
        stockOut: 'CK00221180700001EE',
        pharmacy: '中心药房',
        commonName: '注射用复方甘草酸苷',
        goodsName: '注射用复方甘草酸苷',
        standard: '甘草酸苷80mg',
        dosageForm: '注射剂(冻干粉针剂)',
        manufacturer: '浙江安宝药业有限公司',
        packingUnit: '瓶',
        mixUnit: '瓶',
        dispensingUnit: '瓶',
        exNum: 21,
        settlementPrice: '10.0000',
        settlementMoney: '210.0000',
        batchNum: 'PH123',
        manufactureDate: '2018-07-10',
        validUntil: '2022-07-09'
    }, {
        key: 12,
        sendList: 'FY00221180700001RP',
        stockOut: 'CK00221180700001EE',
        pharmacy: '中心药房',
        commonName: '注射用复方甘草酸苷',
        goodsName: '注射用复方甘草酸苷',
        standard: '甘草酸苷80mg',
        dosageForm: '注射剂(冻干粉针剂)',
        manufacturer: '浙江安宝药业有限公司',
        packingUnit: '瓶',
        mixUnit: '瓶',
        dispensingUnit: '瓶',
        exNum: 21,
        settlementPrice: '10.0000',
        settlementMoney: '210.0000',
        batchNum: 'PH123',
        manufactureDate: '2018-07-10',
        validUntil: '2022-07-09'
    }, {
        key: 13,
        sendList: 'FY00221180700001RP',
        stockOut: 'CK00221180700001EE',
        pharmacy: '中心药房',
        commonName: '注射用复方甘草酸苷',
        goodsName: '注射用复方甘草酸苷',
        standard: '甘草酸苷80mg',
        dosageForm: '注射剂(冻干粉针剂)',
        manufacturer: '浙江安宝药业有限公司',
        packingUnit: '瓶',
        mixUnit: '瓶',
        dispensingUnit: '瓶',
        exNum: 21,
        settlementPrice: '10.0000',
        settlementMoney: '210.0000',
        batchNum: 'PH123',
        manufactureDate: '2018-07-10',
        validUntil: '2022-07-09'
    }, {
        key: 14,
        sendList: 'FY00221180700001RP',
        stockOut: 'CK00221180700001EE',
        pharmacy: '中心药房',
        commonName: '注射用复方甘草酸苷',
        goodsName: '注射用复方甘草酸苷',
        standard: '甘草酸苷80mg',
        dosageForm: '注射剂(冻干粉针剂)',
        manufacturer: '浙江安宝药业有限公司',
        packingUnit: '瓶',
        mixUnit: '瓶',
        dispensingUnit: '瓶',
        exNum: 21,
        settlementPrice: '10.0000',
        settlementMoney: '210.0000',
        batchNum: 'PH123',
        manufactureDate: '2018-07-10',
        validUntil: '2022-07-09'
    }, {
        key: 15,
        sendList: 'FY00221180700001RP',
        stockOut: 'CK00221180700001EE',
        pharmacy: '中心药房',
        commonName: '注射用复方甘草酸苷',
        goodsName: '注射用复方甘草酸苷',
        standard: '甘草酸苷80mg',
        dosageForm: '注射剂(冻干粉针剂)',
        manufacturer: '浙江安宝药业有限公司',
        packingUnit: '瓶',
        mixUnit: '瓶',
        dispensingUnit: '瓶',
        exNum: 21,
        settlementPrice: '10.0000',
        settlementMoney: '210.0000',
        batchNum: 'PH123',
        manufactureDate: '2018-07-10',
        validUntil: '2022-07-09'
    }, {
        key: 16,
        sendList: 'FY00221180700001RP',
        stockOut: 'CK00221180700001EE',
        pharmacy: '中心药房',
        commonName: '注射用复方甘草酸苷',
        goodsName: '注射用复方甘草酸苷',
        standard: '甘草酸苷80mg',
        dosageForm: '注射剂(冻干粉针剂)',
        manufacturer: '浙江安宝药业有限公司',
        packingUnit: '瓶',
        mixUnit: '瓶',
        dispensingUnit: '瓶',
        exNum: 21,
        settlementPrice: '10.0000',
        settlementMoney: '210.0000',
        batchNum: 'PH123',
        manufactureDate: '2018-07-10',
        validUntil: '2022-07-09'
    }, {
        key: 17,
        sendList: 'FY00221180700001RP',
        stockOut: 'CK00221180700001EE',
        pharmacy: '中心药房',
        commonName: '注射用复方甘草酸苷',
        goodsName: '注射用复方甘草酸苷',
        standard: '甘草酸苷80mg',
        dosageForm: '注射剂(冻干粉针剂)',
        manufacturer: '浙江安宝药业有限公司',
        packingUnit: '瓶',
        mixUnit: '瓶',
        dispensingUnit: '瓶',
        exNum: 21,
        settlementPrice: '10.0000',
        settlementMoney: '210.0000',
        batchNum: 'PH123',
        manufactureDate: '2018-07-10',
        validUntil: '2022-07-09'
    }
]

const columns = [
    {
        title: '发药单',
        dataIndex: 'sendList'
    },  {
        title: '出库单',
        dataIndex: 'stockOut'
    }, {
        title: '药房',
        dataIndex: 'pharmacy'
    }, {
        title: '通用名',
        dataIndex: 'commonName'
    }, {
        title: '商品名',
        dataIndex: 'goodsName'
    }, {
        title: '规格',
        dataIndex: 'standard',
        className:'ellipsis',
        render:(text)=>(
          <Tooltip placement="topLeft" title={text}>{text}</Tooltip>
        )
    }, {
        title: '剂型',
        dataIndex: 'dosageForm'
    }, {
        title: '生产厂家',
        dataIndex: 'manufacturer'
    }, {
        title: '包装单位',
        dataIndex: 'packingUnit'
    }, {
        title: '最小单位',
        dataIndex: 'mixUnit'
    }, {
        title: '发药单位',
        dataIndex: 'dispensingUnit'
    }, {
        title: '出库数量',
        dataIndex: 'exNum'
    }, {
        title: '结算价格',
        dataIndex: 'settlementPrice'
    }, {
        title: '结算金额',
        dataIndex: 'settlementMoney'
    }, {
        title: '生产批号',
        dataIndex: 'batchNum'
    }, {
        title: '生产日期',
        dataIndex: 'manufactureDate'
    }, {
        title: '有效期至',
        dataIndex: 'validUntil'
    },
]

class NewSettlement extends PureComponent{
    render() {
        return (
            <div>
                <Row style={{marginBottom: 20}}>
                    <Col span={6}>
                        <Input placeholder="发药单/出库单/通用名/商品名/厂家" />
                    </Col>
                </Row>
                <Table
                    scroll={{x: '250%'}}
                    bordered
                    columns={columns}
                    dataSource={dataSource}
                    footer={()=>"总金额123456.0000元"}
                    pagination={{
                        showQuickJumper: true,
                        showSizeChanger : true,
                        showTotal: (total) => {
                          return `总共${total}个项目`;
                        }
                      }}
                />
            </div>
        )
    }
};

export default NewSettlement