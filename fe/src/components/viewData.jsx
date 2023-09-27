import { useState } from 'react';
import { Table } from 'reactstrap';


const ViewData = ()=>{
    const [transction, setTransction]= useState({data:[]});
    return (
        <>
         <Table>
            <thead>
                <tr>
                <th>
                    Id
                </th>
                <th>
                    Amount
                </th>
                <th>
                    Currency
                </th>
                </tr>
            </thead>
        <tbody>
            {transction.data?.length > 0 && transction?.data.map((data)=>
                <tr key={data.id}>
                 <th scope="row">
                    {data.id}
                    </th>
                    <td>
                     {data.amount}
                    </td>
                    <td>
                    {data.currency}
                    </td>
                </tr>
            )
           }
        </tbody>

    </Table>
    {transction.data?.length === 0 && (<p className='text-center'>No Data To show! </p>)}
        </>
    )
}

export default ViewData