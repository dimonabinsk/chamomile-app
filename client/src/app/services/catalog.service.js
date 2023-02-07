import httpService from "./http.service";

const catalogEndPoint = "catalog/";

const catalogService = {
    getAll: async () => {
        const {data} = await httpService.get(catalogEndPoint);
        return data;
    }
};

export default catalogService;