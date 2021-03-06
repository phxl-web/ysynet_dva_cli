import React, { PureComponent } from 'react';
import styles from './style.css';
import { connect } from 'dva';
class SubSystem extends PureComponent {
  state = {
    subSystemList: []
  }
  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.users.subSystemList.length){
      return {
        subSystemList: nextProps.users.subSystemList
      }
    }
    return null;
  }
  onClick = (item)=>{
    let values = {};
    values.subSystemId = item.subSystemId;
    values.deptGuid = item.deptGuid;
    this.props.dispatch({
      type: 'users/findMenusByUser',
      payload: values,
      callback: (data) => {
        let path = data[0].subMenus[0].path;
        this.props.history.push({ pathname: path });
        let userInfo = JSON.parse(localStorage.getItem('subSystemUser'));
        userInfo.deptGuid = item.deptGuid;
        userInfo.subSystemId = item.subSystemId;
        userInfo.subSystemName = item.name;
        localStorage.setItem('subSystemUser',JSON.stringify(userInfo));
        this.props.dispatch({
          type: 'users/setUserInfo',
          payload: userInfo
        });
        // 保存选中的子系统 subSystemId deptGuid 
        this.props.dispatch({
          type: 'users/subsystemInfo',
          payload: item
        })
      }
    })
  }
  render() {
    const { subSystemList } = this.props.users;
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <a style={{ color: '#999'}} onClick={()=>{
            window.location.hash ='/login'
            }}>退 出</a>
        </div>
        <div className={styles.content}>
          <div className={styles.contentHeader}>
            <span>医商云平台</span>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.cardList}>
              {
                subSystemList.map(item => (
                  <div key={item.subSystemId} className={styles.cardItem}>
                    <div className={styles.upperCon}>
                      <div className={styles.cardBackground}></div>
                      <div className={styles.icon}></div>
                    </div>
                    <div className={styles.main}>
                      <div className={styles.mainTitle}>{item.name}</div>
                      <div className={styles.subTitle}> {item.subTitle} </div>
                      <a className={styles.enterBtn} onClick={()=>this.onClick(item)}>进 入</a>
                    </div>
                  </div>
                )
                )
              }
              {/* <div className={styles.cardItem} onClick={() => {
                this.props.history.push({ pathname: '/drugStorage/replenishment/replenishmentPlan' })
              }}></div>
              <div className={styles.cardItemTwo} onClick={() => {
                this.props.history.push({ pathname: '/pharmacy/configMgt' })
              }}></div> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => state)(SubSystem)