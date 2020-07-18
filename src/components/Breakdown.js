import React, { Component } from 'react';
import '../styles/breakdown.css'


class Breakdown extends Component {
    

    sumCategory = () => {
        const data = this.props.data
        let sumAmountCategory = {}
        let categoryArr = []


        for (let d of data )
        {
            if (!sumAmountCategory[d.category])
            {
                    sumAmountCategory[d.category] = d.amount
            }

            else {
                sumAmountCategory[d.category] += d.amount
            }

        }


        return sumAmountCategory
    }


    render() { 
        let sumCategoryArr = this.sumCategory()
        console.log(sumCategoryArr)
        console.log(Object.keys(sumCategoryArr));
        let categoryArr = Object.keys(sumCategoryArr)


        return (
                <div>

                    {categoryArr.map(n=>{
                        return (
                            <div> {n} | {sumCategoryArr[n]} </div>
                        )
                    })}
                            
                </div>
        );
    }
}
 
export default Breakdown;


  // { amount: x, vendor: "y", category: "z" }

  //{self.props.contents[key]}
                      {/* {data.map(m=>{return( 
                    <Transaction data={m} deleteTransaction={this.props.deleteTransaction}/>)
                    })} */}