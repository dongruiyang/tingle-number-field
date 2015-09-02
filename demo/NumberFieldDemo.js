let GroupList = require('tingle-group-list');
let NumberField = require('../src');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            number: ''
        }
    }

    handleNumberChange(newValue) {
        this.setState({
            number: newValue
        });
    }

    render() {
        let t = this;
        return (
            <div>
                <GroupList title="只能输入有效数字">
                    <NumberField label="金额" placeholder="请输入"
                     value={t.state.number} category="money"
                     onChange={t.handleNumberChange.bind(t)}/>
                     <NumberField label="身份证" placeholder="请输入"
                     value={t.state.number} category="number"
                     onChange={t.handleNumberChange.bind(t)}/>
                     <NumberField label="信用卡号" placeholder="请输入"
                     value={t.state.number} category="number"
                     onChange={t.handleNumberChange.bind(t)}/>
                     <NumberField label="手机号码" placeholder="请输入"
                     value={t.state.number}
                     onChange={t.handleNumberChange.bind(t)}/>
                </GroupList>
            </div>
        );
    }
};

module.exports = Demo;