import instance from './axios.setting'


export default {
  saveNav(obj) {
    if(obj.postData._id) {
      return instance.put(`/nav/${obj.postData._id}`, obj.postData)
    }else {
      return instance.post('/nav', obj.postData)
    }
  },

  getList(obj) {
    return instance.get('/nav/index', { params: obj })
  },

  deleteNav(_id) {
    return instance.delete(`/nav/${_id}`)
  },

  getFormatNav() {
    return instance.get('/nav')
  }
}