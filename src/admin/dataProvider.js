import axios from 'axios';


const apiUrl = import.meta.env.VITE_API_URL;


const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const dataProvider = {
  getList: async resource => {
    const res = await axios.get(`${apiUrl}/api/${resource}`, {
      headers: getAuthHeaders(),
    });
    return { data: res.data, total: res.data.length };
  },

  getOne: async (resource, params) => {
    const res = await axios.get(`${apiUrl}/api/${resource}/${params.id}`, {
      headers: getAuthHeaders(),
    });
    return { data: res.data };
  },

  create: async (resource, params) => {
  const isMultipart =
    resource === 'activities' &&
    params.data.image instanceof File; // plus besoin de `.rawFile`

  if (isMultipart) {
    const formData = new FormData();
    Object.entries(params.data).forEach(([key, value]) => {
      if (value == null) return;
      if (key === 'image') {
        formData.append('image', value);  // value est un File
      } else {
        formData.append(key, value);
      }
    });
    const res = await axios.post(`${apiUrl}/api/${resource}`, formData, {
      headers: {
        ...getAuthHeaders(),
        'Content-Type': 'multipart/form-data',
      },
    });
    return { data: res.data };
  }

  // sinon JSON classique…
  const res = await axios.post(`${apiUrl_1}/${resource}`, params.data, {
    headers: getAuthHeaders(),
  });
  return { data: res.data };
},


  update: async (resource, params) => {
    const { id, data } = params;
    const url = `${apiUrl_1}/${resource}/${id}`;
    const isMultipart = resource === 'activities' && data.image?.rawFile instanceof File;
    if (isMultipart) {
      const formData = new FormData();
      for (const key in data) {
        const value = data[key];
        if (value === undefined || value === null) continue;
        if (key === 'image' && value.rawFile instanceof File) {
          formData.append('image', value.rawFile);
        } else if (typeof value === 'object' && !(value instanceof File)) {
          formData.append(key, JSON.stringify(value));
        } else {
          formData.append(key, value);
        }
      }
      const res = await axios.patch(url, formData, {
        headers: {
          ...getAuthHeaders(),
          'Content-Type': 'multipart/form-data',
        },
      });
      return { data: res.data };
    }

    const res = await axios.patch(url, data, {
      headers: getAuthHeaders(),
    });
    return { data: res.data };
  },

  getMany: async (resource, params) => {
    const res = await axios.post(
      `${apiUrl}/api/${resource}/many`,
      { ids: params.ids },
      { headers: getAuthHeaders() }
    );
    return { data: res.data };
  },

  delete: async (resource, params) => {
    const res = await axios.delete(`${apiUrl}/api/${resource}/${params.id}`, {
      headers: getAuthHeaders(),
    });
    return { data: res.data };
  },
};

export default dataProvider;
