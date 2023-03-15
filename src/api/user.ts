import request from '@/utils/request'

export function getList(params: any) {
  return request({
    url: '/user/getList',
    method: 'get',
    params,
  })
}

export function doEdit(data: any) {
  return request({
    url: '/user/doEdit',
    method: 'post',
    data,
  })
}

export function doDelete(data: any) {
  return request({
    url: '/user/doDelete',
    method: 'post',
    data,
  })
}