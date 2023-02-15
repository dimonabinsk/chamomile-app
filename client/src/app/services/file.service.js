import httpService from "./http.service";

const uploadAvatar = "/upload_avatar/";

const fileService = {
  upload: async (payload, name) => {
    const { data } = httpService.post(uploadAvatar + name, payload);
    return data;
  },
};

export default fileService;
