## TL;DR

数字输入框。

![效果图](https://g01.alibaba-inc.com/tfscom/TB1tl5JIVXXXXaeXFXXXXXXXXXX.tfsprivatepng_670x670.jpg)

## Simple Usage

```
class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            number: ''
        }
    }

    handleChange(newValue) {
        this.setState({
            number: newValue
        });
    }

    render() {
        var t = this;
        return (
            <NumberField label="金额" placeholder="请输入"
             value={t.state.number}
             onChange={t.handleChange.bind(t)}/>
        );
    }
};

```

## 可用配置

| 配置项 | 必填 | 默认值 | 功能/备注 |
|---|----|---|----|
|className|optional|-|自定义的扩展样式名称|
|filter|optional|-|自定义的value过滤器，参数是用户输入的值，返回过滤后的值，默认不处理|
|label|optional|-|表单域label文字标签|
|onChange|required|-|当输入值时触发的回调，第一个参数是输入的新值，第二个参数是e|
|onFocus|optional|-|获取焦点时的回调，第一个参数是当前值，第二个参数是e|
|onBlur|optional|-|失去焦点时的回调，第一个参数是当前值，第二个参数是e|
|placeholder|optional|-|水印提示|
|readOnly|optional|false|布尔值，设置是否是只读状态|
|multiLine|optional|false|布尔值，设置是否是多行输入框|
|value|required|-|输入框的值|
|category|optional|-|输入值分隔类型，目前支持的选项值为 number、money|

> 所有props都是可选的。


## Links 相关链接

- [Fire a bug/Issues 提Bug](http://gitlab.alibaba-inc.com/tinglejs/tingle-number-field/issues)