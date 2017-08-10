import React from 'react';
import {CustomBox as Box} from 'adminlte-reactjs';
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
            trank: 1,
            group: null
        };

        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onGroupChange = this.onGroupChange.bind(this);
    }

    onChange(val) {
        this.setState({trank: val});
    }
    onGroupChange(val) {
        this.setState({group: val});
    }

    onDatesChange({startDate, endDate}) {
        this.setState({startDate, endDate});
    }

    onFocusChange(focusedInput) {
        this.setState({focusedInput});
    }

    render() {
        const {focusedInput, startDate, endDate} = this.state;
        const {options} = this.state;
        const {groups,connectors} = this.props;
        return <div className="row"><Box
            border={true}
            width="12"
            title="Фильтры"
            theme="box-default">
            <div className="row">
                <div className="col-lg-4  col-sm-4">
                    <Select
                        name="form-field-name"
                        labelKey="name"
                        valueKey="id"
                        value={this.state.trank}
                        options={groups}
                        onChange={this.onChange.bind(this)}
                    />
                </div>
                <div className="col-lg-4  col-sm-4">
                    <Select
                        name="form-field-name"
                        labelKey="name"
                        valueKey="id"
                        value={this.state.group}
                        options={connectors}
                        onChange={this.onGroupChange}
                    />
                </div>
                <div className="col-lg-4 col-sm-4">
                    <DateRangePicker
                        onDatesChange={this.onDatesChange}
                        onFocusChange={this.onFocusChange}
                        focusedInput={focusedInput}
                        startDate={startDate}
                        endDatePlaceholderText="Конец"
                        startDatePlaceholderText="Начало"
                        endDate={endDate}
                    />
                </div>
            </div>
        </Box>
        </div>;
    }
}

export default Filter;