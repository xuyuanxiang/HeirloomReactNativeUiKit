import React, {Component} from 'react';
import {ListView, View, TouchableOpacity, Text, TextInput} from 'react-native'

export default class InfiniteScroll extends Component {

    constructor(props) {
        super(props);
        let data = [];
        for (let i = 0; i < 20; i++) {
            data.push(i);
        }
        this.state = {
            data,
            page: 0,
            pageSize: 20,
            loading: '',
            totalPage: 10
        };
        this.load.bind(this);
    }

    _dataSource(data) {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return ds.cloneWithRows(data);
    }

    async load(page, pageSize) {
        console.debug('load', page, pageSize);
        let {totalPage, data} = this.state;
        if (page < totalPage) {
            this.setState({loading: '正在加载。。。'});
        } else {
            this.setState({loading: '没有更多了'});
        }
        await setTimeout(() => {
            if (page < totalPage) {
                let i = page * pageSize;
                let j = i + pageSize
                for (; i < j; i++) {
                    data.splice(i, 1, i);
                }
            }
            this.setState({page, pageSize, data, loading: ''});
        }, 1500);
    }

    _renderRow(rowData, sectionId, rowId, highlight) {
        return <TouchableOpacity
            style={{height:100, backgroundColor:'#ffffff', borderBottomColor:'#000000', borderBottomWidth:0.5, justifyContent:'center'}}>
            <Text>{rowData}</Text>
        </TouchableOpacity>
    }

    handleNextPage() {
        let {page, pageSize, data, loading} = this.state;
        if (loading === true) return;
        this.load(page + 1, pageSize).done();
    }

    render() {
        return (
            <View style={{flex:1, paddingTop: 60}}>
                <View style={{height: 40, backgroundColor: '#ffffff', flexDirection:'row'}}>
                    <TextInput />
                </View>
                <View style={{flex:1}}/>
                <ListView style={{flex:1, backgroundColor:'#ffffff',marginBottom:0}}
                          pageSize={10}
                          dataSource={this._dataSource(this.state.data)}
                          renderRow={this._renderRow.bind(this)}
                          onEndReached={this.handleNextPage.bind(this)}
                          onEndReachedThreshold={200}/>
                {
                    this.state.loading
                        ?
                        <Text style={{alignItems:'center'}}>{this.state.loading}</Text>
                        :
                        null
                }
            </View>
        );
    }
}
