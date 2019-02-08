import PropTypes from 'prop-types';

class Button extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
		}
    }
    
    render() {

        const { type='button', label='Button', flavor='primary', onClick, id='0', value='0' } = this.props;

        return (
            <button 
                type={type}
                className={`form-control btn btn-${flavor || 'primary'}`} 
                name={id} 
                id={id} 
                defaultValue={value} 
                onClick={onClick}
            >
                {label}
                <style jsx>{`
                `}</style>
            </button>
        );
	}
}

Button.propTypes = {
    type: PropTypes.string,
    items: PropTypes.array
};

export default Button;
