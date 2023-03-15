import request from '@/utils/request'

export function getList(params: any) {
  return request({
    url: '/admin/getList',
    method: 'get',
    params,
  })
}

export function doEdit(data: any) {
  return request({
    url: '/admin/doEdit',
    method: 'post',
    data,
  })
}

export function doDelete(data: any) {
  return request({
    url: '/admin/doDelete',
    method: 'post',
    data,
  })
}