import React from "react";

let statisticsColumns = () => {
    let myDate = new Date();
    let days = myDate.getDay();
    switch (days) {
        case 1:
            days = '星期一';
            break;
        case 2:
            days = '星期二';
            break;
        case 3:
            days = '星期三';
            break;
        case 4:
            days = '星期四';
            break;
        case 5:
            days = '星期五';
            break;
        case 6:
            days = '星期六';
            break;
        case 0:
            days = '星期日';
            break;
    }
    return [
        {
            title: days,
            text: 28,
            board: true
        },
        {
            title: '当前任务总数',
            text: 28,
            board: true
        },
        {
            title: '超时任务总数',
            text: 28,
            board: true
        },
        {
            title: '进行中任务总数',
            text: 28,
            board: true
        },
        {
            title: '今日完成任务数',
            text: 28,
            board: true
        },
        {
            title: '超时完成任务数',
            text: 28,
            board: false
        }
    ];
}

let requirementColumns = [
    {
        title: '序号',
        dataIndex: 'id',
        key: 'id',
        width: 100,
        fixed: 'left',
        align: 'center',
        render: text => <a>{text}</a>,
    },
    {
        title: '功能模块/里程碑',
        dataIndex: 'milestone',
        key: 'milestone',
        align: 'center',
        ellipsis: true,
        width: 150,
    },
    {
        title: '需求池编号',
        dataIndex: 'deadline',
        key: 'deadline',
        align: 'center',
        ellipsis: true,
        width: 150
    },
    {
        title: '需求名称',
        dataIndex: 'deadline',
        key: 'deadline',
        align: 'center',
        width: 150,
        ellipsis: true,
    },
    {
        title: '任务说明',
        dataIndex: 'deadline',
        key: 'deadline',
        align: 'center',
        width: 150,
        ellipsis: true,
    },
    {
        title: '开发计划开始日',
        dataIndex: 'level',
        key: 'level',
        align: 'center',
        width: 150,
    },
    {
        title: '开发计划结束日',
        dataIndex: 'deadline',
        key: 'deadline',
        align: 'center',
        ellipsis: true,
        width: 150,
    },
    {
        title: '开发负责人',
        dataIndex: 'deadline',
        key: 'deadline',
        ellipsis: true,
        align: 'center',
        width: 150,
    },
    {
        title: '测试计划开始日',
        dataIndex: 'deadline',
        key: 'deadline',
        align: 'center',
        width: 150,
    },
    {
        title: '测试计划结束日',
        dataIndex: 'status',
        key: 'status',
        align: 'center',
        width: 150,
    },
    {
        title: '测试负责人',
        dataIndex: 'deadline',
        key: 'deadline',
        align: 'center',
        width: 150,
        ellipsis: true,
    },
    {
        title: '实际完成时间',
        dataIndex: 'deadline',
        key: 'deadline',
        ellipsis: true,
        align: 'center',
        width: 150,
    },
    {
        title: '完成情况',
        dataIndex: 'deadline',
        key: 'deadline',
        ellipsis: true,
        align: 'center',
        width: 150,
    },
    {
        title: '备注',
        dataIndex: 'deadline',
        key: 'deadline',
        ellipsis: true,
        align: 'center',
        width: 150,
    }
];

export { statisticsColumns, requirementColumns }