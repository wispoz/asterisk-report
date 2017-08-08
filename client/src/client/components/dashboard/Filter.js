import React from 'react';
import {CustomBox as Box, Callout} from 'adminlte-reactjs';
import {DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-select/dist/react-select.css';
import Select from 'react-select';

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: props.autoFocus,
            date: props.initialDate,
            trank: "one"
        };

        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(val) {
        this.setState({"trank": val});
    }

    onDatesChange({startDate, endDate}) {
        this.setState({startDate, endDate});
    }

    onFocusChange(focusedInput) {
        this.setState({focusedInput});
    }

    render() {
        const {focusedInput, startDate, endDate} = this.state;
        const options = [
            {value: 'one', label: 'One'},
            {value: 'two', label: 'Two'},
            {value: 'two1', label: 'Two1'},
            {value: 'two2', label: 'Two2'},
            {value: 'two3', label: 'Two3'},
            {value: 'two4', label: 'Two4'}
        ];
        return <div className="row"><Box
            border={true}
            width="12"
            title="Фильтры"
            theme="box-default">
            <div className="row">
                <div className="col-lg-4  col-sm-4">
                    <Select
                        name="form-field-name"
                        value={this.state.trank}
                        options={options}
                        onChange={this.onChange.bind(this)}
                    />
                </div>
                <div className="col-lg-4 col-sm-4">
                    <DateRangePicker
                        id="date_input"
                        onDatesChange={this.onDatesChange}
                        onFocusChange={this.onFocusChange}
                        focusedInput={focusedInput}
                        startDate={startDate}
                        endDate={endDate}
                    />
                </div>
            </div>


        </Box></div>;
    }
}

export default Filter;