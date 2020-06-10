import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {

    renderError({ error, touched }) {
        if (touched && error) {
            return (<div className="ui error message">
                <div className="header">{error}</div>
            </div>)
        }
    }

    renderInput = ({ input, label, meta }) => {
        return (
            <div className={ meta.error && meta.touched ? "field error" : "field"}>
                <label>{label}</label>
                <input {...input} />
                {this.renderError(meta)}
            </div>

        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter title" />
                <Field name="description" component={this.renderInput} label="Enter desription" />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = (formsValues) => {
    const error = {}
    if (!formsValues.title)
        error.title = 'Title is requered'
    if (!formsValues.description)
        error.description = 'Desc is required'
    return error;

}

const formWrapped = reduxForm({
    form: 'StreamForm',
    validate
})(StreamForm);

export default formWrapped;