export default {
    state: {
        isCollapse: false,
        // tabsList：面包屑的内容 首页为默认值
        tabsList: [
            {
                path: '../home',
                name: 'home',
                label: '首页',
                icon: 'home'
            }
        ],
        currentMenu: null
    },
    mutations: {
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse//侧栏是否打开
        },
        //点击侧栏 是否出现面包屑
        selectMenu(state,val){
            if(val.name !== 'home'){
                state.currentMenu = val
                //查找tabsList中是否有点击的侧栏标签
                const result = state.tabsList.findIndex(item => item.name === val.name)
                //没有的话直接跳转
                if(result === -1){
                    state.tabsList.push(val)
                }
            }else{
                state.currentMenu = null
            }
        },
        closeTag(state,val){
            //找到tabsList中相应的标签的位置
            const result = state.tabsList.findIndex(item => item.name === val.name)
            //从tabsList中删除标签
            state.tabsList.splice(result,1)
        }
    }
}