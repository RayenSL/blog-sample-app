import { toast } from 'react-hot-toast';

const tempHeaders = { token: 'pj11daaQRz7zUIH56B9Z' };

export const get = async (url: string) => {
  return fetch(url, { headers: tempHeaders }).then((res) => res.json());
};

export const post = async (url: string, body?: any) => {
  return fetch(url, {
    headers: tempHeaders,
    method: 'POST',
    body: JSON.stringify(body),
  })
    .then((res) => {
      if (res.status === 200) res.json().then((js) => toast(js.message));
      if (res.status === 403) res.json().then((js) => toast.error(js.message));

        return res;
    })
    .then((res) => res.json())
    .catch((err) => toast.error(err));
};
