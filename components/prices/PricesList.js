import PrettyRate from './PrettyRate';
import ConversionRate from './ConversionRate';

/* this is a class component */

class PricesList extends React.Component {
	state = {
        meta: {name:'Prices List',component:'PricesList'},
		currencies: ['USD','GBP','EUR']
	}

	render() {

        // console.log(this.state.meta.name+' this.props: ', this.props);

        let currencyList = this.state.currencies.map((code,i) => {
            const currency = this.props.bpi[code];
			return <tr key={i}>
                <td>
                    {/* <small>{this.state.meta.name}</small><br/> */}
                    {currency.description}
                </td>
                <td style={{textAlign:'center'}}>N/A</td>
                <td style={{textAlign:'center'}}>
                    <span className='badge badge-primary'>{currency.code}</span>
                </td>
                <td style={{textAlign:'center'}}>
                    {/* <strong dangerouslySetInnerHTML={{__html:currency.symbol}}></strong> */}
                    <strong dangerouslySetInnerHTML={ currency.symbol ? {__html:currency.symbol} : 'N/A' }></strong>
                </td>
                <td style={{textAlign:'right'}}>
                    <ConversionRate 
                        comp={currency} 
                        base={this.props.bpi['USD']} 
                    />
                </td>
                <td style={{textAlign:'right'}}>
                    <PrettyRate rate={currency.rate} />
                </td>
            </tr>
		});

        return (<tbody className='table-active'>
            {currencyList}
            <style jsx>{`
        	`}</style>
        </tbody>);
    }
}

export default PricesList;