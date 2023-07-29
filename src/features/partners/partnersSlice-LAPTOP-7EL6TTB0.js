import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { PARTNERS } from '../../app/shared/PARTNERS';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

const initialState = {
    partnersArray: [],
    isLoading: true,
    errMsg: ''
};

export const selectAllPartners=() =>{
    return PARTNERS
};

export const selectFeaturedPartner=() =>{
      return PARTNERS.find((campsite) => campsite.featured);
};

export const fetchPartners = createAsyncThunk(
    'partners/fetchPartners',
    async () => {
        const response = await fetch(baseUrl + 'partners');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);