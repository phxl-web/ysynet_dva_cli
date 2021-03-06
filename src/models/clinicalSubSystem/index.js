import * as userSystemService from '../../services/clinicalSystem';
import { message } from 'antd';

export default {
  namespace: 'userSystem',
  state: {
    
  },
  reducers: {
    
  },
  effects: {
    //  临床科室子系统配置管理 保存
   *saveDeptConfig({ payload,callback },{ call }){
     const data = yield call(userSystemService.saveDeptConfig, payload);
     if(data.status){
       message.success('保存成功');
       if(callback) callback()
     }else{
       message.error(data.msg||'保存配置失败')
     }
   },
   *resetPwd({ payload, callback },{ call }){
    const data = yield call(userSystemService.resetOrgUserPwd,payload);
    if(data.status){
      message.success('重置密码成功');
      if(callback) callback();
    }else{
      message.error(data.msg||'重置密码失败')
    }
   },
   *addOrUpdateUser({ payload, callback },{ call }){
    const data = yield call(userSystemService.addOrUpdateOrgUser,payload);
    if(data.status){
      message.success('操作成功');
      if(callback) callback();
    }else{
      message.error(data.msg||'操作失败')
    }
   },
   *getPowerMenu({ payload, callback },{ call }){
    const data = yield call(userSystemService.getOrgUserMenus,payload);
    if(data.status){
      if(callback) callback(data.result);
    }else{
      message.error(data.msg||'获取菜单失败')
    }
   },
   *updateUserMenus({ payload,callback },{ call }){
    const data = yield call(userSystemService.updateUserMenus,payload);
    if(data.status){
      message.success('保存成功');
      if(callback) callback(data.result);
      
    }else{
      message.error(data.msg||'菜单权限保存失败')
    }
   },
   // 科室权限
   *searchDeptList({ payload,callback },{ call }){
    const data = yield call(userSystemService.selectLoginOrgDept, payload);
    if(data.status){
      if(data.result.length){
        if(callback) callback(data.result);
      }else{
        message.warning('暂无科室，请添加');
      }
    }else{
      message.error(data.msg||'获取科室失败')
    }
   },
   // 获取科室权限下 科室对应的菜单
   *genDeptMenus({ payload,callback },{ call }){
    const data = yield call(userSystemService.getDeptMenus,payload);
    if(data.status){
      if(callback) callback(data.result);
    }else{
      message.warning('暂无科室，请添加');
    }
   },
   // 编辑科室权限 科室对应菜单(保存按钮)
   *saveUserMenu({ payload,callback },{ call }){
    const data = yield call(userSystemService.saveUserMenus,payload);
    if(data.status){
      message.success('保存成功')
      if(callback) callback(data.result);
    }else{
      message.error(data.msg||'保存用户菜单权限失败')
    }
   },
    //  非 临床科室子系统配置管理  保存
    *saveStorageConfig({ payload,callback },{ call }){
      const data = yield call(userSystemService.saveStorageConfig, payload);
      if(data.status){
        message.success('保存成功');
        if(callback) callback()
      }else{
        message.error(data.msg||'保存配置失败')
      }
    },
  
  },
  subscriptions: {
    
  }
}