import React from 'react'
import {
    useQuery
} from '@tanstack/react-query';
import axios from '../lib/axios';

function Cars() {

    const { isLoading, isError, data, error } = useQuery({ queryKey: ['todos'], queryFn: fetchCarsData })
    async function fetchCarsData() {
        try {
            const response = await axios.get('cars', {
                params: { model: 'corolla', limit: 50 }
            });
            console.log(response.data, 'DATATA');
        } catch (error) {
            console.error(error);
        }
    }

    console.log({ isLoading, isError, data, error }, 'some data')
    return (
        <div>Cars</div>
    )
}

export default Cars