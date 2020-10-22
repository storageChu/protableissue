import axios from 'axios';
import { message} from 'antd';

axios.defaults.baseURL = '/api';

export let requestPost = (url, data = {}, is_success_notify = false) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'POST',
            url: url,
            data: data
        }).then(
            res => {
                message.success('This is a success message');
                resolve(res.data)
            }
        ).catch(
            err => {
                message.error('This is an error message')
                reject(err)
            }
        )
    })
}


export let requestGet = (url, params = {}, is_success_notify = false) => {
    return new Promise((resolve, reject) => {
        axios({
            url: url,
            params: params
        }).then(
            res => {
                message.success(res.data.info);
                resolve(res.data)
            }
        ).catch(
            err => {
                message.error('This is an error message')
                reject(err)
            }
        )
    })
}