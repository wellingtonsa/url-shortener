/* eslint-disable no-underscore-dangle */

import { URL } from 'constants/types';
import api from '.';

export async function topFive() {
  try {
    const response = await api.get('url');
    return response.data;
  } catch (err) {
    return err.data;
  }
}

export async function findURL(short: string) {
  try {
    const response = await api.get(`url/${short}`);
    return response.data;
  } catch (err) {
    return err.data;
  }
}

export async function create(url: URL) {
  try {
    const response = await api.post('url', {
      ...url,
    });
    return response.data;
  } catch (err) {
    return err.data;
  }
}
