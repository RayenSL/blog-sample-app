import { toast } from 'react-hot-toast';

const tempHeaders = { token: 'pj11daaQRz7zUIH56B9Z' };

export const get = async (url: string) => {
  return fetch(url, { headers: tempHeaders }).then((res) => res.json());
};

export const post = async (url: string, body?: any) => {
  console.log(body);
  return fetch(url, {
    headers: tempHeaders,
    method: 'POST',
    body: JSON.stringify(body),
  })
    .then((res) => {
      if (res.status === 200) res.json().then((js) => toast(js.statusText));
      if (res.status === 403)
        res.json().then((js) => toast.error(js.statusText));
      if (res.status === 422) res.json().then((js) => toast.error(js.image[0]));

      return res;
    })
    .catch((err) => toast.error(err.message));
};
